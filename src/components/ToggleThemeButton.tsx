import { Box, useTheme } from "@mui/material";
import { Brightness4 as ToggleThemeIcon } from "@mui/icons-material";

const ToggleThemeButton = ({ toggleTheme }) => {
  const theme = useTheme();
  return (
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
        bgcolor: theme.palette.background.paper,
        borderRadius: 50,
        transition: "all 0.2s ease",
        cursor: "pointer",
        "&:hover": {
          color: theme.palette.text.secondary,
        },
      }}
    >
      <ToggleThemeIcon />
    </Box>
  );
};

export default ToggleThemeButton;
