import { Github, Linkedin, Twitter, Instagram, SunMedium, Facebook, Youtube, Smartphone, Globe } from "lucide-react";
import { RiNpmjsLine } from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/attaullahkhanit",
    icon: Linkedin,
    color: "#0A66C2", // LinkedIn Blue
  },
  {
    name: "GitHub",
    url: "https://github.com/Attaullahkhanit",
    icon: Github,
    color: "#181717", // GitHub Black
  },
  {
    name: "Medium",
    url: "https://medium.com/@attaullahkhanit",
    icon: FaMedium,
    color: "#000000", // Medium Black
  },
  {
    name: "Node Package Module",
    url: "https://www.npmjs.com/package/opti-freq",
    icon: RiNpmjsLine,
    color: "#CB3837", // NPM Red
  },
  // Add more social links as needed...
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all hover:scale-110"
          aria-label={link.name}
        >
          <link.icon
            className="w-6 h-6"
            style={{ color: link.color }} // Apply the dynamic color
          />
        </a>
      ))}
    </div>
  );
};
