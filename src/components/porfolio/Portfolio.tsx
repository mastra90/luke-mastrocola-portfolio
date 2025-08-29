import { Box, Typography, useTheme } from "@mui/material";
import DevWork from "./DevWork";
import AudioWork from "./AudioWork";
import { LayoutWrapper } from "../../helpers/Wrappers";
import PortfolioTabs from "./PortfolioTabs";

const Portfolio = ({
  isWebDevTab,
  setIsWebDevTab,
}: {
  setIsWebDevTab: (value: boolean) => void;
  isWebDevTab: boolean;
}) => {
  const theme = useTheme();
  const hiddenSx = {
    height: 0,
    overflow: "hidden",
  };
  return (
    <LayoutWrapper>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ typography: { xs: "h5", md: "h4" } }}>
          Portfolio{" "}
        </Typography>
        <Typography color={theme.palette.text.secondary}>
          Explore some of my web development and audio production work.
        </Typography>
      </Box>
      <PortfolioTabs
        isWebDevTab={isWebDevTab}
        setIsWebDevTab={setIsWebDevTab}
      />
      <Box sx={isWebDevTab ? {} : hiddenSx}>
        <DevWork />
      </Box>
      <Box sx={!isWebDevTab ? {} : hiddenSx}>
        <AudioWork />
      </Box>
    </LayoutWrapper>
  );
};

export default Portfolio;
