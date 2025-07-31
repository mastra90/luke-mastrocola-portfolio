import { Code, GitHub, OpenInNew } from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

const DevWork = () => {
  const theme = useTheme();

  const devProjects = [
    {
      title: "Dr. Andrew Thomas",
      description:
        "Dr Andrew Thomas' is a schollar and lecture at Deakin University. His website was developed to showcase his work and contact",
      technologies: ["React", "JavaScript", "Express,js"],
      github: "https://github.com/AndrewThomasWebsite/andrew-thomas-frontend",
      demo: "https://www.drandrewthomasir.com/",
      type: "Profressional website",
    },
    {
      title: "Fullard Boats",
      description:
        "Fullard Boats is business based in Gippsland. The purpose of this product is to showcase who they are as a business, the services that Fullard Boats has to offer and a way of contacting them.",
      technologies: ["React", "JavaScript", "Express,js"],
      github: "https://github.com/FullardBoats-Website/fullard-boats-frontend",
      demo: "https://www.fullardboats.com.au/",
      type: "Profressional website",
    },
    {
      title: "Task Tracker",
      description:
        "A modern task tracking web application built with React frontend and NestJS backend, fully containerized with Docker for easy deployment and development.",
      technologies: ["React", "TypeScript", "Material UI", "NestJS", "Docker"],
      github: "https://github.com/mastra90/tsa-task-tracker",
      type: "React web app",
    },
    {
      title: "SRTainty",
      description:
        "A Python application for cleaning and processing .srt subtitle files. This tool provides various functions to improve subtitle readability and timing, making it easier to prepare subtitles for viewing.",
      technologies: ["Python", "pysrt"],
      github: "https://github.com/mastra90/tsa-task-tracker",
      type: "Python app",
    },
  ];

  const audioProjects = [
    {
      title: "Electronic Pop Mix",
      artist: "Local Artist",
      description:
        "Mixed and mastered electronic pop track with dynamic processing and spatial effects",
      genre: "Electronic Pop",
      duration: "3:42",
      year: "2024",
    },
    {
      title: "Rock Album - Full Production",
      artist: "Melbourne Band",
      description: "Complete mixing and mastering of 10-track rock album",
      genre: "Alternative Rock",
      duration: "Album",
      year: "2024",
    },
    {
      title: "Podcast Series Mix",
      artist: "Tech Podcast",
      description:
        "Audio post-production for weekly tech podcast including noise reduction and EQ",
      genre: "Podcast",
      duration: "Series",
      year: "2024",
    },
  ];

  return (
    <Card sx={{ width: "100%", my: 4, border: "none" }}>
      <Grid container spacing={2}>
        {devProjects.map((project, index) => (
          <Grid size={6} key={index}>
            <Card
              sx={{
                height: "100%",
                bgcolor: alpha(theme.palette.common.white, 0.02),
                border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                "&:hover": {
                  bgcolor: alpha(theme.palette.common.white, 0.06),
                  transition: "all 0.2s ease",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </Typography>
                  <Chip
                    label={project.type}
                    size="small"
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                  {project.description}
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          border: 0,
                          color: "#55e49f",
                          bgcolor: "#012514",
                          p: 0.5,
                          ml: -0.5,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Link target="_blank" rel="noreferrer" href={project.github}>
                    <IconButton
                      size="small"
                      sx={{ bgcolor: alpha(theme.palette.common.white, 0.1) }}
                    >
                      <GitHub
                        fontSize="small"
                        sx={{ color: theme.palette.primary.main }}
                      />
                    </IconButton>
                  </Link>
                  <Link target="_blank" rel="noreferrer" href={project.demo}>
                    <IconButton
                      size="small"
                      sx={{ bgcolor: alpha(theme.palette.common.white, 0.1) }}
                    >
                      <OpenInNew
                        fontSize="small"
                        sx={{ color: theme.palette.primary.main }}
                      />
                    </IconButton>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default DevWork;
