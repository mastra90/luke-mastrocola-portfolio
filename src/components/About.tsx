import { Box, Container, Typography, useTheme } from "@mui/material";
import { StickyNote2Outlined as BioIcon } from "@mui/icons-material";
import { Heading, SubHeading } from "./Helpers";

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 4, sm: 8 }, bgcolor: theme.palette.background.paper }}>
      <Container sx={{ maxWidth: { xl: "xl", md: "md" } }}>
        <Heading title="About me" />
        <SubHeading title="Bio" icon={<BioIcon />} />
        <Typography color={theme.palette.text.secondary}>
          I'm a full stack web developer and audio producer who loves problem
          solving and being creative. My passion for creativity started early in
          life through music, and my love for analytical thinking and attention
          to detail translated seamlessly as I changed careers into full stack
          web development.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
