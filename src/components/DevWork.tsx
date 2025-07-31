import { Code, GitHub, OpenInNew } from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  CardContent,
  CardHeader,
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
        "Dr Andrew Thomas is a schollar and lecture at Deakin University. His website was developed to showcase his work and contact",
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
      technologies: ["React", "TypeScript", "NestJS", "Docker"],
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
    <Grid sx={{ my: 4 }} container spacing={2}>
      {devProjects.map((project, index) => (
        <Grid size={{ sm: 12, md: 6 }} key={index}>
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              "&:hover": {
                transform: "scale(1.005)",
                bgcolor: theme.palette.background.default,
              },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <CardHeader
                sx={{ p: 0 }}
                title={
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {project.title}
                    <Chip
                      variant="outlined"
                      sx={{
                        color: theme.palette.techChip.type,
                        fontWeight: 700,
                        border: 0,
                      }}
                      label={project.type}
                    />
                  </Box>
                }
                subheader={
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      my: 1,
                      ml: -0.5,
                      gap: 1,
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          fontWeight: 500,
                          border: 0,
                          bgcolor: theme.palette.techChip.background
                        }}
                      />
                    ))}
                  </Box>
                }
              />
              <Typography
                variant="body2"
                sx={{ my: 3, color: theme.palette.text.secondary }}
              >
                {project.description}
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Link target="_blank" rel="noreferrer" href={project.github}>
                  <IconButton
                    sx={{
                      bgcolor: theme.palette.gitHub.background,
                      "&:hover": {
                        transform: "scale(1.1)",
                        bgcolor: theme.palette.gitHub.background,
                      },
                    }}
                  >
                    <GitHub sx={{ color: theme.palette.gitHub.button }} />
                  </IconButton>
                </Link>
                <Link target="_blank" rel="noreferrer" href={project.demo}>
                  <IconButton
                    sx={{
                      bgcolor: theme.palette.gitHub.background,
                      "&:hover": {
                        transform: "scale(1.1)",
                        bgcolor: theme.palette.gitHub.background,
                      },
                    }}
                  >
                    <OpenInNew sx={{ color: theme.palette.gitHub.button }} />
                  </IconButton>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DevWork;
