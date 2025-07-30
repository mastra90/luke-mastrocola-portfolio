import { Box, Card, Typography, useTheme, Button } from "@mui/material";
import {
  Email as MailIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";

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
    <Box sx={{ pt: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" component="h1" sx={{ my: 2, fontWeight: 700 }}>
          Luke Mastrocola
        </Typography>
        <Typography variant="h5" sx={{ my: 2, opacity: 0.8 }}>
          Full Stack Developer & Audio Engineer
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: 660, mx: "auto", opacity: 0.7 }}
        >
          Building dynamic web applications and crafting professional audio
          experiences. Based in Melbourne, Australia, I bring technical
          precision to both web products and audio experiences.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            startIcon={<MailIcon />}
            sx={{ borderRadius: 3 }}
          >
            Get In Touch
          </Button>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={{ borderRadius: 3 }}
          >
            Download CV
          </Button>
        </Box>
      </Box>

      {/* Services Overview */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: 2,
        }}
      >
        {services.map((service) => (
          <Card
            key={service.title}
            sx={{
              width: { sm: "100%", md: 600 },
              height: 300,
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "inherit",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: 700,
                zIndex: 1,
                textAlign: "center",
              }}
            >
              {service.title}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
