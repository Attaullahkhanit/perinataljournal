import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-center w-full md:w-[70%] transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-[200%]"
        }`}
      >
      <GlassCard className="max-w-6xl w-full mx-4 px-6 py-4">
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center space-x-8">
        <a
          href="#home"
          className="text-black font-semibold hover:text-accent transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-black font-semibold hover:text-accent transition-colors"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-black font-semibold hover:text-accent transition-colors"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-black font-semibold hover:text-accent transition-colors"
        >
          Projects
        </a>
        <a
          href="#testimonials"
          className="text-black font-semibold hover:text-accent transition-colors"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="text-black font-semibold hover:text-accent transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a
            href="#home"
            className="block text-black font-semibold hover:text-accent transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-black font-semibold hover:text-accent transition-colors"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="block text-black font-semibold hover:text-accent transition-colors"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-black font-semibold hover:text-accent transition-colors"
            onClick={toggleMenu}
          >
            projects
          </a>
          <a
            href="#testimonials"
            className="block text-black font-semibold hover:text-accent transition-colors"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block text-black font-semibold hover:text-accent transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  </GlassCard>
    </div>
  );
};
