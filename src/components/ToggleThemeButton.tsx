import { Box, Tooltip, useTheme } from "@mui/material";
import { Bedtime, WbSunny } from "@mui/icons-material";
import { useResponsive } from "../hooks/useResponsive";

type ToggleThemeButtonProps = {
  toggleTheme: () => void;
  isDark: boolean;
};

const ToggleThemeButton = ({ toggleTheme, isDark }: ToggleThemeButtonProps) => {
  const theme = useTheme();
  const { yellow } = theme.palette;
  const white = theme.palette.text.primary;
  const bgcolor = theme.palette.background;
  const isMobile = useResponsive();

  return (
    <Tooltip
      disableInteractive
      enterDelay={0}
      leaveDelay={0}
      title={`Change to ${isDark ? "light" : "dark"} mode`}
    >
      <Box
        onClick={toggleTheme}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: isMobile ? "inherit" : "auto",
          top: isMobile ? 16 : "inherit",
          left: isMobile ? 16 : "inherit",
          width: isMobile ? 40 : 60,
          height: isMobile ? 40 : 60,
          color: white,
          bgcolor: bgcolor.paper,
          borderRadius: 50,
          transition: "all 0.2s ease",
          cursor: "pointer",
          position: "relative",
          "&:hover": {
            bgcolor: !isDark ? white : bgcolor.paper,
            "& .bedtime-icon": {
              opacity: isDark ? 0 : 1,
              color: yellow,
            },
            "& .sunny-icon": {
              opacity: isDark ? 1 : 0,
              color: yellow,
            },
          },
        }}
      >
        <Bedtime
          className="bedtime-icon"
          sx={{
            position: "absolute",
            opacity: isDark ? 1 : 0,
            transition: "all 0.1s ease",
          }}
        />

        <WbSunny
          className="sunny-icon"
          sx={{
            mt: 0.1,
            position: "absolute",
            opacity: isDark ? 0 : 1,
            transition: "all 0.1s ease",
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default ToggleThemeButton;
