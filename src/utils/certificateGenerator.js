import JSZip from "jszip";

// ============================================================
// Certificate Generator Utility
// ============================================================
// Uses an offscreen HTML Canvas to draw the certificate template
// and overlay each team member's name. Outputs PNG blobs that are
// then bundled into a .zip for download.
// ============================================================

const CERTIFICATE_TEMPLATE_PATH = "/images/certificate-template.png";

/**
 * Load an image from a URL and return an HTMLImageElement.
 */
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/**
 * Generate a single certificate as a PNG Blob.
 *
 * @param {HTMLImageElement} templateImg — The pre-loaded template image.
 * @param {string} memberName — The name to render on the certificate.
 * @returns {Promise<Blob>} — A PNG blob of the completed certificate.
 */
export async function generateCertificateImage(templateImg, memberName) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Use the template's natural resolution for high quality output
  canvas.width = templateImg.naturalWidth;
  canvas.height = templateImg.naturalHeight;

  // 1. Draw the certificate template as background
  ctx.drawImage(templateImg, 0, 0, canvas.width, canvas.height);

  // 2. Configure the name text style
  // Position calibrated to the SIH 2026 sample certificate:
  // "Your Name" sits at roughly 50% horizontal, 42% from top
  const nameX = canvas.width * 0.5;
  const nameY = canvas.height * 0.44;

  // Auto-size font: shrink if name is very long
  const baseFontSize = Math.round(canvas.width * 0.045);
  const fontSize = memberName.length > 20
    ? Math.round(baseFontSize * 0.75)
    : memberName.length > 14
      ? Math.round(baseFontSize * 0.88)
      : baseFontSize;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Draw the name in a calligraphic style
  // Using a common cursive font — falls back to serif if not available
  ctx.font = `italic ${fontSize}px "Great Vibes", "Dancing Script", "Brush Script MT", "Segoe Script", cursive, serif`;
  ctx.fillStyle = "#1a237e"; // deep navy blue to match certificate palette

  // Subtle text shadow for depth
  ctx.shadowColor = "rgba(0, 0, 0, 0.08)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 2;

  ctx.fillText(memberName, nameX, nameY);

  // Reset shadow
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // 3. Convert canvas to PNG blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to generate certificate image"));
      },
      "image/png",
      1.0
    );
  });
}

/**
 * Generate certificates for all team members and download as a .zip file.
 *
 * @param {string} teamName — Used for the zip file name.
 * @param {Array<{name: string, role: string}>} members — The team's member list.
 * @param {function} onProgress — Optional callback: (current, total) => void.
 * @returns {Promise<void>}
 */
export async function downloadTeamCertificatesZip(teamName, members, onProgress) {
  // Load the certificate template image
  const templateImg = await loadImage(CERTIFICATE_TEMPLATE_PATH);

  const zip = new JSZip();
  const total = members.length;

  for (let i = 0; i < total; i++) {
    const member = members[i];
    if (onProgress) onProgress(i + 1, total);

    // Generate the certificate image for this member
    const blob = await generateCertificateImage(templateImg, member.name);

    // Sanitize member name for filename
    const safeName = member.name
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "_");

    zip.file(`${safeName}_Certificate.png`, blob);
  }

  // Generate the zip and trigger download
  const zipBlob = await zip.generateAsync({ type: "blob" });

  // Create a temporary download link
  const safeTeamName = teamName.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "_");
  const url = URL.createObjectURL(zipBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeTeamName}_Certificates.zip`;
  document.body.appendChild(link);
  link.click();

  // Cleanup
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 1000);
}
