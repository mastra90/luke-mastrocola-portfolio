import { Box, Typography } from "@mui/material";
import DevWork from "./DevWork";
import AudioWork from "./AudioWork";
import { FlexBox, Heading, LayoutWrapper, SubHeading } from "../../helpers/Wrappers";
import PortfolioTabs from "./PortfolioTabs";
import { StarOutline as StarIcon } from "@mui/icons-material";

const Portfolio = ({
  isWebDevTab,
  setIsWebDevTab,
}: {
  isWebDevTab: boolean;
  setIsWebDevTab: (value: boolean) => void;
}) => {
  const hiddenSx = { height: 0, overflow: "hidden", mb: -2 };

  return (
    <LayoutWrapper>
      <FlexBox>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Heading title="Portfolio" />
          <PortfolioTabs isWebDevTab={isWebDevTab} setIsWebDevTab={setIsWebDevTab} />
        </Box>
        <Typography variant="body2" fontSize={16} mb={2}>
          Explore some of my web development and audio production work.
        </Typography>
        <SubHeading title="Featured" icon={<StarIcon />} fontSize={16} />

        <Box sx={isWebDevTab ? {} : hiddenSx}>
          <DevWork />
        </Box>
        <Box sx={!isWebDevTab ? {} : hiddenSx}>
          <AudioWork />
        </Box>
      </FlexBox>
    </LayoutWrapper>
  );
};

export default Portfolio;
