import { GitHub, Public } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { devCardHoverSx, portfolioCardSx, portfolioMediaSx } from "../../helpers/Styles";
import { DevProjectProps, devProjects } from "../../data/DevProjectsData";
import { FlexBox, PortfolioCardLinks, SubHeading } from "../../helpers/Wrappers";

const DevCard = ({ project }: { project: DevProjectProps }) => {
  const theme = useTheme();
  const { green } = theme.palette;
  const { portfolioCardBg } = theme.palette;
  const { portfolioCardBgHover } = theme.palette;

  return (
    <Card
      variant="outlined"
      onClick={() => window.open(project.links.github, "_blank")}
      sx={{
        ...portfolioCardSx(portfolioCardBg, portfolioCardBgHover),
        ...devCardHoverSx("github-btn", "demo-btn", green),
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
            <FlexBox gap={1}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <SubHeading fontSize={16} title={project.title} />
                <Typography>{project.year}</Typography>
              </Box>
              <Stack direction="row" sx={{ ml: -1, mb: "auto" }}>
                <Chip label={project.type} size="small" variant="outlined" sx={{ color: green }} />
              </Stack>
              <Typography variant="body2">{project.description}</Typography>
            </FlexBox>
          }
        />
        <FlexBox row mt="auto">
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
        </FlexBox>
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
