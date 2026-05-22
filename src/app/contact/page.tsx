import ScrollReveal from "@/components/ui/ScrollReveal";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "12rem", paddingBottom: "4rem", minHeight: "100vh" }}>
      <div className="container">
        
        <ScrollReveal>
          <div style={{ marginBottom: "6rem" }}>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
              Let’s Build Something<br/><span style={{ color: "var(--text-muted)" }}>Amazing Together.</span>
            </h1>
            <p className="text-lg" style={{ maxWidth: "700px" }}>
              Reach out to Thrivel for SaaS products, custom software development, and digital transformation services.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", alignItems: "start" }}>
          <ScrollReveal direction="left">
            <div className="bento-card" style={{ padding: "3rem" }}>
              <h2 className="heading-md" style={{ marginBottom: "2.5rem" }}>Get in Touch</h2>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" style={{ fontWeight: 500, fontSize: "0.875rem", color: "var(--text-muted)" }}>Name</label>
                  <input type="text" id="name" placeholder="John Doe" style={{
                    width: "100%", padding: "1rem", borderRadius: "12px",
                    background: "var(--background)", border: "1px solid var(--border)",
                    color: "var(--foreground)", outline: "none", transition: "border-color 0.3s ease",
                    fontFamily: "var(--font-outfit)"
                  }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" style={{ fontWeight: 500, fontSize: "0.875rem", color: "var(--text-muted)" }}>Email</label>
                  <input type="email" id="email" placeholder="john@example.com" style={{
                    width: "100%", padding: "1rem", borderRadius: "12px",
                    background: "var(--background)", border: "1px solid var(--border)",
                    color: "var(--foreground)", outline: "none", transition: "border-color 0.3s ease",
                    fontFamily: "var(--font-outfit)"
                  }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="phone" style={{ fontWeight: 500, fontSize: "0.875rem", color: "var(--text-muted)" }}>Phone</label>
                  <input type="tel" id="phone" placeholder="+91 00000 00000" style={{
                    width: "100%", padding: "1rem", borderRadius: "12px",
                    background: "var(--background)", border: "1px solid var(--border)",
                    color: "var(--foreground)", outline: "none", transition: "border-color 0.3s ease",
                    fontFamily: "var(--font-outfit)"
                  }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="message" style={{ fontWeight: 500, fontSize: "0.875rem", color: "var(--text-muted)" }}>Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your project..." style={{
                    width: "100%", padding: "1rem", borderRadius: "12px",
                    background: "var(--background)", border: "1px solid var(--border)",
                    color: "var(--foreground)", outline: "none", transition: "border-color 0.3s ease",
                    resize: "vertical", fontFamily: "var(--font-outfit)"
                  }}></textarea>
                </div>
                <button type="button" className="btn-primary" style={{ marginTop: "1rem", width: "100%", padding: "1rem" }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="bento-card" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "2.5rem" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--background)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={24} color="var(--foreground)" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>Email Us</h3>
                  <a href="mailto:hello@thrivel.com?subject=Inquiry%20Regarding%20Thrivel%20Services" className="text-lg email-link" style={{ textDecoration: "none", transition: "color 0.3s ease" }}>hello@thrivel.com</a>
                </div>
              </div>

              <div className="bento-card" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "2.5rem" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--background)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={24} color="var(--foreground)" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>Call Us</h3>
                  <p className="text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="bento-card" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "2.5rem" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--background)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MapPin size={24} color="var(--foreground)" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>Office</h3>
                  <p className="text-lg">Pondicherry<br/>Capital city of Puducherry Union Territory<br/>India</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
