import { Code, Headphones } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import { FlexBox } from "../../helpers/Wrappers";

type PortfolioTabsProps = {
  isWebDevTab: boolean;
  setIsWebDevTab: (value: boolean) => void;
};

type TabButtonProps = {
  isWebDev: boolean;
  isActive: boolean;
  onClick: () => void;
};

const TabButton = ({ isWebDev, isActive, onClick }: TabButtonProps) => {
  const theme = useTheme();
  const bgcolor = theme.palette.background;
  const text = theme.palette.text;
  const btnHover = theme.palette.buttonHover;
  const Icon = isWebDev ? Code : Headphones;
  const iconColor = isActive ? (isWebDev ? bgcolor.default : bgcolor.secondary) : text.primary;

  return (
    <Button
      disableRipple
      sx={{
        borderRadius: 8,
        bgcolor: isActive ? text.primary : bgcolor.secondary,
        minWidth: { xs: 48, md: 56 },
        cursor: isActive ? "auto" : "pointer",
        "&:hover": { bgcolor: !isActive ? btnHover : text.primary },
      }}
      onClick={onClick}
    >
      <Icon sx={{ fontSize: 24, color: iconColor }} />
    </Button>
  );
};

const PortfolioTabs = ({ isWebDevTab, setIsWebDevTab }: PortfolioTabsProps) => {
  const theme = useTheme();
  const bgcolor = theme.palette.background;

  return (
    <FlexBox row p={1} gap={1} borderRadius={8} bgcolor={bgcolor.secondary}>
      <TabButton isWebDev={true} isActive={isWebDevTab} onClick={() => setIsWebDevTab(true)} />
      <TabButton isWebDev={false} isActive={!isWebDevTab} onClick={() => setIsWebDevTab(false)} />
    </FlexBox>
  );
};

export default PortfolioTabs;
