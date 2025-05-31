import { GlassCard } from "./GlassCard";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <GlassCard className="group hover:bg-accent/5 transition-colors">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80 mb-4">{description}</p>
      <a
        href={link}
        className="text-accent hover:text-accent/80 transition-colors font-medium"
      >
        View Details →
      </a>
    </GlassCard>
  );
};