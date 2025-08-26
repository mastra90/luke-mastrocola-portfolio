import { Box, Typography, useTheme } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import { WavingHand } from "@mui/icons-material";

const Welcome = () => {
  const theme = useTheme();
  const isMobile = useResponsive();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        my: isMobile ? 10 : 12,
        px: 2,
      }}
    >
      <Typography
        sx={{
          mb: 3,
          typography: { xs: "h5", md: "h4" },
        }}
      >
        Hello{" "}
        <WavingHand
          sx={{
            ml: 1,
            typography: { xs: "h6", md: "h5" },
            animation: "wave 5s ease-in-out infinite",
            "@keyframes wave": {
              "0%": {
                transform: "rotate(-55deg)",
              },
              "4%": {
                transform: "rotate(-35deg)",
              },
              "8%": {
                transform: "rotate(-55deg)",
              },
              "100%": {
                transform: "rotate(-35deg)",
              },
            },
          }}
        />{" "}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme.palette.text.secondary,
          maxWidth: 700,
          mb: isMobile ? 6 : 10,
        }}
      >
        I'm a web developer and audio producer who loves problem solving and
        being creative with code and sound. Here are some projects I've enjoyed
        working on.
      </Typography>
    </Box>
  );
};

export default Welcome;
