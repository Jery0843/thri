import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "12rem", paddingBottom: "4rem" }}>
      <div className="container">
        
        <ScrollReveal>
          <div style={{ marginBottom: "6rem" }}>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>About <span style={{ color: "var(--text-muted)" }}>Thrivel</span></h1>
            <p className="text-lg" style={{ maxWidth: "700px" }}>
              We are a technology-driven startup delivering modern SaaS products and software services designed to help businesses scale efficiently.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission & Vision */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "6rem" }}>
          <ScrollReveal direction="left">
            <div className="bento-card" style={{ height: "100%", background: "linear-gradient(135deg, var(--surface), var(--surface-hover))" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "-0.03em" }}>Our Mission</h2>
              <p className="text-lg">
                To empower businesses with innovative, scalable, and affordable digital solutions. We strive to be the catalyst for your technological advancement.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="bento-card" style={{ height: "100%", background: "linear-gradient(135deg, var(--surface), var(--surface-hover))" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "-0.03em" }}>Our Vision</h2>
              <p className="text-lg">
                To become a globally recognized SaaS company transforming industries through technology, setting new standards for quality and performance.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Values */}
        <ScrollReveal>
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <h2 className="heading-lg">Our Core Values</h2>
          </div>
        </ScrollReveal>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "8rem" }}>
          {["Innovation", "Integrity", "Customer Success", "Quality", "Continuous Growth"].map((value, i) => (
            <ScrollReveal key={value} delay={i * 0.1}>
              <div style={{ 
                padding: "1rem 2rem", 
                background: "var(--surface)", 
                border: "1px solid var(--border)", 
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 500
              }}>
                <CheckCircle size={20} color="var(--text-muted)" />
                {value}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Founders */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="heading-lg">The Founders</h2>
            <p className="text-lg" style={{ margin: "0 auto" }}>The minds behind Thrivel.</p>
          </div>
        </ScrollReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bento-card" style={{ textAlign: "center", padding: "4rem" }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "var(--surface-hover)", margin: "0 auto 1.5rem", border: "1px solid var(--border)" }}></div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "0.5rem" }}>Gopikrishna</h3>
              <h4 style={{ color: "var(--text-muted)", fontWeight: 500, marginBottom: "1rem", fontSize: "1.125rem" }}>Founder</h4>
              <p className="text-lg" style={{ fontSize: "1rem" }}>Leading the company vision, innovation, and business strategy to drive global success.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bento-card" style={{ textAlign: "center", padding: "4rem" }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "var(--surface-hover)", margin: "0 auto 1.5rem", border: "1px solid var(--border)" }}></div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "0.5rem" }}>Naveen Prabhu G</h3>
              <h4 style={{ color: "var(--text-muted)", fontWeight: 500, marginBottom: "1rem", fontSize: "1.125rem" }}>Co-Founder</h4>
              <p className="text-lg" style={{ fontSize: "1rem" }}>Focused on technology, development and scalable architecture to ensure robust solutions.</p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
}
