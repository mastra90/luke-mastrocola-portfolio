import { useTheme } from "@mui/material";
import { FlexBox, SocialLinks, SubHeading } from "../helpers/Wrappers";

const Footer = () => {
  const theme = useTheme();
  const bgcolor = theme.palette.background;

  return (
    <FlexBox py={8} bgcolor={bgcolor.paper} alignItems="center">
      <SubHeading title="Luke Mastrocola" fontWeight={600} />
      <SubHeading title="Web developer | Audio producer" variant="body2" fontSize={14} />
      <SocialLinks sx={{ mt: 1 }} />
      <SubHeading
        title="© 2025 Luke Mastrocola. All rights reserved."
        variant="body2"
        fontSize={14}
        sx={{ py: 4 }}
      />
    </FlexBox>
  );
};

export default Footer;
