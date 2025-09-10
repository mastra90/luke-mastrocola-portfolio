import { ChevronLeft } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";

const LegacySite = ({ isLegacy, toNewSite }: { isLegacy: boolean; toNewSite: () => void }) => {
  const theme = useTheme();
  const isMobile = useResponsive();
  const bgcolor = theme.palette.background;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        zIndex: isLegacy ? 100 : -100,
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        opacity: isLegacy ? 1 : 0,
        
      }}
    >
      <Button
        onClick={toNewSite}
        variant="outlined"
        sx={{
          py: 2,
          border: 0,
          borderRadius: 0,
          color: "#f2f2ef",
          bgcolor: "#759242",
          transition: "all 0.1s ease-in-out",
          ...(!isMobile && { "&:hover": { bgcolor: bgcolor.secondary } }),
        }}
      >
        <ChevronLeft sx={{ fontSize: 24, mr: 1, color: "#f2f2ef" }} />
        Back to site
      </Button>
      <iframe
        src="/legacy/index.html"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Legacy Portfolio Site"
      />
    </Box>
  );
};

export default LegacySite;
