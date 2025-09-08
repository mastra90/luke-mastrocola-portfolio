import { Typography, useTheme } from "@mui/material";
import { FlexBox, FooterLinks } from "../helpers/Wrappers";
import { useResponsive } from "../hooks/useResponsive";
import ToggleThemeButton from "./ToggleThemeButton";

const Footer = ({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) => {
  const theme = useTheme();
  const bgcolor = theme.palette.background;
  const isMobile = useResponsive();

  return (
    <FlexBox
      pb={12}
      pt={isMobile ? 24 : 20}
      mt={isMobile ? -24 : -40}
      bgcolor={bgcolor.paper}
      alignItems="center"
    >
      <FlexBox row>
        <Typography variant="h6">Luke Mastrocola</Typography>
        <ToggleThemeButton isFooter toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
      </FlexBox>
      <Typography variant="body2" fontSize={16}>
        Web developer | Audio producer
      </Typography>
      <Typography sx={{ pb: 4 }} variant="body2" fontSize={16}>
        © 2025 Luke Mastrocola. All rights reserved.
      </Typography>
      <FooterLinks />
    </FlexBox>
  );
};

export default Footer;
