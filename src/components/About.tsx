import { Box, Button, Card, Grid, Typography, useTheme } from "@mui/material";
import {
  StickyNote2Outlined as BioIcon,
  TipsAndUpdatesOutlined as ProgressIcon,
} from "@mui/icons-material";
import { Heading, SubHeading, LayoutWrapper, FlexBox } from "../helpers/Wrappers";
import { aboutCardsData } from "../data/AboutCardsData";

const About = ({ isDark, toLegacySite }: { isDark: boolean; toLegacySite?: () => void }) => {
  const theme = useTheme();
  const global = theme.palette.global;
  const bgcolor = theme.palette.background;
  const button = theme.palette.button;
  const gradient = theme.palette.gradient;

  console.log("isDark:", isDark);

  return (
    <LayoutWrapper
      variant="paper"
      maxWidthXl={1200}
      sx={{
        background: isDark
          ? `
          radial-gradient(ellipse at center, 
            ${gradient.color1} 0%, 
            ${gradient.color2} 35%, 
            ${gradient.color3} 70%,  
            ${bgcolor.default} 100%
          )
        `
          : bgcolor.paper,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: isDark
            ? `linear-gradient(to bottom, ${bgcolor.default} 0%, transparent 100%)`
            : "none",
          pointerEvents: "none",
          zIndex: 1,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: isDark
            ? `linear-gradient(to top, ${bgcolor.default} 0%, transparent 100%)`
            : "none",
          pointerEvents: "none",
          zIndex: 1,
        },
      }}
    >
      <FlexBox id="about" sx={{ position: "relative", zIndex: 2 }}>
        <Heading title="About me" />
        <SubHeading title="Bio" icon={<BioIcon />} />
        <Typography variant="body2" fontSize={16}>
          I'm a full stack web developer and audio producer who loves problem solving and being
          creative. My passion for creativity started early in life through music, and my love for
          analytical thinking and attention to detail translated seamlessly as I changed careers
          into full stack web development.
        </Typography>
        <Grid container spacing={2}>
          {aboutCardsData.map((card, index) => (
            <Grid key={index} size={card.gridSize}>
              <Card sx={{ p: 2, height: "100%", border: 1, borderColor: global.border }}>
                <FlexBox>
                  <SubHeading title={card.title} fontSize={18} icon={card.icon} />
                  {card.items.map((item, itemIndex) => (
                    <Box key={itemIndex}>
                      {"title" in item ? (
                        <>
                          <SubHeading title={item.title} fontSize={16} />
                          <Typography variant="body2">
                            {item.subtitle} <br />
                            {item.period}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography>{item.skill}</Typography>
                          <Typography variant="body2">{item.duration}</Typography>
                        </>
                      )}
                    </Box>
                  ))}
                </FlexBox>
              </Card>
            </Grid>
          ))}
        </Grid>
        <FlexBox
          textAlign={"center"}
          sx={{
            p: 4,
            m: "auto",
            width: "100%",
            fontSize: 48,
            borderRadius: 2,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            border: `1px solid ${global.border}`,
          }}
        >
          🚀
          <SubHeading title="Want to See Where I Started?" />
          <Typography variant="body2">
            Built when I was still figuring out what HTML even meant, it's a wild ride compared to
            where I am now.
          </Typography>
          <Button
            onClick={toLegacySite}
            variant="outlined"
            sx={{
              display: "flex",
              gap: 2,
              py: 2,
              mt: 2,
              border: 0,
              color: "#f1f2f4",
              background: `linear-gradient(135deg, ${button.gradient.color1} 0%, ${button.gradient.color2} 100%)`,
              "&:hover": {
                background: `linear-gradient(135deg, ${button.gradient.color3} 0%, ${button.gradient.color4} 100%)`,
              },
            }}
          >
            <ProgressIcon sx={{ color: "#f1f2f4" }} /> Explore my very first website!
          </Button>
          <Typography variant="body2" fontSize={12}>
            Fair warning: it's quite the throwback. 😅
          </Typography>
        </FlexBox>
      </FlexBox>
    </LayoutWrapper>
  );
};

export default About;
