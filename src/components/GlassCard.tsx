import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-lg bg-glass/30 border border-white/10 rounded-xl p-6 shadow-lg",
        "hover:bg-glass/40 transition-all duration-300",
        "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:rounded-xl before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};