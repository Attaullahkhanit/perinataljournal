import { Calendar, Code, Globe, Database, Cloud, Brain } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Company } from "@/components/Company";
import { TechStacks } from "@/components/TechStacks";
import { Testimonials } from "@/components/Testimonials";
import { CustomCursor } from "@/components/CustomCursor";
import { SocialLinks } from "@/components/SocialLinks";

const projects = [
  {
    title: "Premier Deliveries",
    description: "Logistic Premier Deliveries, Reactjs, Redux Toolkit, AntD, Tailwind CSS",
    icon: "../../public/assets/projects/premierdel.png", // Path to the image in the public folder
    url: "https://piloting.premierdeliveries.co.uk/",
  },
  {
    title: "Expert.one",
    description: "A Product Base Project/ React js, Redux, Styled Components",
    icon: "../../public/assets/projects/expert.png",
    url: "https://expert.one/",
  },
  {
    title: "AI Teaching Copilot",
    description: "Generative AI, Reactjs, Bootstrap, NodeJs, ExpressJs, MongoDb",
    icon: "../../public/assets/projects/generativeai.png",
    url: "https://www.teachingcopilot.com/",
  },
  {
    title: "Personal Portfolio",
    description: "Showcase your skills and work portfolio.",
    icon: "../../public/assets/Projects/Personal.jpg",
    url: "/portfolio",
  },
];


const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      
      <section id="home" className="bg-sections-hero text-cyan-200 bg-[linear-gradient(to_bottom_right,#ffffff,#c7b7f2_40%,#c7b7f2_60%,#ffffff)]">
        <Hero />
      </section>

      <section id="about" className="bg-sections-about text-white bg-[linear-gradient(to_bottom_right,#ffffff,#c7b7f2_40%,#c7b7f2_60%,#ffffff)]">
        <Company />
      </section>

      <section id="skills" className="bg-sections-about text-white bg-[linear-gradient(to_bottom_right,#ffffff,#c7b7f2_40%,#c7b7f2_60%,#ffffff)]">
        <div className="container py-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-accent  font-bold mb-4">My Skills</h2>
            <p className="text-xl font-bold text-black max-w-2xl mx-auto">
            Empowering ideas with cutting-edge technology, I transform visions into extraordinary digital experiences.
            </p>
          </div>
          <TechStacks />
        </div>
      </section>

      <section
          id="projects"
          className="bg-sections-services bg-[linear-gradient(to_bottom_right,#ffffff,#c7b7f2_40%,#c7b7f2_60%,#ffffff)]"
        >
          <div className="container py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                >
                  <img
                    className="rounded-xl group-hover:opacity-10 w-full h-full object-cover"
                    width="100%"
                    src={project.icon}
                    alt={project.title}
                  />
                  <div className="hidden group-hover:flex flex-col items-center absolute left-[50%] translate-x-[-50%] text-center">
                    <h3 className="text-2xl tracking-wider text-white">{project.title}</h3>
                    <p className="pt-2 pb-4 text-white">{project.description}</p>
                    <a
                      href={project.url}
                      className="py-2 px-4 text-lg font-bold text-gray-700 bg-white rounded-lg cursor-pointer"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      <section id="testimonials" className="bg-sections-testimonials text-white bg-[linear-gradient(to_bottom_right,#ffffff,#c7b7f2_40%,#c7b7f2_60%,#ffffff)]">
        <Testimonials />
      </section>

      <section id="contact" className="bg-sections-testimonials text-white bg-[linear-gradient(to_bottom_right,#ffffff,#c7b7f2_40%,#c7b7f2_60%,#ffffff)]">
        <div className="container py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <GlassCard className="w-full">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-glass/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-glass/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-glass/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </GlassCard>

            {/* Calendar Card */}
            <GlassCard className="w-full">
              <h3 className="text-xl font-semibold mb-6">Book a Meeting</h3>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID"
                style={{ border: 0 }}
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
              ></iframe>
            </GlassCard>
          </div>
        </div>
      </section>

      <footer className="bg-sections-footer text-gray-300 bg-[linear-gradient(to_bottom_right,#ffffff,#c7b7f2_40%,#c7b7f2_60%,#ffffff)]">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-black/50">Follow Me</h3>
              <div className="space-y-4">
                <SocialLinks />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-black/50">Quick Links</h3>
              <div className="flex flex-col gap-3">
                
                <a href="#home" className="hover:text-white transition-colors text-white">Home</a>
                <a href="#about" className="hover:text-white transition-colors text-white">About</a>
                <a href="#skills" className="hover:text-white transition-colors text-white">Skills</a>
                <a href="#projects" className="hover:text-white transition-colors text-white">Projects</a>
                <a href="#testimonials" className="hover:text-white transition-colors text-white">Testimonials</a>
                <a href="#contact" className="hover:text-white transition-colors text-white">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-black/50">Get in Touch</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-white">
                  <span>Email:</span>
                  <a href="mailto:attaullahkhanit@gmail.com" className="hover:text-white transition-colors">
                    attaullahkhanit@gmail.com
                  </a>
                </p>  
                <p className="text-white">Follow Me</p>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-white">© 2024 Attaullah Khan. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <a
      href="https://api.whatsapp.com/send?phone=923448985072&text=Hello! I visited your portfolio website and am impressed by your work as a DevOps developer. I would like to discuss potential opportunities or ask for your assistance. Looking forward to connecting with you!"
      className="fixed w-[70px] h-[50px] bottom-10 right-10 bg-[#25d366] text-white rounded-md text-center text-[30px] shadow-md z-[100] hover:no-underline flex items-center justify-center animate-pulse"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width="30"
        height="30"
      />
    </a>
    </div>
  );
};

export default Index;