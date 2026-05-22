import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = "", style, hoverEffect = true }: GlassCardProps) {
  return (
    <div className={`glass-card ${className}`} style={{ padding: "2rem", ...style }}>
      {children}
    </div>
  );
}
