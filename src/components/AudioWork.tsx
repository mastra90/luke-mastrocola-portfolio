import { ArrowOutward, MusicNote, YouTube } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import {
  actionLinkTextStyles,
  gridContainerSx,
  mediaBoxSx,
  cardBaseStyles,
  makeCardHoverStyles,
  getYouTubeId,
} from "./Helpers";

type Platform = "soundcloud" | "youtube";
type AudioProject = {
  year: number;
  title: string;
  description: string;
  platform: Platform;
  url: string;
};

const audioProjects: AudioProject[] = [
  {
    year: 2024,
    title: "Dire, Dire Docks (Acoustic Cover)",
    description:
      "A warm acoustic rendition focusing on intimate guitar layers and gentle transient control.",
    platform: "soundcloud",
    url: "https://soundcloud.com/luke-mastrocola/dire-dire-docks-acoustic-cover?si=127bff285fa04c5dbe020e5433ea0bf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    year: 2024,
    title: "Aglow",
    description:
      "Ambient/electronic textures with slow-bloom pads and a restrained low-end for late-night listening.",
    platform: "soundcloud",
    url: "https://soundcloud.com/luke-mastrocola/aglow?si=d986927fa81d4c1186a0a7cf7aa53639&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    year: 2024,
    title: "Peaks",
    description:
      "Cinematic build with wide stereo imaging and stepped dynamics to emphasize contrast.",
    platform: "soundcloud",
    url: "https://soundcloud.com/luke-mastrocola/peaks?si=455b5091b36543de908f56f84ec2d08b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    year: 2024,
    title: "Trails",
    description:
      "Melodic downtempo; emphasis on tape-style saturation and airy top end.",
    platform: "soundcloud",
    url: "https://soundcloud.com/luke-mastrocola/trails?si=aa285d2b09f84811afc26ba4fd8acc91&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    year: 2023,
    title: "YouTube Feature (segment)",
    description:
      "Example of broadcast-style dialog polish. Jumps straight to the featured timecode.",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=M3Gu1ER1e2k&t=408s",
  },
];

const ActionLink = ({ url, platform }: { url: string; platform: Platform }) => {
  const theme = useTheme();
  const isYT = platform === "youtube";
  const label = isYT ? "Watch on YouTube" : "Listen on SoundCloud";
  const Icon = isYT ? YouTube : MusicNote;

  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={url}
      onClick={(e) => e.stopPropagation()}
    >
      <IconButton className={isYT ? "watch-btn" : "listen-btn"}>
        <Icon className="card-icon" />
        <Typography className="card-text" sx={actionLinkTextStyles(theme)}>
          {label}
        </Typography>
        <ArrowOutward
          className="card-arrow"
          sx={{
            ml: 1,
            transition: "transform 0.1s ease-in",
            color: theme.palette.gitHub.button,
            fontSize: 16,
          }}
        />
      </IconButton>
    </Link>
  );
};

const AudioWork = () => {
  const theme = useTheme();

  return (
    <Grid container sx={gridContainerSx}>
      {audioProjects.map((project, index) => (
        <Grid size={{ sm: 12, md: 3 }} key={index}>
          <Card
            variant="outlined"
            onClick={() => window.open(project.url, "_blank")}
            sx={{
              ...cardBaseStyles(theme),
              ...makeCardHoverStyles("listen-btn", "watch-btn", theme),
            }}
          >
            <Box sx={{ ...mediaBoxSx, position: "relative" }}>
              <Box
                className="card-images"
                component="iframe"
                title={project.title}
                src={
                  project.platform === "youtube"
                    ? `https://www.youtube.com/embed/${getYouTubeId(
                        project.url
                      )}?rel=0`
                    : "https://w.soundcloud.com/player/?url=" +
                      encodeURIComponent(project.url) +
                      "&color=%232eb3ab&inverse=false&auto_play=false&show_user=true&show_teaser=true&visual=true"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
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

            <CardContent>
              <CardHeader
                sx={{ p: 0 }}
                title={
                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>
                      {project.year}
                    </Typography>
                    {project.title}
                  </Box>
                }
              />
              <Typography
                className="description-text"
                variant="body2"
                sx={{ my: 3, color: theme.palette.text.secondary, flex: 1 }}
              >
                {project.description}
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <ActionLink url={project.url} platform={project.platform} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AudioWork;
