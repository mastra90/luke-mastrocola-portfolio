import { GitHub, OpenInNew } from "@mui/icons-material";
import {
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
        "Dr Andrew Thomas is a scholar and lecturer at Deakin University. This website was developed to showcase his work and offer a method of contact.",
      technologies: ["React", "JavaScript", "Express.js"],
      github: "https://github.com/AndrewThomasWebsite/andrew-thomas-frontend",
      demo: "https://www.drandrewthomasir.com/",
      type: "Professional website",
    },
    {
      title: "Fullard Boats",
      description:
        "Fullard Boats is boat building business based in Gippsland. The website showcases their work and  services as well as a method of contact.",
      technologies: ["React", "JavaScript", "Express.js"],
      github: "https://github.com/FullardBoats-Website/fullard-boats-frontend",
      demo: "https://www.fullardboats.com.au/",
      type: "Professional website",
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

  return (
    <Grid container spacing={2}>
      {devProjects.map((project, index) => (
        <Grid size={{ sm: 12, md: 6 }} key={index}>
          <Card
            variant="outlined"
            sx={{
              bgcolor: theme.palette.background.paper,
              height: "100%",
              "&:hover": {
                transform: "scale(1.005)",
                bgcolor: theme.palette.background.hover,
                "& .description-text": {
                  color: theme.palette.text.primary,
                },
              },
            }}
          >
            <CardContent sx={{ p: 3, height: "100%" }}>
              <CardHeader
                sx={{ p: 0 }}
                title={
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {project.title}
                    <Chip
                      sx={{
                        bgcolor: theme.palette.techChip.background,
                        color: theme.palette.techChip.primary,
                        fontWeight: 700,
                        border: 0,
                        ml: 1,
                      }}
                      label={project.type}
                    />
                  </Box>
                }
                subheader={
                  <Box
                    sx={{
                      display: "flex",
                      ml: -0.2,
                      gap: 1,
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        size="small"
                        key={tech}
                        label={tech}
                        sx={{
                          fontWeight: 500,
                          mt: 0.5,
                          color: theme.palette.techChip.background,
                        }}
                      />
                    ))}
                  </Box>
                }
              />
              <Typography
                className="description-text"
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
                {project.demo && (
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
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DevWork;
