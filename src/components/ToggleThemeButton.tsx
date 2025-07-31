import { Box, Tooltip, useTheme } from "@mui/material";
import { Bedtime, WbSunny } from "@mui/icons-material";

const ToggleThemeButton = ({ toggleTheme, isDark }) => {
  const theme = useTheme();
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
          m: "auto",
          mb: 2,
          width: 60,
          height: 60,
          color: theme.palette.text.primary,
          bgcolor: theme.palette.background.secondary,
          borderRadius: 50,
          transition: "all 0.2s ease",
          cursor: "pointer",
          position: "relative",
          "&:hover": {
            color: theme.palette.button.themeButtonHover,
            bgcolor: theme.palette.button.themeIconHover,
            "& .bedtime-icon": {
              opacity: isDark ? 0 : 1,
            },
            "& .sunny-icon": {
              opacity: isDark ? 1 : 0,
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
