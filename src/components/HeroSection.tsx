import { Box, useTheme, Avatar } from "@mui/material";
import { Brightness4 as ThemeToggle } from "@mui/icons-material";

const HeroSection = ({ toggleTheme }) => {
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
      {/* Theme toggle */}
      <Box
        onClick={toggleTheme}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "auto",
          mb: 2,
          width: 60,
          height: 60,
          color: theme.palette.text.primary,
          bgcolor: theme.palette.background.paper,
          borderRadius: 50,
          transition: "all 0.2s ease",
          cursor: "pointer",
          "&:hover": {
            color: theme.palette.text.secondary,
          },
        }}
      >
        <ThemeToggle />
      </Box>
      <Box sx={{ mt: 8, width: 400, mx: "auto" }}>
        <Avatar
          src="/src/assets/Headshot.jpg"
          alt="Luke Mastrocola"
          sx={{
            width: 150,
            height: 150,
            border: `4px solid ${theme.palette.border.primary}`,
          }}
        />
      </Box>
    </>
  );
};

export default HeroSection;
