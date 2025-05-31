import { GlassCard } from "./GlassCard";

const techStacks = [
  {
    name: "React.js",
    icon: "../../assets/tecstacks/React.png", // Replace with actual tech logos
    description: "A powerful library for building dynamic user interfaces and optimizing component performance."
  },
  {
    name: "Next.js",
    icon: "../../assets/tecstacks/next.png", // Replace with actual tech logos
    description: "A React-based framework offering SSR (Server-Side Rendering) and SSG (Static Site Generation) to enhance SEO and performance."
  },
  {
    name: "JavaScript",
    icon: "../../assets/tecstacks/js.png", // Replace with actual tech logos
    description: "A versatile programming language for synchronous and asynchronous operations, data fetching, and more."
  },
  {
    name: "TypeScript",
    icon: "../../assets/tecstacks/ts.png", // Replace with actual tech logos
    description: "A superset of JavaScript that adds static typing, interfaces, and improved development scalability."
  },
  {
    name: "jQuery",
    icon: "../../assets/tecstacks/jq.png", // Replace with actual tech logos
    description: "A JavaScript library designed to simplify DOM manipulation and event handling."
  },
  {
    name: "Redux Saga",
    icon: "../../assets/tecstacks/reduxsaga.png", // Replace with actual tech logos
    description: "A library for managing application state and side effects in a predictable way."
  },
  {
    name: "Redux Toolkit",
    icon: "../../assets/tecstacks/RTK1.png", // Replace with actual tech logos
    description: "An enhanced library for Redux state management with hooks like `useSelector`, `dispatch`, and utilities like `unwrap()`."
  },
  {
    name: "React Query",
    icon: "../../assets/tecstacks/Rquerry.png", // Replace with actual tech logos
    description: "A library for efficient and declarative data fetching in React applications."
  },
  {
    name: "Node.js",
    icon: "../../assets/tecstacks/node.png", // Replace with actual tech logos
    description: "A runtime environment for executing JavaScript on the server-side."
  },
  {
    name: "Express.js",
    icon: "../../assets/tecstacks/express1.png", // Replace with actual tech logos
    description: "A lightweight web application framework for Node.js."
  },
  {
    name: "MongoDB",
    icon: "../../assets/tecstacks/mongo.png", // Replace with actual tech logos
    description: "A NoSQL database for storing and retrieving non-sequential data."
  },
  {
    name: "Sass",
    icon: "../../assets/tecstacks/sass.png", // Replace with actual tech logos
    description: "A CSS preprocessor that adds advanced styling features and functionality."
  },
  {
    name: "Bootstrap",
    icon: "../../assets/tecstacks/bootstrap2.png", // Replace with actual tech logos
    description: "A responsive UI framework for quickly styling web applications with pre-built components."
  },
  {
    name: "Ant Design",
    icon: "../../assets/tecstacks/antd.png", // Replace with actual tech logos
    description: "A comprehensive UI library for React, offering ready-to-use components with rich styling options."
  },
  {
    name: "Tailwind CSS",
    icon: "../../assets/tecstacks/tailwind.png", // Replace with actual tech logos
    description: "A utility-first CSS framework for rapidly building custom designs."
  },
  {
    name: "MUI React",
    icon: "../../assets/tecstacks/mui.png", // Replace with actual tech logos
    description: "A popular React UI library providing components for modern web applications."
  },
  {
    name: "Styled Components",
    icon: "../../assets/tecstacks/styled-components.png", // Replace with actual tech logos
    description: "A CSS-in-JS library for writing dynamic, scoped styles directly in React components."
  },
  {
    name: "Firebase",
    icon: "../../assets/tecstacks/firebase.png", // Replace with actual tech logos
    description: "A cloud-based platform offering real-time databases, authentication, and hosting."
  },
  {
    name: "GitHub",
    icon: "../../assets/tecstacks/github.png", // Replace with actual tech logos
    description: "A platform for version control and collaborative project development."
  },
  {
    name: "Azure DevOps",
    icon: "../../assets/tecstacks/azure.png", // Replace with actual tech logos
    description: "A suite of development tools for planning, building, and managing applications."
  },
  {
    name: "Jira",
    icon: "../../assets/tecstacks/jira.png", // Replace with actual tech logos
    description: "A project management tool for tracking and managing agile workflows."
  },
  {
    name: "Jest",
    icon: "../../assets/tecstacks/jest1.png", // Replace with actual tech logos
    description: "A testing framework for ensuring code reliability and quality in web projects."
  }
];

export const TechStacks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {techStacks.map((tech) => (
        <GlassCard 
          key={tech.name}
          className="flex flex-col items-center justify-center gap-4 p-6 hover:scale-105 transition-transform"
        >
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-lg font-semibold text-accent">{tech.name}</h3>
          <p className="text-sm text-black text-center">{tech.description}</p>
        </GlassCard>
      ))}
    </div>
  );
};