import { Typography, useTheme } from "@mui/material";
import { StickyNote2Outlined as BioIcon } from "@mui/icons-material";
import { Heading, SubHeading, LayoutWrapper } from "../helpers/Wrappers";

const About = () => {
  const theme = useTheme();

  return (
    <LayoutWrapper variant="paper">
      <Heading title="About me" />
      <SubHeading title="Bio" icon={<BioIcon />} />
      <Typography color={theme.palette.text.secondary}>
        I'm a full stack web developer and audio producer who loves problem
        solving and being creative. My passion for creativity started early in
        life through music, and my love for analytical thinking and attention to
        detail translated seamlessly as I changed careers into full stack web
        development.
      </Typography>
    </LayoutWrapper>
  );
};

export default About;
