import {
  AccessTimeOutlined as ExperienceIcon,
  SchoolOutlined as EducationIcon,
  WorkOutline as WorkIcon,
} from "@mui/icons-material";

const gridSizePrimary = { xs: 12, md: 4.5 };
const gridSizeSecondary = { xs: 12, md: 3 };

export const aboutCardsData = [
  {
    bio: "I'm a full stack web developer and audio producer who loves problemsolving and being creative. My passion for creativity started early inlife through music, and my love for analytical thinking and attention todetail translated seamlessly as I changed careers into full stack web development.",
    title: "Education",
    icon: <EducationIcon />,
    gridSize: gridSizePrimary,
    items: [
      {
        title: "Diploma of IT",
        subtitle: "Coder Academy",
        period: "2022 - 2023",
      },
      {
        title: "Bachelor of Audio Production",
        subtitle: "SAE, Melbourne",
        period: "2012 - 2014",
      },
    ],
  },
  {
    title: "Work",
    icon: <WorkIcon />,
    gridSize: gridSizePrimary,
    items: [
      {
        title: "Software Engineer",
        subtitle: "Telecommunication Services Australia",
        period: "2025 - present",
      },
      {
        title: "Full Stack Web Developer",
        subtitle: "Pixel Technologies",
        period: "2024 - 2025",
      },
    ],
  },
  {
    title: "Experience",
    icon: <ExperienceIcon />,
    gridSize: gridSizeSecondary,
    items: [
      {
        skill: "Web developer",
        duration: "1 Year +",
      },
      {
        skill: "Audio producer",
        duration: "15 years +",
      },
      {
        skill: "Musician",
        duration: "30 years +",
      },
    ],
  },
];
