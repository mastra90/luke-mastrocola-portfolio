import { SxProps, Theme, useTheme } from "@mui/material/styles";
import { ArrowOutward } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  Container,
  IconButton,
  Link,
  SvgIconProps,
  Typography,
} from "@mui/material";
import { cloneElement, ReactElement, ReactNode } from "react";
import { useResponsive } from "../hooks/useResponsive";

type FlexBoxProps = BoxProps & {
  children: ReactNode;
  bgcolor?: string;
  spacious?: boolean;
  rowOnDesktop?: boolean;
  row?: boolean;
  flexDirection?: "column" | "row";
  gap?: number;
  sx?: SxProps<Theme>;
};

export const FlexBox = ({
  children,
  bgcolor = "transparent",
  rowOnDesktop,
  spacious,
  row,
  flexDirection = "column",
  gap = spacious ? 4 : 2,
  sx,
  ...boxProps
}: FlexBoxProps) => {
  const isMobile = useResponsive();
  const FlexBoxSx = {
    display: "flex",
    flexDirection: rowOnDesktop
      ? isMobile
        ? "column"
        : "row"
      : row
      ? "row"
      : flexDirection,
    gap,
    bgcolor: bgcolor,
    ...sx,
  };

  return (
    <Box sx={FlexBoxSx} {...boxProps}>
      {children}
    </Box>
  );
};

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
  const theme = useTheme();
  const bgcolor = theme.palette.background;
  const isPaper = variant === "paper";
  const containerSx = {
    maxWidth: { xl: maxWidthXl, sm: maxWidthSm },
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };
  const boxSx = {
    py: isPaper ? { xs: 4, sm: 8 } : 0,
    bgcolor: () => (isPaper ? bgcolor.paper : "transparent"),
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
  const { green } = theme.palette;
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
      backgroundColor: green,
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
  const { green } = theme.palette;
  const iconSx = {
    fontSize: 20,
    color: green,
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
}: {
  buttons: PortfolioCardLinksProps | PortfolioCardLinksProps[];
  theme: Theme;
}) => {
  const theme = useTheme();
  const buttonArray = Array.isArray(buttons) ? buttons : [buttons];
  const { green } = theme.palette;
  const text = theme.palette.text;
  const portfolioCardLinksSx = () => ({
    fontSize: 14,
    fontWeight: 500,
    ml: 1,
    color: text.primary,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -6,
      left: 0,
      width: 0,
      height: "1px",
      color: green,
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
                <Typography className="card-text" sx={portfolioCardLinksSx()}>
                  {button.label}
                </Typography>
                <ArrowOutward
                  className="card-arrow"
                  sx={{
                    ml: 1,
                    transition: "transform 0.1s ease-in",
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
