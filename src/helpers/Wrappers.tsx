import { SxProps, Theme, TypographyVariant, useTheme } from "@mui/material/styles";
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
import { Link as FooterLink } from "react-scroll";

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
    flexDirection: rowOnDesktop ? (isMobile ? "column" : "row") : row ? "row" : flexDirection,
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
  sx?: SxProps<Theme>;
};

export const LayoutWrapper = ({
  sx,
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
  };
  const boxSx = {
    py: isPaper ? { xs: 4, sm: 8 } : 0,
    bgcolor: () => (isPaper ? bgcolor.paper : "transparent"),
    ...sx,
  };

  return (
    <Box sx={boxSx}>
      <Container sx={containerSx}>{children}</Container>
    </Box>
  );
};

type HeadingProps = {
  title: string;
  typography?: string;
};

export const Heading = ({ title, typography = "h5" }: HeadingProps) => {
  const theme = useTheme();
  const global = theme.palette.global;
  const headerStyles = {
    typography: typography,
    fontWeight: 600,
    position: "relative",
    maxHeight: 28,
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -6,
      left: 1,
      width: 48,
      height: 4,
      bgcolor: global.green,
      borderRadius: 2,
    },
  };

  return (
    <Box py={1}>
      <Typography sx={headerStyles}>{title}</Typography>
    </Box>
  );
};

type SubHeadingProps = {
  icon?: ReactElement<SvgIconProps>;
  title: string;
  fontSize?: number;
  fontWeight?: number;
  variant?: TypographyVariant;
  sx?: SxProps<Theme>;
};

export const SubHeading = ({
  title,
  icon,
  fontSize = 20,
  fontWeight = 500,
  variant = "body1",
  sx,
}: SubHeadingProps) => {
  const theme = useTheme();
  const global = theme.palette.global;
  const iconSx = {
    display: "flex",
    fontSize: 20,
    color: global.green,
    alignContent: "center",
    alignItems: "center",
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        ...sx,
      }}
    >
      {icon && cloneElement(icon, { sx: iconSx })}
      <Typography
        variant={variant}
        sx={{
          fontSize: fontSize,
          fontWeight: fontWeight,
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
  const global = theme.palette.global;
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
      color: global.green,
      transition: "width 0.1s ease-in-out",
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

type FooterLinksProps = {
  sx?: SxProps<Theme>;
};
export const FooterLinks = ({ sx }: FooterLinksProps) => {
  const isMobile = useResponsive();

  const footerLinksx = {
    fontWeight: 500,
    cursor: "pointer",
  };
  const footerLinksData = [
    {
      to: "home",
      label: "Home",
    },
    {
      to: "about",
      label: "About me",
    },
    {
      to: "portfolio",
      label: "View projects",
    },
  ];

  return (
    <FlexBox row gap={isMobile ? 2 : 4} sx={{ ...sx, display: "flex", alignItems: "center" }}>
      {footerLinksData.map((footerLink, key) => (
        <FooterLink key={key} to={footerLink.to} smooth={true} duration={500} offset={-32}>
          <Typography sx={footerLinksx}>{footerLink.label}</Typography>
        </FooterLink>
      ))}
    </FlexBox>
  );
};
