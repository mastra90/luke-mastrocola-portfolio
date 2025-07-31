import { Box, useTheme, Avatar } from "@mui/material";

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
