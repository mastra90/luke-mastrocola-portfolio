import { Button, Box, useTheme, Typography } from "@mui/material";

type PortfolioTabsProps = {
  isWebDevTab: boolean;
  setIsWebDevTab: (value: boolean) => void;
};

const PortfolioTabs = ({ isWebDevTab, setIsWebDevTab }: PortfolioTabsProps) => {
  const theme = useTheme();
  const { buttonHover } = theme.palette;
  const text = theme.palette.text;
  const bgcolor = theme.palette.background;
  const PortfolioTabsSx = (isActive: boolean) => ({
    color: isActive ? bgcolor.default : "inherit",
    bgcolor: isActive ? text.primary : "transparent",
    width: { xs: "100%", sm: "100%", md: 280 },
    "&:hover": {
      bgcolor: isActive ? text.primary : buttonHover,
    },
    cursor: "auto",
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
          bgcolor: bgcolor.secondary,
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
          <Typography fontSize={{ xs: 12, sm: 14 }} fontWeight={500}>
            Web Development
          </Typography>
        </Button>
        <Button
          disableRipple
          onClick={() => setIsWebDevTab(false)}
          sx={PortfolioTabsSx(!isWebDevTab)}
        >
          <Typography fontSize={{ xs: 12, sm: 14 }} fontWeight={500}>
            Audio Production
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default PortfolioTabs;
