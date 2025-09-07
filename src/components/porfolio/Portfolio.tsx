import { Box } from "@mui/material";
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
  const description = "Explore some of my web development and audio production work.";

  return (
    <LayoutWrapper>
      <FlexBox>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Heading title="Portfolio" />
          <PortfolioTabs isWebDevTab={isWebDevTab} setIsWebDevTab={setIsWebDevTab} />
        </Box>
        <SubHeading variant="body2" title={description} fontSize={16} sx={{ mb: 2 }} />
        <SubHeading title="Featured" icon={<StarIcon />} fontSize={16} />
        <Box sx={isWebDevTab ? {} : hiddenSx}> {<DevWork />} </Box>
        <Box sx={!isWebDevTab ? {} : hiddenSx}> {<AudioWork />} </Box>
      </FlexBox>
    </LayoutWrapper>
  );
};

export default Portfolio;
