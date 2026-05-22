import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: "auto", background: "var(--background)" }}>
      <div className="container" style={{ padding: "4rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%",
                background: "var(--foreground)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "bold", fontSize: "1.2rem", color: "var(--background-solid)"
              }}>
                T
              </div>
              <span style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.05em" }}>Thrivel</span>
            </Link>
            <p className="text-lg" style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
              Empowering businesses with innovative, scalable, and affordable digital solutions.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#" style={{ color: "var(--text-muted)", transition: "color 0.3s ease", fontWeight: 500 }}>Twitter</a>
              <a href="#" style={{ color: "var(--text-muted)", transition: "color 0.3s ease", fontWeight: 500 }}>LinkedIn</a>
              <a href="#" style={{ color: "var(--text-muted)", transition: "color 0.3s ease", fontWeight: 500 }}>GitHub</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1.5rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li><Link href="/" style={{ color: "var(--text-muted)", transition: "color 0.3s ease" }}>Home</Link></li>
              <li><Link href="/about" style={{ color: "var(--text-muted)", transition: "color 0.3s ease" }}>About Us</Link></li>
              <li><Link href="/services" style={{ color: "var(--text-muted)", transition: "color 0.3s ease" }}>Services & Products</Link></li>
              <li><Link href="/contact" style={{ color: "var(--text-muted)", transition: "color 0.3s ease" }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1.5rem" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li style={{ color: "var(--text-muted)" }}>SaaS Product Development</li>
              <li style={{ color: "var(--text-muted)" }}>Web & App Development</li>
              <li style={{ color: "var(--text-muted)" }}>Cloud & DevOps</li>
              <li style={{ color: "var(--text-muted)" }}>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1.5rem" }}>Contact Information</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", gap: "0.75rem", color: "var(--text-muted)" }}>
                <Mail size={20} style={{ color: "var(--foreground)", flexShrink: 0 }} />
                <a href="mailto:hello@thrivel.com?subject=Inquiry%20Regarding%20Thrivel%20Services" className="footer-link">hello@thrivel.com</a>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", color: "var(--text-muted)" }}>
                <Phone size={20} style={{ color: "var(--foreground)", flexShrink: 0 }} />
                <span>+91 98765 43210</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", color: "var(--text-muted)" }}>
                <MapPin size={20} style={{ color: "var(--foreground)", flexShrink: 0 }} />
                <span>Pondicherry, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: "1px solid var(--border)", 
          paddingTop: "2rem", 
          textAlign: "center", 
          color: "var(--text-muted)",
          fontSize: "0.875rem"
        }}>
          Copyright © {new Date().getFullYear()} Thrivel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
