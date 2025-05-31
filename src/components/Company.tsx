import { GlassCard } from "./GlassCard";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export const Company = () => {
  return (
    <section className="container min-h-[70vh] flex items-center justify-center py-20">
      <GlassCard className="max-w-4xl mx-auto p-8 animate-fade-in">
        {/* Hire Me Subsection */}
        <div className="mb-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-accent  via-primary to-primary bg-clip-text text-transparent">
            Looking for a MERN Stack Developer?
          </h2>
          <p className="text-black mb-6">I am a Senior Front-End Developer with 6 years of experience across the full software development lifecycle. Specializing in the development of high-performance, highly available web applications, I focus on delivering innovative technological solutions, including AI-integrated web applications.
          </p>
          <Button
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-full font-medium transition-all hover:scale-105"
            onClick={() => window.open('https://api.whatsapp.com/send?phone=923448985072&text=Hello!%20I%20visited%20your%20portfolio%20website%20and%20am%20impressed%20by%20your%20work.%20I%20would%20like%20to%20discuss%20potential%20opportunities.%20Looking%20forward%20to%20connecting%20with%20you!', '_blank')}
          >
            Hire Me
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </GlassCard>
    </section>
  );
};
