import {
  Box,
  Card,
  Typography,
  useTheme,
  CardHeader,
  Chip,
  alpha,
  Button,
} from "@mui/material";
import {
  Email as MailIcon,
  Download as DownloadIcon,
  Headset,
  Terminal,
} from "@mui/icons-material";

const Portfolio = () => {
  const theme = useTheme();

  const skills = {
    development: [
      "TypeScript",
      "JavaScript",
      "React",
      "GraphQL",
      "Python",
      "PostgreSQL",
      "NodeJS",
      "Next.js",
      "NestJS",
      "Redis",
      "AWS",
      "Docker",
    ],
    audio: [
      "Mixing/Mastering",
      "Post production",
      "Foley/SFX",
      "Podcasts",
      "Lofi",
      "Rock/Metal",
      "Audio Restoration",
    ],
  };

  return (
    <Box maxWidth="lg" sx={{ minHeight: "100vh", pt: 8, m: "auto" }}>
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
          m: 2,
        }}
      >
        <Card sx={{ width: { sm: "100%", md: 600 }, p: 2 }}>
          <CardHeader
            title="Audio production"
            slotProps={{
              title: { variant: "h6" },
            }}
            sx={{ p: 0 }}
            avatar={<Headset sx={{ color: theme.palette.primary.main }} />}
          />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, py: 2 }}>
            {skills.audio.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                size="small"
                sx={{
                  border: 2,
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  px: 1,
                  py: 2,
                }}
              />
            ))}
          </Box>
        </Card>
        <Card sx={{ width: { sm: "100%", md: 600 }, p: 2 }}>
          <CardHeader
            title="Web development"
            slotProps={{
              title: { variant: "h6" },
            }}
            sx={{ p: 0 }}
            avatar={<Terminal sx={{ color: theme.palette.primary.main }} />}
          />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, py: 2 }}>
            {skills.development.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                size="small"
                sx={{
                  border: 2,
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  px: 1,
                  py: 2,
                }}
              />
            ))}
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Portfolio;
