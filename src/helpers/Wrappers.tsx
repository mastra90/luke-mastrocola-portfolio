import { Theme, useTheme } from "@mui/material/styles";
import { ArrowOutward } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Link,
  SvgIconProps,
  Typography,
} from "@mui/material";
import { cloneElement, ReactElement, ReactNode } from "react";

type LayoutWrapperProps = {
  children: ReactNode;
  variant?: "default" | "paper";
};

export const LayoutWrapper = ({
  children,
  variant = "default",
}: LayoutWrapperProps) => {
  const isPaper = variant === "paper";
  const containerSx = { maxWidth: { xl: 1537, sm: 800 } };
  const boxSx = {
    py: isPaper ? { xs: 4, sm: 8 } : 0,
    bgcolor: (theme: Theme) =>
      isPaper ? theme.palette.background.paper : "transparent",
  };

  return (
    <Box sx={boxSx}>
      <Container sx={containerSx}>{children}</Container>
    </Box>
  );
};

type HeadingProps = {
  title: string;
};

export const Heading = ({ title }: HeadingProps) => {
  const theme = useTheme();
  const headerStyles = {
    mb: 4,
    typography: "h5",
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

type PortfolioCardLinksProps = {
  icon: ReactElement;
  label: string;
  link?: string;
  className: string;
};

export const PortfolioCardLinks = ({
  buttons,
  theme,
}: {
  buttons: PortfolioCardLinksProps | PortfolioCardLinksProps[];
  theme: Theme;
}) => {
  const buttonArray = Array.isArray(buttons) ? buttons : [buttons];

  const portfolioCardLinksSx = (theme: Theme) => ({
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
                  sx={portfolioCardLinksSx(theme)}
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
