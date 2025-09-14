import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { Bedtime, WbSunny } from "@mui/icons-material";
import { useResponsive } from "../hooks/useResponsive";

type ToggleThemeButtonProps = {
  toggleTheme: () => void;
  isDark: boolean;
  isFooter?: boolean;
};

const ToggleThemeButton = ({ toggleTheme, isDark, isFooter }: ToggleThemeButtonProps) => {
  const theme = useTheme();
  const button = theme.palette.button;
  const global = theme.palette.global;
  const text = theme.palette.text;
  const bgcolor = theme.palette.background;
  const isMobile = useResponsive();

  const iconSx = {
    position: "absolute",
    transition: "all 0.1s ease-in-out",
  };

  const boxSx = {
    width: isFooter ? 56 : 0,
    height: isFooter ? 32 : 0,
    backgroundColor: isDark ? "#464c52" : "#d9dee0",
    borderRadius: 4,
    position: "relative",
  };

  const iconButtonSx = {
    top: isFooter ? -2 : 0,
    left: isFooter ? (isDark ? -2 : 22) : isMobile ? 0 : -30,
    width: isFooter ? 36 : isMobile ? 48 : 60,
    height: isFooter ? 36 : isMobile ? 48 : 60,
    backgroundColor: isDark ? "#171f26" : button.hover,
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transition: "left 0.2s ease-in-out !important",
    ...(!isMobile && {
      "&:hover": {
        backgroundColor: text.primary,
        "& .bedtime-icon": {
          opacity: isDark ? 0 : 1,
          color: global.yellow,
        },
        "& .sunny-icon": {
          opacity: isDark ? 1 : 0,
          color: bgcolor.default,
        },
      },
    }),
  };

  return (
    <Box id="home" sx={{ m: isMobile ? (isFooter ? 0 : 2) : "auto", mb: isMobile ? -2 : 0 }}>
      <Tooltip
        disableInteractive
        title={`Change to ${isDark ? "light" : "dark"} mode`}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, isFooter ? 0 : 52],
                },
              },
            ],
          },
        }}
      >
        <Box onClick={toggleTheme} sx={boxSx}>
          <IconButton sx={iconButtonSx}>
            <Bedtime
              className="bedtime-icon"
              sx={{
                ...iconSx,
                opacity: isDark ? 1 : 0,
                color: isDark ? global.yellow : text.primary,
              }}
            />
            <WbSunny
              className="sunny-icon"
              sx={{
                ...iconSx,
                opacity: isDark ? 0 : 1,
                color: isDark ? global.yellow : text.primary,
              }}
            />
          </IconButton>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default ToggleThemeButton;
