import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, useTheme, Avatar, Typography } from "@mui/material";

const HeroSection = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Web development",
      image: "/src/assets/dev.jpg",
    },
    {
      title: "Audio production",
      image: "/src/assets/audio.jpg",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: { xs: 4, sm: 8 },
          width: { xs: "100%", sm: 500 },
          mx: "auto",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Avatar
          src="/src/assets/Headshot.jpg"
          alt="Luke Mastrocola"
          sx={{
            width: 150,
            height: 150,
            border: `4px solid ${theme.palette.border.primary}`,
          }}
        />
        <Box
          sx={{
            mx: "auto",
            mt: { xs: 4, sm: 0 },
            justifyContent: "center",
            textAlign: { xs: "center", sm: "inherit" },
            color: theme.palette.text.secondary,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.text.primary,
              typography: { xs: "h5", sm: "h4" },
              fontWeight: { xs: 500, sm: 500 },
            }}
          >
            Luke Mastrocola
          </Typography>
          <Typography variant="body1" sx={{ my: 1, fontWeight: 500 }}>
            Web developer | Audio producer
          </Typography>
          <Typography variant="body1">
            <GitHub sx={{ mr: 1.5 }} /> <LinkedIn sx={{ mr: 1.5 }} />{" "}
            <Twitter sx={{ mr: 1.5 }} /> <Instagram />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
