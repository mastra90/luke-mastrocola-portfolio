import { Button, Box, useTheme } from "@mui/material";

type PortfolioTabsProps = {
  isWebDevTab: boolean;
  setIsWebDevTab: (value: boolean) => void;
};

const PortfolioTabs = ({ isWebDevTab, setIsWebDevTab }: PortfolioTabsProps) => {
  const theme = useTheme();

  const PortfolioTabsSx = (isActive: boolean) => ({
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
          onClick={() => setIsWebDevTab(true)}
          sx={PortfolioTabsSx(isWebDevTab)}
        >
          Web Development
        </Button>
        <Button
          disableRipple
          onClick={() => setIsWebDevTab(false)}
          sx={PortfolioTabsSx(!isWebDevTab)}
        >
          Audio Production
        </Button>
      </Box>
    </>
  );
};

export default PortfolioTabs;
