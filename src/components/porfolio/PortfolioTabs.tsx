import { Code, Headphones } from "@mui/icons-material";
import { Button, Box, useTheme } from "@mui/material";

type PortfolioTabsProps = {
  isWebDevTab: boolean;
  setIsWebDevTab: (value: boolean) => void;
  isActive: boolean;
};

const PortfolioTabs = ({ isWebDevTab, setIsWebDevTab, isActive }: PortfolioTabsProps) => {
  const theme = useTheme();
  const { buttonHover } = theme.palette;
  const text = theme.palette.text;
  const bgcolor = theme.palette.background;

  const PortfolioTabsSx = (isActive: boolean) => ({
    minWidth: { xs: 48, md: 56 },
    cursor: isActive ? "auto" : "pointer",
    borderRadius: 8,
    color: isActive ? bgcolor.default : "inherit",
    bgcolor: isActive ? text.primary : "transparent",
    "&:hover": { bgcolor: isActive ? text.primary : buttonHover },
  });

  const PortfolioIconsSx = (isActive: boolean) => ({
    fontSize: 24,
    color: isActive ? bgcolor.default : "inherit",
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          p: 1,
          bgcolor: bgcolor.secondary,
          borderRadius: 8,
        }}
      >
        <Button onClick={() => setIsWebDevTab(true)} sx={PortfolioTabsSx(isWebDevTab)}>
          <Code sx={PortfolioIconsSx(isActive)} />
        </Button>
        <Button onClick={() => setIsWebDevTab(false)} sx={PortfolioTabsSx(!isWebDevTab)}>
          <Headphones sx={PortfolioIconsSx(isActive)} />
        </Button>
      </Box>
    </>
  );
};

export default PortfolioTabs;
