
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Code, Cloud, Smartphone, Zap, Shield, Rocket, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "1000px", padding: "0 1.5rem" }}>
          <ScrollReveal direction="up" delay={0.1}>
            <div style={{ display: "inline-block", padding: "0.5rem 1.25rem", borderRadius: "9999px", background: "var(--surface)", border: "1px solid var(--border)", marginBottom: "2rem", color: "var(--text-muted)", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.02em" }}>
              Welcome to the Future of SaaS
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="heading-xl" style={{ marginBottom: "2rem" }}>
              Smart SaaS.<br/>
              <span style={{ color: "var(--text-muted)" }}>Built for Scale.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg" style={{ marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
              Thrivel engineers robust SaaS ecosystems and provides cutting-edge digital solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bento Box Features */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <h2 className="heading-lg" style={{ marginBottom: "4rem", textAlign: "center" }}>Why <span style={{ color: "var(--text-muted)" }}>Thrivel?</span></h2>
          </ScrollReveal>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.5rem", gridAutoRows: "minmax(250px, auto)" }}>
            
            {/* Big Bento 1 */}
            <div className="bento-card" style={{ gridColumn: "span 12", gridRow: "span 1" }}>
              <ScrollReveal direction="up">
                <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                  <Zap size={40} color="var(--foreground)" style={{ marginBottom: "2rem" }} />
                  <div>
                    <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>Lightning Fast Architecture</h3>
                    <p className="text-lg" style={{ maxWidth: "600px" }}>Optimized codebases and edge networks ensure your application loads instantly globally.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Medium Bento 1 */}
            <div className="bento-card md-col-6" style={{ gridColumn: "span 12" }}>
              <ScrollReveal direction="up" delay={0.1}>
                <Shield size={32} color="var(--text-muted)" style={{ marginBottom: "1.5rem" }} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>Enterprise Security</h3>
                <p className="text-lg">Bank-level encryption and secure data policies from day one.</p>
              </ScrollReveal>
            </div>

            {/* Medium Bento 2 */}
            <div className="bento-card md-col-6" style={{ gridColumn: "span 12" }}>
              <ScrollReveal direction="up" delay={0.2}>
                <Rocket size={32} color="var(--text-muted)" style={{ marginBottom: "1.5rem" }} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>Built for Growth</h3>
                <p className="text-lg">Scalable microservices ready to handle millions of active users.</p>
              </ScrollReveal>
            </div>

            {/* Big Bento 2 */}
            <div className="bento-card" style={{ gridColumn: "span 12", gridRow: "span 1", background: "linear-gradient(135deg, var(--surface), var(--surface-hover))", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              <ScrollReveal direction="up">
                <Users size={48} color="var(--foreground)" style={{ margin: "0 auto 1.5rem auto" }} />
                <h3 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "-0.03em" }}>User-Centric Design</h3>
                <p className="text-lg" style={{ maxWidth: "600px", margin: "0 auto" }}>We craft flawless UX that dramatically improves user retention and satisfaction.</p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
            <ScrollReveal direction="left">
              <h2 className="heading-lg">Core <span style={{ color: "var(--text-muted)" }}>Services</span></h2>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Link href="/services" className="btn-outline">View All Services</Link>
            </ScrollReveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Custom SaaS Development", icon: <Code size={32} /> },
              { title: "Cloud Solutions", icon: <Cloud size={32} /> },
              { title: "Mobile App Development", icon: <Smartphone size={32} /> }
            ].map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div style={{ padding: "3rem 2rem", background: "var(--background)", border: "1px solid var(--border)", borderRadius: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "1.5rem", transition: "transform 0.3s ease" }}>
                  <div style={{ color: "var(--text-muted)" }}>{service.icon}</div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 500 }}>{service.title}</h3>
                  <p className="text-lg" style={{ fontSize: "1rem" }}>
                    We build modern, robust solutions tailored perfectly to your business.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section">
        <div className="container">
           <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <h2 className="heading-lg">Leadership</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}>
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bento-card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
                <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "var(--surface-hover)", margin: "0 auto 2rem", border: "1px solid var(--border)" }}></div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>Gopikrishna</h3>
                <h4 style={{ color: "var(--text-muted)", fontWeight: 500, marginBottom: "1.5rem" }}>Founder</h4>
                <p className="text-lg" style={{ fontSize: "1rem" }}>Vision, innovation, and strategic direction.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bento-card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
                <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "var(--surface-hover)", margin: "0 auto 2rem", border: "1px solid var(--border)" }}></div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>Naveen Prabhu G</h3>
                <h4 style={{ color: "var(--text-muted)", fontWeight: 500, marginBottom: "1.5rem" }}>Co-Founder</h4>
                <p className="text-lg" style={{ fontSize: "1rem" }}>Technology, development and architecture.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="heading-md" style={{ marginBottom: "3rem", textAlign: "center" }}>Client Testimonials</h2>
          </ScrollReveal>
        </div>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {[
              { name: "Arun Kumar", text: "Thrivel transformed our business with an amazing SaaS platform. Highly recommended!" },
              { name: "Priya Sharma", text: "Professional team with excellent technical expertise and outstanding support." },
              { name: "Rahul Dev", text: "Their cloud and DevOps solutions helped us scale faster than we ever thought possible." },
              { name: "Sneha R", text: "The UI/UX and development quality exceeded our expectations on every front." },
              { name: "Arun Kumar (Duplicate)", text: "Thrivel transformed our business with an amazing SaaS platform. Highly recommended!" },
              { name: "Priya Sharma (Duplicate)", text: "Professional team with excellent technical expertise and outstanding support." },
              { name: "Rahul Dev (Duplicate)", text: "Their cloud and DevOps solutions helped us scale faster than we ever thought possible." },
              { name: "Sneha R (Duplicate)", text: "The UI/UX and development quality exceeded our expectations on every front." }
            ].map((testimonial, i) => (
              <div key={i} style={{ 
                padding: "2rem", 
                background: "var(--surface)", 
                border: "1px solid var(--border)", 
                borderRadius: "16px", 
                width: "350px", 
                flexShrink: 0, 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between" 
              }}>
                <p className="text-lg" style={{ fontSize: "1.05rem", marginBottom: "1.5rem", color: "var(--foreground)" }}>
                  "{testimonial.text.replace(' (Duplicate)', '')}"
                </p>
                <span style={{ fontWeight: 500, color: "var(--text-muted)", fontSize: "0.875rem" }}>
                  — {testimonial.name.replace(' (Duplicate)', '')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: "10rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <ScrollReveal direction="up">
            <h2 className="heading-lg" style={{ marginBottom: "2rem" }}>Ready to scale?</h2>
            <Link href="/contact" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem" }}>
              Start Your Project
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
