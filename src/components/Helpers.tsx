import { Theme } from "@mui/material/styles";

export const actionLinkTextStyles = (theme: Theme) => ({
  fontSize: 14,
  fontWeight: 500,
  ml: 1,
  color: theme.palette.text.primary,
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -6,
    left: 0,
    width: 0,
    height: "1px",
    backgroundColor: theme.palette.techChip.background,
    transition: "width 0.3s ease-in-out",
  },
});

export const gridContainerSx = {
  width: 1500,
  m: "auto",
};

export const mediaBoxSx = {
  mb: 3,
  height: 190,
  borderRadius: 2,
  overflow: "hidden",
};

export const cardBaseStyles = (theme: Theme) => ({
  width: 340,
  border: "none",
  bgcolor: theme.palette.background.default,
  height: 440,
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
  marginBottom: 8,
});

export const makeCardHoverStyles = (
  defaultBtnClass: string,
  exceptionClass: string,
  theme: Theme
) => ({
  [`&:hover:not(:has(.${exceptionClass}:hover))`]: {
    [`& .${defaultBtnClass} .card-icon`]: {
      color: theme.palette.techChip.background,
    },
    [`& .${defaultBtnClass} .card-text`]: {
      color: theme.palette.techChip.background,
      "&::after": { width: "100%" },
    },
    [`& .${defaultBtnClass} .card-arrow`]: {
      transform: "translate(1.5px, -1.5px)",
    },
  },
  "&:hover": { "& .card-images": { transform: "scale(1.02)" } },
  [`& .${exceptionClass}:hover .card-text`]: {
    color: theme.palette.techChip.background,
    "&::after": { width: "100%" },
  },
});

export const getYouTubeId = (url: string): string => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    return u.searchParams.get("v") || "";
  } catch {
    return "";
  }
};
