import { Box, Typography, useTheme } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";

const Welcome = () => {
  const theme = useTheme();
  const isMobile = useResponsive;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          width: "100%",
          my: 4,
          p: isMobile() ? 4 : 8,
          bgcolor: theme.palette.background.switch,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
            fontSize: isMobile() ? 16 : 20,
          }}
        >
          Welcome to my portfolio.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: theme.palette.text.secondary,
            maxWidth: 600,
          }}
        >
          I'm a passionate web developer and audio producer. Each project
          reflects my commitment to intuitive design, and creative innovation.
          Explore my work below to see how my ideas come to life.
        </Typography>
      </Box>
    </>
  );
};

export default Welcome;
