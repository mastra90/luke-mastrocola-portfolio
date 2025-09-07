import { MusicNote, YouTube, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Grid,
  IconButton,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { AudioCardProps, audioProjects } from "../../data/AudioProjectsData";
import { FlexBox, PortfolioCardLinks, SubHeading } from "../../helpers/Wrappers";
import { portfolioCardSx, portfolioMediaSx } from "../../helpers/Styles";

const AudioCard = ({ project }: { project: AudioCardProps }) => {
  const theme = useTheme();
  const { green } = theme.palette;
  const { portfolioCardBg } = theme.palette;
  const { portfolioCardBgHover } = theme.palette;

  const getYouTubeId = (url: string): string => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
      return u.searchParams.get("v") || "";
    } catch {
      return "";
    }
  };

  const buttonClass = project.links.platform === "youtube" ? "watch-btn" : "listen-btn";

  return (
    <Card
      variant="outlined"
      onClick={() => window.open(project.links.url, "_blank")}
      sx={{
        ...portfolioCardSx(portfolioCardBg, portfolioCardBgHover),
        "&:hover": {
          "& .card-icon": { color: green },
          "& .card-text": { color: green },
          "& .card-chips": { color: green },
          "& .card-arrow": { transform: "translate(1.5px, -1.5px)" },
        },
      }}
    >
      <Box sx={{ ...portfolioMediaSx, position: "relative" }}>
        <Box
          className="card-images"
          component="iframe"
          title={project.title}
          src={
            project.links.platform === "youtube"
              ? `https://www.youtube-nocookie.com/embed/${getYouTubeId(project.links.url!)}?rel=0`
              : `https://w.soundcloud.com/player/?url=
                ${encodeURIComponent(project.links.url!)}
                &visual=true&show_teaser=false&hide_related=true&auto_play=false&show_bpm=false&show_genre=false&sharing=false&liking=false`
          }
          allow="encrypted-media;"
          allowFullScreen
          loading="lazy"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            transition: "all 0.3s ease-in-out",
          }}
        />
      </Box>

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          transition: "all 0.1s ease-in-out",
          "&:last-child": {
            p: 0,
          },
        }}
      >
        <CardHeader
          sx={{ p: 0 }}
          title={
            <FlexBox gap={1}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <SubHeading fontSize={16} title={project.title} />
                <Typography>{project.year}</Typography>
              </Box>
              <Typography variant="body2"> {project.subheader} </Typography>
              <Stack direction="row" spacing={1} sx={{ ml: -1, mb: "auto" }}>
                {project.chips.map((c) => (
                  <Chip key={c} label={c} size="small" variant="outlined" className="card-chips" />
                ))}
              </Stack>
            </FlexBox>
          }
        />
        <Box sx={{ mt: "auto" }}>
          <PortfolioCardLinks
            theme={theme}
            buttons={{
              icon:
                project.links.platform === "youtube" ? (
                  <YouTube className="card-icon" />
                ) : (
                  <MusicNote className="card-icon" />
                ),
              label:
                project.links.platform === "soundcloud"
                  ? "Listen on SoundCloud"
                  : "Watch on youtube",
              link: project.links.url,
              className: buttonClass,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

type ShowMoreButtonProps = {
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  theme: Theme;
};

const ShowMoreButton = ({ open, setOpen, theme }: ShowMoreButtonProps) => {
  const text = theme.palette.text;
  const bgcolor = theme.palette.background;
  return (
    <Box sx={{ display: "flex", mx: "auto", mt: 2 }}>
      <IconButton
        onClick={() => setOpen((v) => !v)}
        sx={{
          p: 2,
          bgcolor: bgcolor.paper,
          borderRadius: 3,
          "&:hover": { bgcolor: bgcolor.secondary },
        }}
        aria-label={open ? "Show less" : "Show more"}
      >
        {open ? (
          <KeyboardArrowUp sx={{ fontSize: 32 }} />
        ) : (
          <KeyboardArrowDown sx={{ fontSize: 32 }} />
        )}
        <Typography
          sx={{ display: "flex", justifyContent: "center", color: text.primary, minWidth: 100 }}
        >
          {!open ? "Show more" : "Show less"}
        </Typography>
      </IconButton>
    </Box>
  );
};

const AudioWork = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const musicSection = audioProjects.find((p) => p.header === "Featured");
  const otherSections = audioProjects.filter((p) => p.header !== "Featured");

  return (
    <Grid container spacing={2} sx={{ mx: "auto" }}>
      {musicSection?.items.map((project, index) => (
        <Grid size={{ xs: 12, sm: 6, xl: 3 }} key={`music-${index}`}>
          <AudioCard project={project} />
        </Grid>
      ))}

      <ShowMoreButton open={open} setOpen={setOpen} theme={theme} />
      <Collapse in={open} timeout="auto" sx={{ width: "100%" }}>
        {otherSections.map((section) => (
          <FlexBox sx={{ mt: 8 }}>
            <SubHeading fontSize={16} title={section.header} icon={section.icon} />
            <Grid container spacing={2} key={section.header}>
              {section.items.map((project, index) => (
                <Grid size={{ xs: 12, sm: 6, xl: 3 }} key={`${section.header}-${index}`}>
                  <AudioCard project={project} />
                </Grid>
              ))}
            </Grid>
          </FlexBox>
        ))}
      </Collapse>
    </Grid>
  );
};

export default AudioWork;
