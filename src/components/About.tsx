import { Box, Card, Grid, Typography } from "@mui/material";
import { StickyNote2Outlined as BioIcon } from "@mui/icons-material";
import { Heading, SubHeading, LayoutWrapper } from "../helpers/Wrappers";
import { aboutCardsData } from "../data/AboutCardsData";

const About = () => {
  return (
    <LayoutWrapper variant="paper" maxWidthXl={1200}>
      <Heading title="About me" />
      <SubHeading title="Bio" icon={<BioIcon />} />
      <Typography variant="body2" fontSize={16}>
        I'm a full stack web developer and audio producer who loves problem
        solving and being creative. My passion for creativity started early in
        life through music, and my love for analytical thinking and attention to
        detail translated seamlessly as I changed careers into full stack web
        development.
      </Typography>
      <Grid container spacing={2}>
        {aboutCardsData.map((card, index) => (
          <Grid key={index} size={card.gridSize}>
            <Card
              sx={{
                display: "flex",
                p: 2,
                gap: 2,
                height: "100%",
                flexDirection: "column",
              }}
            >
              <SubHeading title={card.title} fontSize={18} icon={card.icon} />
              {card.items.map((item, itemIndex) => (
                <Box key={itemIndex}>
                  {"title" in item && (
                    <SubHeading title={item.title} fontSize={16} />
                  )}
                  {"title" in item ? (
                    <Typography variant="body2">
                      {item.subtitle} <br />
                      {item.period}
                    </Typography>
                  ) : (
                    <Box>
                      <Typography>{item.skill}</Typography>
                      <Typography variant="body2">{item.duration}</Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Card>
          </Grid>
        ))}
      </Grid>
    </LayoutWrapper>
  );
};

export default About;
