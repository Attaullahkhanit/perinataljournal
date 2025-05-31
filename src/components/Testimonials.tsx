import { useEffect, useRef, useState } from "react";
import { GlassCard } from "./GlassCard";
import { Circle, CircleDot } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc",
    content:
      "Attaullah Khan transformed our user interface using React.js and Tailwind CSS, creating a seamless and responsive experience. His expertise in front-end development is unparalleled."
  },
  {
    name: "Michael Chen",
    role: "Founder, MetaWorld",
    content:
      "Attaullah developed a robust Next.js application for us, integrating APIs efficiently and ensuring top-notch performance. His dedication and technical skills are outstanding."
  },
  {
    name: "Emma Davis",
    role: "Lead Developer, AI Solutions",
    content:
      "Attaullah's proficiency in the MERN stack enabled us to launch a feature-rich application ahead of schedule. His ability to handle complex integrations with React and Node.js is impressive."
  },
  {
    name: "David Wilson",
    role: "CEO, InnovateTech",
    content:
      "The dynamic dashboard Attaullah built using Ant Design and React.js has greatly improved our workflow. His attention to detail and mastery of modern UI frameworks are commendable."
  },
  {
    name: "Lisa Zhang",
    role: "Product Manager, FutureScale",
    content:
      "Attaullah Khan revamped our application using Next.js and TypeScript, significantly enhancing performance and scalability. His ability to deliver high-quality results is remarkable."
  },
  {
    name: "John Smith",
    role: "CTO, CloudTech",
    content:
      "Thanks to Attaullah's expertise in MongoDB and Express.js, we now have a scalable and secure backend solution that perfectly complements our React-based front end."
  }
];


export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 3; // Assuming 3 cards are visible at a time
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="testimonials" className="container max-w-6xl mx-auto py-20 px-4 sm:px-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-accent mb-8 md:mb-12">
    What Clients Say
  </h2>

  <div className="relative">
    <div
      ref={scrollRef}
      className="flex overflow-x-auto gap-4 md:gap-8 pb-4 px-4 sm:px-6 snap-x snap-mandatory scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {testimonials.map((testimonial, index) => (
        <GlassCard
          key={index}
          className="flex-none w-[90%] sm:w-[calc(66.667%-1rem)] md:w-[calc(33.333%-1.33rem)] min-w-[90%] sm:min-w-[calc(66.667%-1rem)] md:min-w-[calc(33.333%-1.33rem)] flex flex-col gap-4 p-6 snap-center animate-fade-up hover:scale-105 transition-transform"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="flex items-center gap-4">
            <div>
              <h3 className="font-semibold text-base md:text-lg">{testimonial.name}</h3>
              <p className="text-xs md:text-sm text-white/70">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-sm md:text-base text-white/80 italic">"{testimonial.content}"</p>
        </GlassCard>
      ))}
    </div>

    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
        index === activeIndex ? (
          <CircleDot key={index} className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
        ) : (
          <Circle key={index} className="w-3 h-3 sm:w-4 sm:h-4 text-white/50" />
        )
      ))}
    </div>
  </div>
</section>
  );
};
