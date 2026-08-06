import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getTeamByNameAndEmail } from "../data/teamsData";
import { downloadTeamCertificatesZip } from "../utils/certificateGenerator";

// ─── Animation Variants ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const memberCard = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

// ─── Helper: Avatar Initials ───────────────────────────────
function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Avatar background colors
const avatarBgs = [
  "bg-[#0c2340]",
  "bg-[#316bf3]",
  "bg-[#002919]",
  "bg-[#4b5f7f]",
  "bg-[#059669]",
  "bg-[#0051d5]",
];

// ─── Inline Styles (matching the reference HTML) ───────────
const meshGradientStyle = {
  backgroundColor: "#f7f9fb",
  backgroundImage:
    "radial-gradient(at 0% 0%, hsla(217, 100%, 94%, 1) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(217, 100%, 94%, 1) 0px, transparent 50%)",
};

const glassPanelStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  boxShadow: "0 8px 32px 0 rgba(12, 35, 64, 0.05)",
};

const certShowcaseShadow = {
  boxShadow:
    "0 20px 40px -10px rgba(12, 35, 64, 0.2), 0 0 20px rgba(49, 107, 243, 0.1)",
};

const securityPatternStyle = {
  backgroundImage:
    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(12, 35, 64, 0.02) 10px, rgba(12, 35, 64, 0.02) 20px)",
};

// ─── CSS for animations (injected via style tag) ───────────
const customCSS = `
  @keyframes pulse-emerald {
    0% { box-shadow: 0 0 0 0 rgba(5, 150, 105, 0.4); }
    70% { box-shadow: 0 0 0 8px rgba(5, 150, 105, 0); }
    100% { box-shadow: 0 0 0 0 rgba(5, 150, 105, 0); }
  }
  .pulse-badge { animation: pulse-emerald 2s infinite; }
  .tilt-effect {
    transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
    transition: transform 0.5s ease;
  }
  .tilt-effect:hover {
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
  }
`;

// ─── Material Symbol helper ────────────────────────────────
function MIcon({ name, fill = false, className = "", style = {} }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}`, ...style }}
    >
      {name}
    </span>
  );
}

// ─── Certificates Page Component ───────────────────────────
const Certificates = () => {
  const navigate = useNavigate();

  // Verification form state
  const [teamName, setTeamName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Team state (null = not verified yet)
  const [team, setTeam] = useState(null);
  const [verifiedEmail, setVerifiedEmail] = useState("");

  // Download state
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  // ─── Handlers ───────────────────────────────────────────
  const handleVerify = (e) => {
    e.preventDefault();
    setVerifying(true);
    setErrorMessage("");

    setTimeout(() => {
      const foundTeam = getTeamByNameAndEmail(teamName.trim(), leaderEmail.trim());
      if (foundTeam) {
        setTeam(foundTeam);
        setVerifiedEmail(leaderEmail.trim());
        setErrorMessage("");
      } else {
        setTeam(null);
        setErrorMessage(
          "No matching team found. Please check your team name and leader email, and try again."
        );
      }
      setVerifying(false);
    }, 800);
  };

  const handleReset = () => {
    setTeam(null);
    setTeamName("");
    setLeaderEmail("");
    setVerifiedEmail("");
    setErrorMessage("");
  };

  const handleDownload = async () => {
    if (!team) return;
    setDownloading(true);
    setProgress({ current: 0, total: team.members.length });

    try {
      await downloadTeamCertificatesZip(
        team.teamName,
        team.members,
        (current, total) => setProgress({ current, total })
      );
    } catch (err) {
      console.error("Download error:", err);
      alert("Something went wrong generating certificates. Please try again.");
    } finally {
      setDownloading(false);
      setProgress({ current: 0, total: 0 });
    }
  };

  // ─── Sanitize team name for filename ────────────────────
  const safeTeamName = team
    ? team.teamName.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "_").toLowerCase()
    : "";

  // ─── Render ─────────────────────────────────────────────
  return (
    <>
      <style>{customCSS}</style>

      <div
        className="min-h-screen flex flex-col antialiased selection:bg-[#dbe1ff] selection:text-[#00174b]"
        style={{
          fontFamily: "'Inter', sans-serif",
          ...meshGradientStyle,
        }}
      >
        {/* ── Top Nav Bar ─────────────────────────────────── */}
        <header
          className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 h-16 border-b border-[#e2e8f0] shadow-sm"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div
            className="text-[24px] font-bold text-[#0c2340] leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.01em" }}
          >
            SIH 2026 Certificate Portal
          </div>
          <div className="flex items-center gap-4">
            {team && (
              <button className="text-[#0051d5] font-bold border-b-2 border-[#0051d5] pb-1 hidden md:block text-[14px]">
                Dashboard
              </button>
            )}
            <button
              onClick={() => navigate("/")}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              title="Home"
            >
              <MIcon name="home" className="text-[#0051d5] text-[28px]" />
            </button>
          </div>
        </header>

        {/* ── Main Content ─────────────────────────────────── */}
        <main className="flex-grow pt-24 pb-8 px-4 md:px-12 w-full max-w-[1440px] mx-auto relative">
          <AnimatePresence mode="wait">
            {/* ──── Verification Form ──── */}
            {!team && (
              <motion.div
                key="verify"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-center min-h-[calc(100vh-12rem)]"
              >
                <div
                  className="rounded-2xl p-8 md:p-12 max-w-md w-full flex flex-col items-center text-center"
                  style={glassPanelStyle}
                >
                  {/* Shield Icon */}
                  <div className="w-20 h-20 rounded-full bg-[#0c2340]/5 flex items-center justify-center mb-6">
                    <MIcon
                      name="verified_user"
                      className="text-[#0051d5] text-[48px]"
                      style={{ fontVariationSettings: "'wght' 200" }}
                    />
                  </div>

                  <h2
                    className="text-[28px] font-extrabold text-[#0c2340] mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
                  >
                    Team Leader Verification
                  </h2>
                  <div className="w-16 h-[2px] bg-[#0051d5] mx-auto mb-4" />

                  <p className="text-[#191c1e] font-medium text-[14px] mb-1 leading-relaxed max-w-[340px]">
                    Enter your team name and leader email to verify your identity.
                  </p>
                  <p className="text-[#74777e] text-[12px] max-w-[300px] mb-6 leading-relaxed">
                    Only authorized team leaders can download certificates.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleVerify} className="w-full max-w-[320px] flex flex-col gap-4">
                    {/* Team Name */}
                    <div className="text-left">
                      <label className="block text-[12px] font-semibold text-[#44474d] uppercase tracking-wider mb-1.5">
                        Team Name
                      </label>
                      <div className="relative">
                        <MIcon name="groups" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#74777e] text-[18px]" />
                        <input
                          type="text"
                          value={teamName}
                          onChange={(e) => setTeamName(e.target.value)}
                          placeholder="e.g. Team Alpha"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/50 border-2 border-white/60 rounded-xl text-[14px] text-[#0c2340] font-medium placeholder:text-[#c4c6ce] focus:outline-none focus:border-[#0051d5]/40 focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Leader Email */}
                    <div className="text-left">
                      <label className="block text-[12px] font-semibold text-[#44474d] uppercase tracking-wider mb-1.5">
                        Leader Email
                      </label>
                      <div className="relative">
                        <MIcon name="email" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#74777e] text-[18px]" />
                        <input
                          type="email"
                          value={leaderEmail}
                          onChange={(e) => setLeaderEmail(e.target.value)}
                          placeholder="leader@example.com"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/50 border-2 border-white/60 rounded-xl text-[14px] text-[#0c2340] font-medium placeholder:text-[#c4c6ce] focus:outline-none focus:border-[#0051d5]/40 focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="bg-[#ffdad6] border border-[#ba1a1a]/20 rounded-xl px-4 py-3 text-left"
                        >
                          <div className="flex items-start gap-2">
                            <MIcon name="error" className="text-[#ba1a1a] text-[18px] mt-0.5 flex-shrink-0" />
                            <p className="text-[12px] text-[#93000a] font-medium leading-relaxed">
                              {errorMessage}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Verify Button */}
                    <button
                      type="submit"
                      disabled={verifying}
                      className={`
                        w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all duration-300 cursor-pointer mt-1
                        ${
                          verifying
                            ? "bg-[#c4c6ce] text-[#74777e] cursor-not-allowed"
                            : "bg-[#0051d5] hover:bg-[#0c2340] text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#0051d5]/30"
                        }
                      `}
                    >
                      {verifying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#74777e] border-t-transparent rounded-full animate-spin" />
                          <span>Verifying...</span>
                        </>
                      ) : (
                        <>
                          <MIcon name="verified_user" className="text-[20px]" />
                          <span>Verify & Access</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* ──── Team Dashboard (Command Center) ──── */}
            {team && (
              <motion.div
                key="dashboard"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* ─── Left Sidebar: Team Info & Members (4/12) ─── */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  {/* Team Overview Card */}
                  <motion.div
                    variants={fadeUp}
                    className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
                    style={glassPanelStyle}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0051d5]/10 rounded-bl-full -z-10" />
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <h1
                          className="text-[24px] md:text-[32px] font-bold text-[#0c2340] leading-tight"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
                        >
                          {team.teamName}
                        </h1>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-[14px] font-bold pulse-badge border border-[#059669]/20">
                          <MIcon name="check_circle" fill className="text-[18px] mr-1.5" />
                          Status: Verified
                        </span>
                        <p className="text-[16px] text-[#44474d] flex items-center gap-2 mt-2">
                          <MIcon name="email" className="text-[18px] text-[#0051d5]" />
                          {verifiedEmail}
                        </p>
                      </div>
                    </div>
                    <hr className="border-[#e2e8f0] my-2" />
                    <button
                      onClick={handleReset}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-[#0051d5] text-[#0051d5] text-[14px] font-semibold hover:bg-[#0051d5] hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0051d5]/20 cursor-pointer"
                    >
                      <MIcon name="swap_horiz" className="text-[20px]" />
                      Switch Team
                    </button>
                  </motion.div>

                  {/* Team Members List */}
                  <motion.div
                    variants={fadeUp}
                    className="rounded-2xl p-6 flex flex-col gap-4"
                    style={glassPanelStyle}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h2
                        className="text-[20px] text-[#0c2340] font-semibold"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        Team Members
                      </h2>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0c2340]/10 text-[#0c2340] text-[12px] font-bold">
                        {team.members.length} Members
                      </span>
                    </div>
                    <motion.div variants={staggerContainer} className="flex flex-col gap-3">
                      {team.members.map((member, index) => (
                        <motion.div
                          key={index}
                          variants={memberCard}
                          className="p-3 rounded-xl flex items-center gap-4 bg-white/50 border border-white/60 hover:bg-white/80 transition-colors"
                        >
                          <div
                            className={`w-10 h-10 rounded-full ${avatarBgs[index % avatarBgs.length]} text-white flex items-center justify-center text-[14px] font-semibold`}
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                          >
                            {getInitials(member.name)}
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-[#0c2340]">
                              {member.name}
                            </div>
                            <div className="text-[12px] text-[#44474d] font-medium">
                              {member.role}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* ─── Right Main Area: Certificate Showcase (8/12) ─── */}
                <motion.div variants={fadeUp} className="lg:col-span-8 flex flex-col gap-6">
                  <div
                    className="p-8 rounded-2xl flex flex-col h-full border border-[#e2e8f0]"
                    style={{
                      ...glassPanelStyle,
                      background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3))",
                    }}
                  >
                    <div className="flex justify-between items-center mb-8">
                      <h2
                        className="text-[32px] font-extrabold text-[#0c2340]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.04em" }}
                      >
                        Certificate Showcase
                      </h2>
                      <span className="text-[14px] font-semibold text-[#44474d] bg-[#f2f4f6] px-3 py-1 rounded-full border border-[#e2e8f0]">
                        High-Fidelity Preview
                      </span>
                    </div>

                    {/* Large Tilt Showcase */}
                    <div className="flex-grow flex items-center justify-center py-8">
                      <div
                        className="relative w-full max-w-[800px] aspect-[1.414] bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center p-10 border border-[#e2e8f0] group tilt-effect cursor-pointer"
                        style={{ ...certShowcaseShadow, ...securityPatternStyle }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2340]/5 to-[#0051d5]/5 z-0" />
                        <div className="z-10 text-center flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full bg-[#0c2340]/5 flex items-center justify-center mb-6">
                            <MIcon
                              name="workspace_premium"
                              className="text-[#0051d5] text-[64px]"
                              style={{ fontVariationSettings: "'wght' 200" }}
                            />
                          </div>
                          <div
                            className="text-[28px] md:text-[32px] text-[#0c2340] mb-4 font-bold"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}
                          >
                            Smart India Hackathon 2026
                          </div>
                          <div className="w-24 h-[2px] bg-[#0051d5] my-4" />
                          <div className="text-[14px] text-[#44474d] uppercase tracking-[0.2em] font-semibold">
                            Certificate of Participation
                          </div>
                        </div>
                        {/* Premium Shine overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" />
                      </div>
                    </div>

                    {/* Download Action Area */}
                    <div className="mt-8 flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-[#f2f4f6] border border-[#e2e8f0]">
                      <div className="flex-grow flex items-center gap-4 w-full">
                        <div className="w-12 h-12 rounded-xl bg-[#0c2340]/10 flex items-center justify-center flex-shrink-0">
                          <MIcon name="folder_zip" className="text-[#0c2340] text-[24px]" />
                        </div>
                        <div>
                          <div className="text-[16px] text-[#0c2340] font-bold">
                            {safeTeamName}_certs.zip
                          </div>
                          <div className="text-[12px] text-[#44474d] font-medium">
                            Includes all {team.members.length} verified certificates
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleDownload}
                        disabled={downloading}
                        className={`
                          w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[16px] font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0051d5]/30 cursor-pointer
                          ${
                            downloading
                              ? "bg-[#c4c6ce] text-[#74777e] cursor-not-allowed"
                              : "bg-[#0051d5] text-white hover:bg-[#0c2340] hover:shadow-lg hover:-translate-y-1"
                          }
                        `}
                      >
                        {downloading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-[#74777e] border-t-transparent rounded-full animate-spin" />
                            <span>
                              Generating... {progress.current}/{progress.total}
                            </span>
                          </>
                        ) : (
                          <>
                            <MIcon name="download" className="text-[20px]" />
                            <span>Download Package</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer className="w-full py-8 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#e2e8f0]">
          <div className="text-[14px] font-semibold text-[#0c2340]">
            SIH 2026 organized by Poornima University
          </div>
          <div className="flex gap-4">
            <span className="text-[12px] text-[#44474d] hover:text-[#0051d5] transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-[12px] text-[#44474d] hover:text-[#0051d5] transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-[12px] text-[#44474d] hover:text-[#0051d5] transition-colors cursor-pointer">
              Support
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Certificates;
