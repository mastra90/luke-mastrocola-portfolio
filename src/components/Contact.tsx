import { useTheme, Typography, Card, Grid, Box } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import { FlexBox, LayoutWrapper, SocialLinks, SubHeading } from "../helpers/Wrappers";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import {
  Code as WebIcon,
  AudiotrackOutlined as AudioIcon,
  LightbulbOutlined as CreativeIcon,
  PeopleOutlined as TeamIcon,
} from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();
  const global = theme.palette.global;
  const bgcolor = theme.palette.background;
  const isMobile = useResponsive();

  const contactData = [
    {
      icon: <WebIcon sx={{ fontSize: 36, color: global.blue }} />,
      title: "Web development",
      description: "Custom websites, web apps and digital experiences",
    },
    {
      icon: <AudioIcon sx={{ fontSize: 36, color: global.purple }} />,
      title: "Audio production",
      description: "Music production, mixing, mastering and sound design",
    },
    {
      icon: <CreativeIcon sx={{ fontSize: 36, color: global.yellow }} />,
      title: "Creative projects",
      description: "Innovative projects that blend technology and artistry",
    },
    {
      icon: <TeamIcon sx={{ fontSize: 36, color: global.green }} />,
      title: "Team collaboration",
      description: "Join your team as a developer or audio professional",
    },
  ];

  return (
    <LayoutWrapper maxWidthXl={1200}>
      <FlexBox gap={isMobile ? 4 : 8}>
        <FlexBox sx={{ mx: "auto" }}>
          <FlexBox row mx="auto" gap={1}>
            <Typography variant={isMobile ? "h5" : "h3"}>Ready to </Typography>
            <Typography variant={isMobile ? "h5" : "h3"} sx={{ color: global.green }}>
              Create
            </Typography>
            <Typography variant={isMobile ? "h5" : "h3"}>something </Typography>
          </FlexBox>
          <Typography variant={isMobile ? "h5" : "h3"} sx={{ textAlign: "center", mt: -3 }}>
            amazing together?{" "}
          </Typography>
          <Typography variant="body2" fontSize={16} sx={{ maxWidth: 620, textAlign: "center" }}>
            I'm always excited to work on new projects and collaborate with creative minds. Whether
            you have a clear vision or just an idea, let's explore how we can bring it to life.
          </Typography>
        </FlexBox>

        <Grid container spacing={2}>
          {contactData.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, xl: 3 }}>
              <Card sx={{ px: 3, py: 4, height: "100%", border: 1, borderColor: global.border }}>
                <FlexBox sx={{ textAlign: "center" }}>
                  <Box>{card.icon}</Box>
                  <SubHeading sx={{ mx: "auto" }} title={card.title} fontSize={18} />
                  <Typography variant="body2">{card.description}</Typography>
                </FlexBox>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card
          sx={{
            p: 4,
            height: "100%",
            border: 1,
            borderColor: global.border,
            position: "relative",
            bgcolor: bgcolor.default,
            maxWidth: 800,
            m: "auto",
          }}
        >
          <FlexBox>
            <Box sx={{ m: "auto" }}>
              <FavoriteBorderOutlined sx={{ fontSize: 36, color: global.green }} />
            </Box>
            <SubHeading
              title="Have a project in mind?"
              fontSize={isMobile ? 20 : 24}
              fontWeight={600}
              sx={{ m: "auto" }}
            />
            <FlexBox sx={{ textAlign: "center" }}>
              <Typography variant="body2" fontSize={16} sx={{ flex: 4 }}>
                I'd love to hear about your ideas and see how we can collaborate. Connect with me on
                your preferred social platform to start the conversation.
              </Typography>
              <Box sx={{ m: "auto" }}>
                <SocialLinks />
              </Box>
            </FlexBox>
          </FlexBox>
        </Card>
      </FlexBox>
    </LayoutWrapper>
  );
};

export default Contact;
