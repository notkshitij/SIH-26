// ============================================================
// Team Data — 50 Teams × 6 Members
// ============================================================
// HOW TO UPDATE:
// 1. Replace the `teams` array below with real data from your Excel.
// 2. Each team must have: id, teamName, leaderEmail, members[].
// 3. leaderEmail must match the Google account the leader logs in with.
// ============================================================

const firstNames = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun",
  "Reyansh", "Sai", "Arnav", "Dhruv", "Kabir",
  "Ananya", "Diya", "Myra", "Sara", "Aadhya",
  "Isha", "Kiara", "Riya", "Priya", "Neha",
  "Rohan", "Karan", "Sahil", "Manav", "Ishaan",
  "Harsh", "Yash", "Raj", "Dev", "Nikhil",
  "Sneha", "Pooja", "Tanvi", "Shruti", "Kavya",
  "Ritika", "Simran", "Nisha", "Aisha", "Meera",
  "Akash", "Varun", "Kunal", "Rahul", "Amit",
  "Siddharth", "Gaurav", "Abhishek", "Vikram", "Pranav",
];

const lastNames = [
  "Sharma", "Verma", "Patel", "Gupta", "Singh",
  "Kumar", "Reddy", "Joshi", "Mishra", "Chauhan",
  "Iyer", "Nair", "Mehta", "Shah", "Desai",
  "Rao", "Pillai", "Bhat", "Das", "Bose",
  "Chopra", "Malhotra", "Kapoor", "Banerjee", "Mukherjee",
];

const teamAdjectives = [
  "Alpha", "Beta", "Gamma", "Delta", "Epsilon",
  "Zeta", "Sigma", "Omega", "Phoenix", "Titan",
  "Nova", "Blaze", "Storm", "Spark", "Surge",
  "Cipher", "Nexus", "Orbit", "Pulse", "Zenith",
  "Apex", "Flux", "Prism", "Vertex", "Helix",
  "Quantum", "Matrix", "Vector", "Nebula", "Cosmos",
  "Fusion", "Radiant", "Eclipse", "Vortex", "Astro",
  "Onyx", "Ignite", "Bolt", "Aura", "Cobalt",
  "Drift", "Echo", "Forge", "Halo", "Jade",
  "Karma", "Lumen", "Mystic", "Neon", "Optic",
];

/**
 * Generate a seeded-random name from the name pools.
 * Uses a simple index-based approach for reproducibility.
 */
function generateName(teamIndex, memberIndex) {
  const fi = (teamIndex * 7 + memberIndex * 13) % firstNames.length;
  const li = (teamIndex * 11 + memberIndex * 17) % lastNames.length;
  return `${firstNames[fi]}${lastNames[li] ? " " + lastNames[li] : ""}`;
}

/**
 * Build the full teams array.
 * In production, replace this with data parsed from your Excel file.
 */
function buildTeams() {
  const teams = [];

  for (let t = 0; t < 50; t++) {
    const teamName = `Team ${teamAdjectives[t]}`;
    const members = [];

    for (let m = 0; m < 6; m++) {
      members.push({
        name: generateName(t, m),
        role: m === 0 ? "Team Leader" : "Member",
      });
    }

    teams.push({
      id: `TEAM-${String(t + 1).padStart(2, "0")}`,
      teamName,
      // Placeholder email — replace with real leader emails
      leaderEmail: `leader.team${t + 1}@gmail.com`,
      members,
    });
  }

  return teams;
}

export const teams = buildTeams();

/**
 * Look up a team by the leader's email address.
 * @param {string} email — The email from Firebase Auth (Google login).
 * @returns {object|null} — The team object, or null if not found.
 */
export function getTeamByLeaderEmail(email) {
  if (!email) return null;
  const normalizedEmail = email.toLowerCase().trim();
  return teams.find((t) => t.leaderEmail.toLowerCase().trim() === normalizedEmail) || null;
}

/**
 * Look up a team by both team name AND leader email.
 * Both must match (case-insensitive) for verification to succeed.
 * @param {string} name — The team name entered by the leader.
 * @param {string} email — The leader email entered by the leader.
 * @returns {object|null} — The team object, or null if not found.
 */
export function getTeamByNameAndEmail(name, email) {
  if (!name || !email) return null;
  const normalizedName = name.toLowerCase().trim();
  const normalizedEmail = email.toLowerCase().trim();
  return (
    teams.find(
      (t) =>
        t.teamName.toLowerCase().trim() === normalizedName &&
        t.leaderEmail.toLowerCase().trim() === normalizedEmail
    ) || null
  );
}

export default teams;
