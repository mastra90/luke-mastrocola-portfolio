import {
  MusicNote,
  YouTube,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
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
import { audioProjects } from "../../data/AudioProjectsData";
import { PortfolioCardLinks } from "../../helpers/Wrappers";
import {
  portfolioCardHoverSx,
  portfolioCardSx,
  mediaBoxSx,
} from "../../helpers/Styles";

export type AudioCardProps = {
  year: number;
  title: string;
  subheader: string;
  chips: string[];
  links: {
    platform: "soundcloud" | "youtube";
    url?: string;
  };
};

const AudioCard = ({ project }: { project: AudioCardProps }) => {
  const theme = useTheme();

  const getYouTubeId = (url: string): string => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
      return u.searchParams.get("v") || "";
    } catch {
      return "";
    }
  };

  return (
    <Card
      variant="outlined"
      onClick={() => {
        if (project.links.url) {
          window.open(project.links.url, "_blank");
        }
      }}
      sx={{
        ...portfolioCardSx(theme),
        ...portfolioCardHoverSx("listen-btn", "watch-btn", theme),
        "&:hover": {
          "& .watch-btn .card-icon, & .listen-btn .card-icon": {
            color: theme.palette.techChip.background,
          },
          "& .watch-btn .card-text, & .listen-btn .card-text": {
            color: theme.palette.techChip.background,
            "&::after": { width: "100%" },
          },
        },
      }}
    >
      <Box sx={{ ...mediaBoxSx, position: "relative" }}>
        <Box
          className="card-images"
          component="iframe"
          title={project.title}
          src={
            project.links.platform === "youtube"
              ? `https://www.youtube-nocookie.com/embed/${getYouTubeId(
                  project.links.url!
                )}?rel=0`
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
        sx={{ p: 0, flex: 1, display: "flex", flexDirection: "column" }}
      >
        <CardHeader
          sx={{ p: 0 }}
          title={
            <Box>
              <Typography sx={{ fontWeight: 500 }}>{project.year}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                {project.title}
              </Typography>
              <Typography
                sx={{ fontWeight: 400, color: theme.palette.text.secondary }}
              >
                {project.subheader}
              </Typography>
            </Box>
          }
        />

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 2, mb: "auto", flexWrap: "wrap" }}
        >
          {project.chips.map((c) => (
            <Chip
              key={c}
              label={c}
              size="small"
              variant="outlined"
              sx={{
                borderColor: theme.palette.border.primary,
                color: theme.palette.text.secondary,
              }}
            />
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
              className:
                project.links.platform === "youtube"
                  ? "watch-btn"
                  : "listen-btn",
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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 1,
        mb: 3,
        mx: { sm: 0, md: 0, lg: 0 },
      }}
    >
      <IconButton
        onClick={() => setOpen((v) => !v)}
        disableRipple
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          width: {
            xs: "100%",
            xl: 600,
          },
          borderRadius: 3,
          "&:hover": { bgcolor: theme.palette.button.hover },
        }}
        aria-label={open ? "Show less" : "Show more"}
      >
        {open ? (
          <KeyboardArrowUp sx={{ fontSize: 36 }} />
        ) : (
          <KeyboardArrowDown sx={{ fontSize: 36 }} />
        )}
        <Typography
          sx={{
            alignContent: "center",
            p: 2,
            color: theme.palette.text.primary,
          }}
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
    <>
      {/* Feature music at top */}
      {musicSection && (
        <Grid container spacing={2} sx={{ maxWidth: 1500, mx: "auto", mt: 8 }}>
          <Box sx={{ mt: -6, width: "100%" }}>
            <Grid container spacing={2} sx={{ maxWidth: 1500, mx: "auto" }}>
              <Grid size={{ sm: 12, md: 12 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {musicSection.header}
                </Typography>
              </Grid>

              {musicSection.items.map((p, i) => (
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    xl: 3,
                  }}
                  key={`music-${i}`}
                >
                  <AudioCard project={p} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      )}

      <ShowMoreButton open={open} setOpen={setOpen} theme={theme} />
      <Collapse in={open} timeout="auto">
        {otherSections.map((section) => (
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: 1500, mx: "auto" }}
            key={section.header}
          >
            <Grid size={{ sm: 12, md: 12 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {section.header}
              </Typography>
            </Grid>

            {section.items.map((p, i) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  xl: 3,
                }}
                key={`${section.header}-${i}`}
              >
                <AudioCard project={p} />
              </Grid>
            ))}
          </Grid>
        ))}
        <ShowMoreButton open={open} setOpen={setOpen} theme={theme} />
      </Collapse>
    </>
  );
};

export default AudioWork;
