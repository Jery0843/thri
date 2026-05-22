import ScrollReveal from "@/components/ui/ScrollReveal";
import { Server, Layout, Smartphone, Cloud, Key, MonitorPlay, Headphones } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { title: "Custom SaaS Product Development", desc: "End-to-end development of scalable multi-tenant SaaS products.", icon: <Server size={32} /> },
    { title: "Website Development", desc: "Beautiful, highly optimized, and responsive modern web applications.", icon: <Layout size={32} /> },
    { title: "Mobile App Development", desc: "Cross-platform mobile experiences for iOS and Android.", icon: <Smartphone size={32} /> },
    { title: "Cloud & DevOps Solutions", desc: "Infrastructure as code, CI/CD pipelines, and cloud migrations.", icon: <Cloud size={32} /> },
    { title: "API Integration", desc: "Seamless third-party integrations and secure REST/GraphQL API development.", icon: <Key size={32} /> },
    { title: "UI/UX Design", desc: "Stunning user interfaces and data-driven user experiences.", icon: <MonitorPlay size={32} /> },
    { title: "Maintenance & Support", desc: "24/7 dedicated support and SLA-backed maintenance for your apps.", icon: <Headphones size={32} /> }
  ];

  return (
    <div style={{ paddingTop: "12rem", paddingBottom: "4rem" }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ marginBottom: "6rem" }}>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>Services &<br/><span style={{ color: "var(--text-muted)" }}>Products</span></h1>
            <p className="text-lg" style={{ maxWidth: "700px" }}>
              Comprehensive digital transformation services and robust SaaS platforms built for the modern enterprise.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bento-card" style={{ marginBottom: "6rem", background: "linear-gradient(135deg, var(--surface), var(--surface-hover))", textAlign: "center", padding: "5rem 2rem" }}>
            <h2 className="heading-lg" style={{ marginBottom: "1.5rem" }}>Our SaaS Products</h2>
            <p className="text-lg" style={{ maxWidth: "800px", margin: "0 auto" }}>
              Our SaaS products are designed to simplify business operations, improve productivity, and enable seamless digital transformation. We build tools that teams love to use.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="bento-card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ color: "var(--text-muted)" }}>{service.icon}</div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 500 }}>{service.title}</h3>
                <p className="text-lg" style={{ fontSize: "1rem" }}>{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
