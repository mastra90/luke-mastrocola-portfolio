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
  Typography,
  useTheme,
} from "@mui/material";
import {
  gridContainerSx,
  mediaBoxSx,
  cardBaseStyles,
  makeCardHoverStyles,
  getYouTubeId,
  ActionLink,
} from "../Helpers";
import { useState } from "react";
import { AudioProjectItems, audioProjects } from "../../Data/AudioProjectsData";

const AudioCard = ({ project }: { project: AudioProjectItems }) => {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      onClick={() => {
        if (project.links.url) {
          window.open(project.links.url, "_blank");
        }
      }}
      sx={{
        ...cardBaseStyles(theme),
        ...makeCardHoverStyles("listen-btn", "watch-btn", theme),
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
              ? `https://www.youtube.com/embed/${getYouTubeId(
                  project.links.url!
                )}?rel=0`
              : `https://w.soundcloud.com/player/?url=
                ${encodeURIComponent(project.links.url!)}
                &visual=true`
          }
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
              <Typography variant="h5" sx={{ fontWeight: 400 }}>
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
                borderColor: theme.palette.border.secondary,
                color: theme.palette.text.secondary,
              }}
            />
          ))}
        </Stack>

        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          <ActionLink
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

const AudioWork = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const musicSection = audioProjects.find((p) => p.header === "Music");
  const otherSections = audioProjects.filter((p) => p.header !== "Music");

  return (
    <>
      {/* Feature music at top */}
      {musicSection && (
        <Grid container sx={gridContainerSx}>
          <Box sx={{ mt: -6, height: 480 }}>
            <Grid container sx={gridContainerSx}>
              <Grid size={{ sm: 12, md: 12 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {musicSection.header}
                </Typography>
              </Grid>

              {musicSection.items.map((p, i) => (
                <Grid size={{ sm: 12, md: 3 }} key={`music-${i}`}>
                  <AudioCard project={p} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      )}

      {/* Feature music at top */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 3 }}>
        <IconButton
          onClick={() => setOpen((v) => !v)}
          sx={{
            border: `1px solid ${theme.palette.border.secondary}`,
            borderRadius: "50%",
            bgcolor: theme.palette.background.paper,
            "&:hover": { bgcolor: theme.palette.button.hover },
            fontSize: 50,
          }}
          aria-label={open ? "Show less" : "Show more"}
        >
          {open ? (
            <KeyboardArrowUp sx={{ fontSize: 36 }} />
          ) : (
            <KeyboardArrowDown sx={{ fontSize: 36 }} />
          )}
        </IconButton>
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {otherSections.map((section) => (
          <Grid container sx={gridContainerSx}>
            <Grid size={{ sm: 12, md: 12 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {section.header}
              </Typography>
            </Grid>

            {section.items.map((p, i) => (
              <Grid size={{ sm: 12, md: 3 }} key={`${section.header}-${i}`}>
                <AudioCard project={p} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Collapse>
    </>
  );
};

export default AudioWork;
