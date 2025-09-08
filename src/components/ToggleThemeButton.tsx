import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { Bedtime, WbSunny } from "@mui/icons-material";
import { useResponsive } from "../hooks/useResponsive";

type ToggleThemeButtonProps = {
  toggleTheme: () => void;
  isDark: boolean;
};

const ToggleThemeButton = ({ toggleTheme, isDark }: ToggleThemeButtonProps) => {
  const theme = useTheme();
  const { yellow, buttonHover } = theme.palette;
  const text = theme.palette.text;
  const bgcolor = theme.palette.background;
  const isMobile = useResponsive();

  const iconSx = {
    position: "absolute",
    transition: "all 0.1s ease-in-out",
  };

  return (
    <Box id="home" sx={{ m: isMobile ? 2 : "auto", mb: isMobile ? -2 : 0 }}>
      <Tooltip disableInteractive title={`Change to ${isDark ? "light" : "dark"} mode`}>
        <Box
          onClick={toggleTheme}
          sx={{
            width: 56,
            height: 32,
            backgroundColor: isDark ? "#464c52" : "#dbd9d9",
            borderRadius: 4,
            position: "relative",
            "&:hover": {},
          }}
        >
          <IconButton
            sx={{
              top: -2,
              left: isDark ? -2 : 22,
              width: 36,
              height: 36,
              backgroundColor: isDark ? "#171f26" : buttonHover,
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              transition: "left 0.2s ease-in-out !important",
              "&:hover": {
                backgroundColor: text.primary,
                "& .bedtime-icon": {
                  opacity: isDark ? 0 : 1,
                  color: yellow,
                },
                "& .sunny-icon": {
                  opacity: isDark ? 1 : 0,
                  color: bgcolor.default,
                },
              },
            }}
          >
            <Bedtime
              className="bedtime-icon"
              sx={{
                ...iconSx,
                opacity: isDark ? 1 : 0,
                color: isDark ? yellow : text.primary,
              }}
            />
            <WbSunny
              className="sunny-icon"
              sx={{
                ...iconSx,
                opacity: isDark ? 0 : 1,
                color: isDark ? yellow : text.primary,
              }}
            />
          </IconButton>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default ToggleThemeButton;


// import { Box, Button, Tooltip, useTheme } from "@mui/material";
// import { Bedtime, WbSunny } from "@mui/icons-material";
// import { useResponsive } from "../hooks/useResponsive";

// type ToggleThemeButtonProps = {
//   toggleTheme: () => void;
//   isDark: boolean;
// };

// const ToggleThemeButton = ({ toggleTheme, isDark }: ToggleThemeButtonProps) => {
//   const theme = useTheme();
//   const { yellow } = theme.palette;
//   const text = theme.palette.text;
//   const bgcolor = theme.palette.background;
//   const isMobile = useResponsive();

//   const iconSx = {
//     position: "absolute",
//     transition: "all 0.1s ease-in-out",
//   };

//   return (
//     <Box sx={{ m: isMobile ? 2 : "auto", mb: isMobile ? -2 : 0 }}>
//       <Tooltip disableInteractive title={`Change to ${isDark ? "light" : "dark"} mode`}>
//         <Button
//           size="small"
//           disableRipple
//           onClick={toggleTheme}
//           sx={{
//             borderColor: bgcolor.secondary,
//             minWidth: 0,
//             width: isMobile ? 48 : 60,
//             height: isMobile ? 48 : 60,
//             borderRadius: 8,
//             "&:hover": {
//               bgcolor: !isDark ? text.primary : bgcolor.secondary,
//               color: !isDark ? text.primary : bgcolor.secondary,
//               "& .bedtime-icon": { opacity: isDark ? 0 : 1, color: yellow },
//               "& .sunny-icon": { opacity: isDark ? 1 : 0, color: yellow },
//             },
//           }}
//         >
//           <Bedtime className="bedtime-icon" sx={{ ...iconSx, opacity: isDark ? 1 : 0 }} />
//           <WbSunny className="sunny-icon" sx={{ ...iconSx, opacity: isDark ? 0 : 1 }} />
//         </Button>
//       </Tooltip>
//     </Box>
//   );
// };

// export default ToggleThemeButton;
