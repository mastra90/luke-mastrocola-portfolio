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
  const text = theme.palette.text;

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
        ...portfolioCardSx,
        "&:hover": {
          "& .card-icon": {
            color: green,
          },
          "& .card-text": {
            color: green,
            "&::after": { width: "100%" },
          },
          "& .card-arrow": {
            transform: "translate(1.5px, -1.5px)",
          },
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
            <Box>
              <Typography sx={{ fontWeight: 500 }}>{project.year}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                {project.title}
              </Typography>
              <Typography sx={{ fontWeight: 400, color: text.secondary }}>
                {" "}
                {project.subheader}
              </Typography>
            </Box>
          }
        />

        <Stack direction="row" spacing={1} sx={{ mt: 2, mb: "auto", flexWrap: "wrap" }}>
          {project.chips.map((c) => (
            <Chip key={c} label={c} size="small" variant="outlined" />
          ))}
        </Stack>

        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
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
  const { buttonHover } = theme.palette;
  const text = theme.palette.text;
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 3, mx: "auto" }}>
      <IconButton
        onClick={() => setOpen((v) => !v)}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          width: { xs: "100%", xl: 600 },
          borderRadius: 3,
          "&:hover": { buttonHover },
        }}
        aria-label={open ? "Show less" : "Show more"}
      >
        {open ? (
          <KeyboardArrowUp sx={{ fontSize: 36 }} />
        ) : (
          <KeyboardArrowDown sx={{ fontSize: 36 }} />
        )}
        <Typography sx={{ alignContent: "center", p: 2, color: text.primary }}>
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
          <FlexBox>
            <SubHeading fontSize={16} title={section.header} icon={section.icon} />
            <Grid container spacing={2} key={section.header}>
              {section.items.map((project, index) => (
                <Grid mb={8} size={{ xs: 12, sm: 6, xl: 3 }} key={`${section.header}-${index}`}>
                  <AudioCard project={project} />
                </Grid>
              ))}
            </Grid>
          </FlexBox>
        ))}
        <ShowMoreButton open={open} setOpen={setOpen} theme={theme} />
      </Collapse>
    </Grid>
  );
};

export default AudioWork;
