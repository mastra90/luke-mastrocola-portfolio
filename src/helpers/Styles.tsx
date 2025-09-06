export const portfolioMediaSx = {
  mb: 3,
  height: 190,
  borderRadius: 2,
  overflow: "hidden",
};

export const portfolioCardSx = (portfolioCardBg: string, portfolioCardBgHover: string) => ({
  width: "100%",
  height: 440,
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
  bgcolor: portfolioCardBg,
  "&: hover": {
    bgcolor: portfolioCardBgHover,
  },
  p: 2,
});

export const devCardHoverSx = (defaultBtnClass: string, exceptionClass: string, green: string) => ({
  [`&:hover:not(:has(.${exceptionClass}:hover))`]: {
    [`& .${defaultBtnClass} .card-icon`]: {
      color: green,
    },
    [`& .${defaultBtnClass} .card-text`]: {
      color: green,
      "&::after": { width: "100%" },
    },
    [`& .${defaultBtnClass} .card-arrow`]: {
      transform: "translate(1.5px, -1.5px)",
    },
  },
  [`& .${exceptionClass}:hover .card-text`]: {
    color: green,
    "&::after": { width: "100%" },
  },
});
