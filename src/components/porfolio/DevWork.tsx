import { GitHub, Public } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import {
  mediaBoxSx,
  cardBaseStyles,
  makeCardHoverStyles,
  ActionLink,
} from "../Helpers";
import { devProjects } from "../../data/DevProjectsData";

const DevWork = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} sx={{ maxWidth: 1500, mx: "auto", mb: 8 }}>
      {devProjects.map((project, index) => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
            xl: 3,
          }}
          key={index}
        >
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
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {project.title}
                    </Typography>
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
              <Box
                sx={{
                  display: "flex",
                  gap: {
                    xs: 2,
                    md: 3,
                  },
                }}
              >
                <ActionLink
                  theme={theme}
                  buttons={[
                    {
                      icon: <GitHub className="card-icon" />,
                      label: "View code",
                      link: project.links.github,
                      className: "github-btn",
                    },
                    {
                      icon: <Public className="card-icon" />,
                      label: "Go to site",
                      link: project.links.demo,
                      className: "demo-btn",
                    },
                  ]}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DevWork;
