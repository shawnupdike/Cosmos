import { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export default function Panel({ children, className }: PanelProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 ${className ?? ""}`}>
      {children}
    </div>
  );
}