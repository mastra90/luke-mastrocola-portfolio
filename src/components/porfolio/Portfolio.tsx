import { Box } from "@mui/material";
import { ReactNode } from "react";
import DevWork from "./DevWork";
import AudioWork from "./AudioWork";

function KeepMountedHidden({
  hidden,
  children,
}: {
  hidden: boolean;
  children: ReactNode;
}) {
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
}

const Portfolio = ({ showWebDev }: { showWebDev: boolean }) => {
  return (
    <>
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
