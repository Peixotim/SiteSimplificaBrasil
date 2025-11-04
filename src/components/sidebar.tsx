"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Book,
  Award,
  Phone,
  Menu,
  X,
  GraduationCapIcon,
} from "lucide-react";

const menuItems = [
  { name: "Início", icon: <Home size={20} />, href: "/" },
  { name: "Cursos", icon: <Book size={20} />, href: "#cursos" },
  { name: "Certificação", icon: <Award size={20} />, href: "#Certificado" },
  { name: "Contato", icon: <Phone size={20} />, href: "#contato" },
  {
    name: "SISTEC-MEC",
    icon: <GraduationCapIcon size={20} />,
    href: "/sistec",
  },
];


function Logo({ expanded = false }) {
  return (
    <div
      className={`flex items-center w-full ${
        expanded ? "justify-start pl-3" : "justify-center"
      }`}
    >
      <AnimatePresence mode="wait">
        {expanded ? (
          // ===== LOGO EXPANDIDO =====
          <motion.div
            key="logo-expanded"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="flex items-center gap-3"
          >
            <div
              className="w-9 h-9 grid place-items-center rounded-xl
                     bg-gradient-to-br from-[#3a2f8a] to-[#221968]
                     text-white font-extrabold text-lg shadow-[0_8px_25px_-8px_#221968]"
            >
              S
            </div>
            <h1
              className="text-lg font-semibold tracking-wide text-white 
                       drop-shadow-[0_2px_6px_rgba(245,158,11,0.4)]"
            >
              Simplifica{" "}
              <span className="text-[#f5b914] font-bold">Brasil</span>
            </h1>
          </motion.div>
        ) : (
          // ===== LOGO MINI (S) =====
          <motion.div
            key="logo-mini"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="w-10 h-10 grid place-items-center rounded-xl
                     bg-gradient-to-br from-[#3a2f8a] to-[#221968]
                     text-white font-extrabold text-xl shadow-[0_10px_30px_-10px_#221968]"
          >
            S
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



// ========================
// 🧭 Sidebar
// ========================
export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 📱 Botão Mobile */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg hover:bg-primary/90 transition-all"
        aria-label="Abrir menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 🖥️ Sidebar Desktop */}
      <motion.aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`hidden lg:flex sticky top-0 left-0 h-screen
          ${expanded ? "w-64" : "w-20"} 
          bg-gradient-to-b from-[#221968] via-[#2f277a] to-[#3a2f8a]
          backdrop-blur-xl shadow-xl border-r border-[#ffffff22] 
          text-white transition-all duration-300`}
      >
        <div className="flex flex-col justify-between w-full p-4">
          {/* LOGO */}
          <div className="flex items-center mb-10">
            <AnimatePresence initial={false} mode="wait">
              <Logo expanded={expanded} />
            </AnimatePresence>
          </div>

          {/* LINKS */}
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#e6e4ff] transition-all duration-300"
                >
                  {item.icon}
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.span
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>

          {/* FOOTER */}
          <div className="mt-10 text-center text-xs text-white/60">
            {expanded ? "© 2025 Simplifica Brasil" : "©"}
          </div>
        </div>
      </motion.aside>

      {/* 📱 Sidebar Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-[#221968] via-[#2f277a] to-[#3a2f8a]
                       shadow-xl p-6 flex flex-col justify-between rounded-r-3xl text-white"
          >
            {/* LOGO MOBILE */}
            <div className="flex items-start mb-8">
              <Logo expanded />
            </div>

            {/* LINKS MOBILE */}
            <ul className="space-y-6 w-full">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#e6e4ff] transition-all duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* FOOTER */}
            <p className="text-xs text-white/50 text-center mt-8">
              © 2025 Simplifica Brasil
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
