import { Typography, useTheme } from "@mui/material";
import { FlexBox, SocialLinks } from "../helpers/Wrappers";

const Footer = () => {
  const theme = useTheme();
  const bgcolor = theme.palette.background;

  return (
    <FlexBox py={8} bgcolor={bgcolor.paper} alignItems="center">
      <Typography variant="h6">Luke Mastrocola</Typography>
      <Typography variant="body2">Web developer | Audio producer</Typography>
      <SocialLinks sx={{ mt: 1 }} />
      <Typography sx={{ py: 4 }} variant="body2">
        © 2025 Luke Mastrocola. All rights reserved.
      </Typography>
    </FlexBox>
  );
};

export default Footer;
