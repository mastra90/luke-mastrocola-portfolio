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
import {
  actionLinkTextStyles,
  gridContainerSx,
  mediaBoxSx,
  cardBaseStyles,
  makeCardHoverStyles,
} from "./Helpers";

type DevProjectProps = {
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

const DevWork = () => {
  const theme = useTheme();

  const devProjects: DevProjectProps[] = [
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
      year: 2025,
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

  type ActionLinkProps = {
    links: DevProjectProps["links"];
  };

  const ActionLink = ({ links }: ActionLinkProps) => {
    const buttonConfig = [
      {
        icon: <GitHub className="card-icon" />,
        label: "View code",
        link: links.github,
        isGithub: true,
      },
      {
        icon: <Public className="card-icon" />,
        label: "Go to site",
        link: links.demo,
        isGithub: false,
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
                onClick={(e) => e.stopPropagation()}
              >
                <IconButton
                  className={button.isGithub ? "github-btn" : "demo-btn"}
                >
                  {button.icon}
                  <Typography
                    className="card-text"
                    sx={actionLinkTextStyles(theme)}
                  >
                    {button.label}
                  </Typography>
                  <ArrowOutward
                    className="card-arrow"
                    sx={{
                      ml: 1,
                      transition: "transform 0.1s ease-in",
                      color: theme.palette.gitHub.button,
                      fontSize: 20,
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
    <Grid container sx={gridContainerSx}>
      {devProjects.map((project, index) => (
        <Grid size={{ sm: 12, md: 3 }} key={index}>
          <Card
            variant="outlined"
            onClick={() => window.open(project.links.github, "_blank")}
            sx={{
              ...cardBaseStyles(theme),
              ...makeCardHoverStyles("github-btn", "demo-btn", theme),
              "&:hover": {
                "& .card-images": { transform: "scale(1.02)" },
              },
            }}
          >
            {project.image && (
              <Box sx={mediaBoxSx}>
                <Box
                  className="card-images"
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              </Box>
            )}
            <CardContent
              sx={{ p: 0, flex: 1, display: "flex", flexDirection: "column" }}
            >
              <CardHeader
                sx={{ p: 0 }}
                title={
                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>
                      {project.year}
                    </Typography>
                    {project.title}
                  </Box>
                }
              />
              <Typography
                className="description-text"
                variant="body2"
                sx={{ my: 3, color: theme.palette.text.secondary, flex: 1 }}
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
