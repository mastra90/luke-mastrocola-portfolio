import { Button, Box, useTheme, Typography } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";

type ServicesSwitchProps = {
  showWebDev: boolean;
  setShowWebDev: (value: boolean) => void;
};

const ServicesSwitch = ({ showWebDev, setShowWebDev }: ServicesSwitchProps) => {
  const theme = useTheme();
  const isMobile = useResponsive;

  const buttonStyles = (isActive: boolean) => ({
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
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: isMobile() ? 2 : 6,
          fontSize: isMobile() ? 16 : 20,
        }}
      >
        Portfolio
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          p: 2,
          bgcolor: theme.palette.background.switch,
          width: { xs: "100%", sm: "100%", md: 600 },
          m: "auto",
          my: 4,
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
    </>
  );
};

export default ServicesSwitch;
