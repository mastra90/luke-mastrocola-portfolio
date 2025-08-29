import { Theme } from "@mui/material";

export const mediaBoxSx = {
  mb: 3,
  height: 190,
  borderRadius: 2,
  overflow: "hidden",
};

export const portfolioCardSx = (theme: Theme) => ({
  width: "100%",
  border: "none",
  bgcolor: theme.palette.background.default,
  height: 440,
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
});

export const portfolioCardHoverSx = (
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
  [`& .${exceptionClass}:hover .card-text`]: {
    color: theme.palette.techChip.background,
    "&::after": { width: "100%" },
  },
});
