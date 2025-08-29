import { Theme, useTheme } from "@mui/material/styles";
import { ArrowOutward } from "@mui/icons-material";
import { Box, IconButton, Link, SvgIconProps, Typography } from "@mui/material";
import { cloneElement, ReactElement } from "react";

type ActionButtonConfig = {
  icon: ReactElement;
  label: string;
  link?: string;
  className: string;
};

export const ActionLink = ({
  buttons,
  theme,
}: {
  buttons: ActionButtonConfig | ActionButtonConfig[];
  theme: any;
}) => {
  const buttonArray = Array.isArray(buttons) ? buttons : [buttons];

  return (
    <>
      {buttonArray.map(
        (button, key) =>
          button.link && (
            <Link
              key={key}
              target="_blank"
              rel="noreferrer"
              href={button.link}
              onClick={(e) => e.stopPropagation()}
            >
              <IconButton className={button.className} sx={{ p: 0 }}>
                {button.icon}
                <Typography
                  className="card-text"
                  sx={actionLinkTextStyles(theme)}
                >
                  {button.label}
                </Typography>
                <ArrowOutward
                  className="card-arrow"
                  sx={{
                    ml: 1,
                    transition: "transform 0.1s ease-in",
                    color: theme.palette.gitHub.button,
                    fontSize: 20,
                  }}
                />
              </IconButton>
            </Link>
          )
      )}
    </>
  );
};

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

type HeadingProps = {
  title: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  sx?: object;
};

export const Heading = ({ title, variant = "h5" }: HeadingProps) => {
  const theme = useTheme();
  const headerStyles = {
    mb: 4,
    typography: variant,
    fontWeight: 600,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -4,
      left: 1,
      width: 48,
      height: 3,
      backgroundColor: theme.palette.techChip.background,
      borderRadius: 2,
    },
  };
  return <Typography sx={headerStyles}>{title}</Typography>;
};

type SubHeadingProps = {
  icon: ReactElement<SvgIconProps>;
  title: string;
  sx?: object;
};

export const SubHeading = ({ title, icon }: SubHeadingProps) => {
  const theme = useTheme();

  const iconSx = {
    fontSize: 20,
    color: theme.palette.techChip.background,
    alignContent: "center",
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        gap: 2,
        mb: 1,
      }}
    >
      {cloneElement(icon, { sx: iconSx })}
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export const mediaBoxSx = {
  mb: 3,
  height: 190,
  borderRadius: 2,
  overflow: "hidden",
};

export const cardBaseStyles = (theme: Theme) => ({
  width: "100%",
  border: "none",
  bgcolor: theme.palette.background.default,
  height: 440,
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
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
