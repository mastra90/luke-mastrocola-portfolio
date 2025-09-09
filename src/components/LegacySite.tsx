import { ArrowBack } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";

const LegacySite = ({ toNewSite }: { toNewSite: () => void }) => {
  const theme = useTheme();
  const isMobile = useResponsive();
  const { green } = theme.palette;
  const bgcolor = theme.palette.background;

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        transition: "all 1s ease-in-out",
      }}
    >
      <Button
        onClick={toNewSite}
        variant="outlined"
        sx={{
          m: 4,
          width: "fit-content",
          borderColor: bgcolor.secondary,
          transition: "all 1s ease-in-out",
          ...(!isMobile && { "&:hover": { borderColor: green } }),
        }}
      >
        <ArrowBack sx={{ fontSize: 24, mr: 2, transition: "all 1s ease-in-out" }} />
        Back to site
      </Button>
      <iframe
        src="/legacy/index.html"
        width="100%"
        height="100%"
        style={{ border: "none", transition: "all 1s ease-in-out" }}
        title="Legacy Portfolio Site"
      />
    </Box>
  );
};

export default LegacySite;
