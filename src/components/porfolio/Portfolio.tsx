import { Box, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import DevWork from "./DevWork";
import AudioWork from "./AudioWork";
import ServicesSwitch from "./ServicesSwitch";

const KeepMountedHidden = ({
  hidden,
  children,
}: {
  hidden: boolean;
  children: ReactNode;
}) => {
  return (
    <Box
      aria-hidden={hidden}
      sx={
        hidden
          ? {
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }
          : { position: "static" }
      }
    >
      {children}
    </Box>
  );
};

const Portfolio = ({
  showWebDev,
  setShowWebDev,
}: {
  setShowWebDev: (value: boolean) => void;
  showWebDev: boolean;
}) => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography sx={{ mb: 2, typography: { xs: "h5", md: "h4" } }}>
          Portfolio{" "}
        </Typography>
        <Typography
          sx={{
            mx: "auto",
            textAlign: "center",
            color: theme.palette.text.secondary,
            maxWidth: { sm: "100%", md: 700 },
          }}
        >
          Explore some of my web development and audio production work.
        </Typography>
      </Box>
      <ServicesSwitch showWebDev={showWebDev} setShowWebDev={setShowWebDev} />
      <KeepMountedHidden hidden={!showWebDev}>
        <DevWork />
      </KeepMountedHidden>
      <KeepMountedHidden hidden={showWebDev}>
        <AudioWork />
      </KeepMountedHidden>
    </>
  );
};

export default Portfolio;
