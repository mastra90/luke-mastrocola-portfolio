export type DevProjectProps = {
  year: number;
  title: string;
  description: string;
  type: string;
  image: string;
  links: {
    github: string;
    demo?: string;
  };
};

export const devProjects: DevProjectProps[] = [
  {
    year: 2024,
    title: "Academic Portfolio",
    description:
      "Showcasing the academic work and research of Deakin University lecturer Dr. Andrew Thomas.",
    type: "Professional website",
    image: "src/assets/andrew-thomas3.jpg",
    links: {
      github: "https://github.com/AndrewThomasWebsite/andrew-thomas-frontend",
      demo: "https://www.drandrewthomasir.com/",
    },
  },
  {
    year: 2024,
    title: "Marine services showcase",
    description:
      "Digital showcase for Fullard Boats Co, highlighting their expertise in custom boat building and marine services",
    type: "Professional website",
    image: "src/assets/fullard-boats2.jpg",
    links: {
      github: "https://github.com/FullardBoats-Website/fullard-boats-frontend",
      demo: "https://www.fullardboats.com.au/",
    },
  },
  {
    year: 2025,
    title: "Task Tracker web app",
    description:
      "Modern task tracking app built with React and NestJS, containerized with Docker for easy deployment.",
    type: "React web app",
    image: "src/assets/task-tracker.jpg",
    links: {
      github: "https://github.com/mastra90/tsa-task-tracker",
    },
  },
  {
    year: 2024,
    title: "SRTainty",
    description:
      "Python tool for cleaning and refining .srt subtitle files for better readability and timing.",
    type: "Python app",
    image: "src/assets/SRTainty.jpg",
    links: {
      github: "https://github.com/mastra90/SRTainty",
    },
  },
];
