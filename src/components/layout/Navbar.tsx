"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: isScrolled ? "1.5rem" : "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1000px",
          zIndex: 50,
          transition: "top 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, border-color 0.4s ease",
          background: isScrolled ? "var(--navbar-bg-scrolled)" : "var(--navbar-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${isScrolled ? "var(--border)" : "transparent"}`,
          borderRadius: "9999px",
          padding: "0.75rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "var(--foreground)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: "bold", fontSize: "1.2rem", color: "var(--background-solid)"
          }}>
            T
          </div>
          <span style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.05em" }}>Thrivel</span>
        </Link>

        {/* Desktop Nav */}
        <div className="md-flex" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <nav style={{ display: "flex", gap: "2.5rem" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    position: "relative",
                    fontWeight: 500,
                    fontSize: "0.9375rem",
                    color: isActive ? "var(--foreground)" : "var(--text-muted)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      style={{
                        position: "absolute",
                        bottom: "-8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        background: "var(--foreground)",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="md-flex" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {mounted && (
            <button 
              onClick={toggleTheme} 
              style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--foreground)", display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <Link href="/contact" style={{ 
            background: "var(--foreground)", 
            color: "var(--background-solid)", 
            padding: "0.5rem 1.25rem", 
            borderRadius: "9999px", 
            fontWeight: 600, 
            fontSize: "0.875rem",
            transition: "transform 0.2s ease"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md-hidden" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {mounted && (
            <button 
              onClick={toggleTheme} 
              style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--foreground)", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            style={{ background: "transparent", border: "none", color: "var(--foreground)", cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md-hidden"
            style={{
              position: "fixed",
              top: "5.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90%",
              maxWidth: "1000px",
              padding: "2rem 1.5rem",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              zIndex: 49,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: pathname === link.href ? "var(--foreground)" : "var(--text-muted)",
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="btn-primary" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
