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
  maxWidthXl?: number;
  maxWidthSm?: number;
  children: ReactNode;
  variant?: "default" | "paper";
};

export const LayoutWrapper = ({
  maxWidthXl = 1537,
  maxWidthSm = 1000,
  children,
  variant = "default",
}: LayoutWrapperProps) => {
  const isPaper = variant === "paper";
  const containerSx = {
    maxWidth: { xl: maxWidthXl, sm: maxWidthSm },
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };
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
    mb: 1,
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
  icon?: ReactElement<SvgIconProps>;
  title: string;
  fontSize?: 16 | 18 | 20;
};

export const SubHeading = ({ title, icon, fontSize = 20 }: SubHeadingProps) => {
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
        gap: 1,
      }}
    >
      {icon && cloneElement(icon, { sx: iconSx })}
      <Typography
        sx={{
          fontSize: fontSize,
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
