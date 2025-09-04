import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import { StickyNote2Outlined as BioIcon } from "@mui/icons-material";
import { Heading, SubHeading, LayoutWrapper, FlexBox } from "../helpers/Wrappers";
import { aboutCardsData } from "../data/AboutCardsData";

const About = () => {
  const theme = useTheme();
  const { border } = theme.palette;

  return (
    <LayoutWrapper variant="paper" maxWidthXl={1200}>
      <FlexBox>
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
              <Card sx={{ p: 2, height: "100%", border: 1, borderColor: border }}>
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
      </FlexBox>
    </LayoutWrapper>
  );
};

export default About;
