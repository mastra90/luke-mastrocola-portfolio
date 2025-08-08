import { ArrowOutward, GitHub, Public } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

type DevProjects = {
  year: number;
  title: string;
  description: string;
  type: string;
  image: string;
  links: { github: string; demo?: string };
};

const DevWork = () => {
  const theme = useTheme();

  const devProjects: DevProjects[] = [
    {
      year: 2025,
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
      year: 2025,
      title: "Marine services showcase",
      description:
        "Digital showcase for Fullard Boats Co, highlighting their expertise in custom boat building and marine services",
      type: "Professional website",
      image: "src/assets/fullard-boats2.jpg",
      links: {
        github:
          "https://github.com/FullardBoats-Website/fullard-boats-frontend",
        demo: "https://www.fullardboats2.com.au/",
      },
    },
    {
      year: 2025,
      title: "Task Tracker web app",
      description:
        "A modern task tracking web application built with React frontend and NestJS backend, fully containerized with Docker for easy deployment and development.",
      type: "React web app",
      image: "src/assets/task-tracker.jpg",
      links: {
        github: "https://github.com/mastra90/tsa-task-tracker",
      },
    },
    {
      year: 2025,
      title: "SRTainty",
      description:
        "A Python application for cleaning and processing .srt subtitle files. This tool provides various functions to improve subtitle readability and timing, making it easier to prepare subtitles for viewing.",
      type: "Python app",
      image: "src/assets/SRTainty.jpg",
      links: {
        github: "https://github.com/mastra90/SRTainty",
      },
    },
  ];

  type ActionLinkProps = {
    links: DevProjects["links"];
  };

  const ActionLink = ({ links }: ActionLinkProps) => {
    const buttonConfig = [
      {
        icon: <GitHub className="card-icon" />,
        label: "View code",
        link: links.github,
      },
      {
        icon: <Public className="card-icon" />,
        label: "Open site",
        link: links.demo,
      },
    ];

    return (
      <>
        {buttonConfig.map(
          (button, key) =>
            button.link && (
              <Link
                key={key}
                target="_blank"
                rel="noreferrer"
                href={button.link}
              >
                <IconButton>
                  {button.icon}
                  <Typography
                    className="card-text"
                    sx={{
                      fontSize: 12,
                      fontWeight: 600,
                      ml: 1,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {button.label}
                  </Typography>
                  <ArrowOutward
                    className="card-arrow"
                    sx={{
                      ml: 1,
                      transition: "transform 0.1s ease-in",
                      color: theme.palette.gitHub.button,
                      fontSize: 16,
                    }}
                  />
                </IconButton>
              </Link>
            )
        )}
      </>
    );
  };

  return (
    <Grid container spacing={2} sx={{ width: 800, m: "auto" }}>
      {devProjects.map((project, index) => (
        <Grid size={{ sm: 12, md: 6 }} key={index}>
          <Card
            variant="outlined"
            sx={{
              bgcolor: theme.palette.background.paper,
              height: "100%",
              "&:hover": {
                bgcolor: theme.palette.background.hover,
                "& .description-text": {
                  color: theme.palette.text.primary,
                },
              },
            }}
          >
            {project.image && (
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  opacity: 0.8,
                }}
              />
            )}
            <CardContent sx={{ p: 3, height: "100%" }}>
              <CardHeader
                sx={{ p: 0 }}
                title={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    {project.title}
                    <Typography sx={{ fontSize: 12 }}>
                      {project.year}
                    </Typography>
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
                <ActionLink links={project.links} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DevWork;
