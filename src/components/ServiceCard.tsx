import { GlassCard } from "./GlassCard";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // Path to the project image
  url: string;
}

export const ServiceCard = ({ title, description, icon, url }: ServiceCardProps) => {
  return (
    <GlassCard className="group hover:bg-accent/5 transition-colors">
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover rounded-xl group-hover:opacity-70 transition-opacity"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80 text-black/70 mb-4">{description}</p>
      <a
        href={url}
        className="text-accent underline hover:text-accent/80 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
    </GlassCard>
  );
};
