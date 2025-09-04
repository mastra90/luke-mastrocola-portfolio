export const portfolioMediaSx = {
  mb: 3,
  height: 190,
  borderRadius: 2,
  overflow: "hidden",
};

export const portfolioCardSx = {
  width: "100%",
  border: "none", 
  height: 440,
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
};

export const portfolioCardHoverSx = (
  defaultBtnClass: string,
  exceptionClass: string,
  green: string
) => ({
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
