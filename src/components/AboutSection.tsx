import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import {
  Lightbulb as CreativeIcon,
  Psychology as ThinkingIcon,
  Handshake as CollaborationIcon,
  TrendingUp as GrowthIcon,
} from "@mui/icons-material";
import { useResponsive } from "../hooks/useResponsive";

const principles = [
  {
    icon: <CreativeIcon />,
    title: "Creative Problem solving",
    description:
      "Each project is a new opportunity to innovate with a fresh perspective and creative solutions.",
  },
  {
    icon: <ThinkingIcon />,
    title: "User-Centered design",
    description:
      "I prioritize intuitive experiences that feel natural and engaging.",
  },
  {
    icon: <CollaborationIcon />,
    title: "Collaborative projects",
    description:
      "The magic happens when diverse minds come together to create something special.",
  },
  {
    icon: <GrowthIcon />,
    title: "Continuous learning",
    description:
      "In a rapidly evolving field, staying curious and adaptable is essential.",
  },
];

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useResponsive();

  return (
    <Box
      sx={{
        pt: 8,
        mb: isMobile ? 0 : 16,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
          }}
        >
          <Typography sx={{ mb: 2, typography: { xs: "h5", md: "h4" } }}>
            Bridging{" "}
            <Box
              component="span"
              color={theme.palette.techChip.background}
              typography={{ xs: "h5", md: "h4" }}
            >
              technology
            </Box>{" "}
            and{" "}
            <Box
              component="span"
              color={"#f9e4a0"}
              typography={{ xs: "h5", md: "h4" }}
            >
              creativity
            </Box>
          </Typography>
          <Typography
            sx={{
              mx: "auto",
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: { sm: "100%", md: 700 },
            }}
          >
            My passion is building digital experiences through code and sound.
          </Typography>
        </Box>
        <Grid
          container
          spacing={6}
          sx={{
            pb: 6,
          }}
        >
          {principles.map((principle, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "#64b5f6",
                    mt: 1,
                    "& svg": {
                      fontSize: 32,
                    },
                  }}
                >
                  {principle.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      mb: 1,
                      typography: { xs: "body1", md: "h6" },
                    }}
                  >
                    {principle.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.4,
                      fontSize: 16,
                    }}
                  >
                    {principle.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          textAlign="center"
          sx={{
            pt: 4,
            pb: 8,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontStyle: "italic",
              maxWidth: 450,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            The intersection of technology and artistry is where logic connects
            meaning and function meets beauty.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
