import { Button, Box, useTheme } from "@mui/material";

const ServicesSwitch = ({ showWebDev, setShowWebDev }) => {
  const theme = useTheme();

  const buttonStyles = (isActive) => ({
    boxShadow: "none",
    transition: "0.0s",
    fontSize: { xs: 12, sm: 14 },
    color: isActive
      ? theme.palette.background.default
      : theme.palette.text.primary,
    bgcolor: isActive
      ? theme.palette.text.primary
      : theme.palette.background.switch,
    border: 0,
    width: { xs: "100%", sm: "100%", md: 280 },
    "&:hover": {
      boxShadow: "none",
      bgcolor: isActive
        ? theme.palette.text.primary
        : theme.palette.button.hover,
      opacity: isActive ? 0.95 : 1,
    },
    cursor: "auto",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        p: 2,
        bgcolor: theme.palette.background.switch,
        width: { xs: "100%", sm: "100%", md: 600 },
        m: "auto",
        my: 8,
        borderRadius: 3,
      }}
    >
      <Button
        disableRipple
        onClick={() => setShowWebDev(true)}
        sx={buttonStyles(showWebDev)}
      >
        Web Development
      </Button>
      <Button
        disableRipple
        onClick={() => setShowWebDev(false)}
        sx={buttonStyles(!showWebDev)}
      >
        Audio Production
      </Button>
    </Box>
  );
};

export default ServicesSwitch;