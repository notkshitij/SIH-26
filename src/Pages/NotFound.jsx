import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

// ─── Animation Variants ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const floatVariant = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
  },
};

// ─── Particle dot component ────────────────────────────────
function Dot({ style }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#0051d5]/20"
      style={style}
      animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
      transition={{
        duration: 2 + (parseInt(style.top) % 3),
        repeat: Infinity,
        ease: "easeInOut",
        delay: parseInt(style.left) % 2,
      }}
    />
  );
}

const dots = [
  { width: "8px",  height: "8px",  top: "10%",  left: "8%"  },
  { width: "12px", height: "12px", top: "20%",  left: "85%" },
  { width: "6px",  height: "6px",  top: "35%",  left: "5%"  },
  { width: "10px", height: "10px", top: "50%",  left: "92%" },
  { width: "14px", height: "14px", top: "65%",  left: "12%" },
  { width: "8px",  height: "8px",  top: "75%",  left: "78%" },
  { width: "6px",  height: "6px",  top: "85%",  left: "30%" },
  { width: "10px", height: "10px", top: "90%",  left: "60%" },
  { width: "12px", height: "12px", top: "5%",   left: "55%" },
  { width: "8px",  height: "8px",  top: "45%",  left: "48%" },
  { width: "6px",  height: "6px",  top: "28%",  left: "70%" },
  { width: "14px", height: "14px", top: "58%",  left: "22%" },
];

// ─── 404 Page ──────────────────────────────────────────────
const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden antialiased px-4"
      style={{
        fontFamily: "'Inter', sans-serif",
        background:
          "radial-gradient(ellipse at 20% 20%, hsla(217, 100%, 94%, 0.8) 0px, transparent 55%), radial-gradient(ellipse at 80% 80%, hsla(217, 100%, 94%, 0.8) 0px, transparent 55%), #f7f9fb",
      }}
    >
      {/* Background decorative dots */}
      {dots.map((style, i) => (
        <Dot key={i} style={style} />
      ))}

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0051d5 1px, transparent 1px), linear-gradient(90deg, #0051d5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 rounded-3xl p-10 md:p-16 max-w-lg w-full flex flex-col items-center text-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.85)",
          boxShadow:
            "0 24px 60px -10px rgba(12, 35, 64, 0.12), 0 0 0 1px rgba(255,255,255,0.5) inset",
        }}
      >
        {/* Floating 404 number */}
        <motion.div
          variants={floatVariant}
          animate="animate"
          className="select-none mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span
            className="text-[120px] md:text-[160px] font-extrabold leading-none"
            style={{
              background:
                "linear-gradient(135deg, #0c2340 0%, #0051d5 60%, #316bf3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.06em",
              filter: "drop-shadow(0 8px 24px rgba(0,81,213,0.18))",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="w-16 h-16 rounded-2xl bg-[#0051d5]/10 flex items-center justify-center mb-6"
        >
          <span
            className="material-symbols-outlined text-[#0051d5] text-[36px]"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
          >
            travel_explore
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[28px] md:text-[34px] font-extrabold text-[#0c2340] mb-2 leading-tight"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          Page Not Found
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="w-12 h-[2px] bg-[#0051d5] mx-auto mb-4"
        />

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-[15px] text-[#44474d] leading-relaxed mb-4 max-w-[320px]"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Attempted path */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mb-8 px-4 py-2 rounded-xl bg-[#0c2340]/5 border border-[#0c2340]/10 flex items-center gap-2"
        >
          <span
            className="material-symbols-outlined text-[#74777e] text-[16px]"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            link_off
          </span>
          <code className="text-[13px] text-[#74777e] font-mono break-all">
            {location.pathname}
          </code>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-[320px]"
        >
          <button
            onClick={() => navigate("/")}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0051d5] text-white text-[14px] font-bold hover:bg-[#0c2340] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0051d5]/30 cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              home
            </span>
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#0051d5] text-[#0051d5] text-[14px] font-bold hover:bg-[#0051d5] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0051d5]/20 cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              arrow_back
            </span>
            Go Back
          </button>
        </motion.div>

        {/* Footer hint */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
          className="mt-8 text-[12px] text-[#c4c6ce] font-medium"
        >
          SIH 2026 · Organized by Poornima University
        </motion.p>
      </motion.div>
    </div>
  );
};

export default NotFound;
