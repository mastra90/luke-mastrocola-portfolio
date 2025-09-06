import { GitHub, Public } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Grid, Typography, useTheme } from "@mui/material";
import { devCardHoverSx, portfolioCardSx, portfolioMediaSx } from "../../helpers/Styles";
import { DevProjectProps, devProjects } from "../../data/DevProjectsData";
import { PortfolioCardLinks } from "../../helpers/Wrappers";

const DevCard = ({ project }: { project: DevProjectProps }) => {
  const theme = useTheme();
  const { green } = theme.palette;
  const { portfolioCardBg } = theme.palette;
  const { portfolioCardBgHover } = theme.palette;
  const text = theme.palette.text;

  return (
    <Card
      variant="outlined"
      onClick={() => window.open(project.links.github, "_blank")}
      sx={{
        ...portfolioCardSx(portfolioCardBg, portfolioCardBgHover),
        ...devCardHoverSx("github-btn", "demo-btn", green),
        "&:hover": {
          "& .card-images": { transform: "scale(1.02)" },
        },
      }}
    >
      {project.image && (
        <Box sx={portfolioMediaSx}>
          <Box
            className="card-images"
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "all 0.1s ease-in-out",
            }}
          />
        </Box>
      )}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          transition: "all 0.1s ease-in-out",
          "&:last-child": {
            p: 0,
          },
        }}
      >
        <CardHeader
          sx={{ p: 0 }}
          title={
            <Box>
              <Typography sx={{ fontWeight: 500 }}>{project.year}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {project.title}
              </Typography>
            </Box>
          }
        />
        <Typography
          className="description-text"
          variant="body2"
          sx={{ my: 3, color: text.secondary, flex: 1 }}
        >
          {project.description}
        </Typography>
        <Box sx={{ display: "flex", gap: { xs: 2, md: 3 } }}>
          <PortfolioCardLinks
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
  );
};

const DevWork = () => {
  return (
    <Grid container spacing={2} sx={{ mx: "auto" }}>
      {devProjects.map((project, index) => (
        <Grid size={{ xs: 12, sm: 6, xl: 3 }} key={index}>
          <DevCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DevWork;
