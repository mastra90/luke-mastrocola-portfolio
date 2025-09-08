import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { FlexBox } from "../helpers/Wrappers";
import { useResponsive } from "../hooks/useResponsive";
import { Link } from "react-scroll";
import { Bedtime, WbSunny } from "@mui/icons-material";

type FooterProps = {
  toggleTheme: () => void;
  isDark: boolean;
};

const Footer = ({ toggleTheme, isDark }: FooterProps) => {
  const theme = useTheme();
  const { buttonHover, yellow } = theme.palette;
  const bgcolor = theme.palette.background;
  const text = theme.palette.text;
  const isMobile = useResponsive();

  const iconSx = {
    position: "absolute",
    fontSize: 16,
  };

  return (
    <FlexBox
      pb={12}
      pt={isMobile ? 24 : 20}
      mt={isMobile ? -24 : -40}
      bgcolor={bgcolor.paper}
      alignItems="center"
    >
      <FlexBox row>
        <Typography variant="h6">Luke Mastrocola</Typography>
        <Tooltip disableInteractive title={`Change to ${isDark ? "light" : "dark"} mode`}>
          <Box
            sx={{
              width: 56,
              height: 32,
              backgroundColor: isDark ? "#464c52" : "#dbd9d9",
              borderRadius: 4,
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                "& .bedtime-icon": {
                  opacity: isDark ? 0 : 1,
                  color: yellow,
                },
                "& .sunny-icon": {
                  opacity: isDark ? 1 : 0,
                  color: bgcolor.default,
                },
                "& .MuiIconButton-root": {
                  backgroundColor: isDark ? text.primary : text.primary,
                },
              },
            }}
            onClick={toggleTheme}
          >
            <IconButton
              sx={{
                top: -2,
                left: isDark ? -2 : 22,
                width: 36,
                height: 36,
                backgroundColor: isDark ? "#171f26" : buttonHover,
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              <Bedtime
                className="bedtime-icon"
                sx={{
                  ...iconSx,
                  opacity: isDark ? 1 : 0,
                  color: isDark ? yellow : text.primary,
                }}
              />
              <WbSunny
                className="sunny-icon"
                sx={{
                  ...iconSx,
                  opacity: isDark ? 0 : 1,
                  color: isDark ? yellow : text.primary,
                }}
              />
            </IconButton>
          </Box>
        </Tooltip>
      </FlexBox>
      <Typography variant="body2" fontSize={16}>
        Web developer | Audio producer
      </Typography>

      <Typography sx={{ pb: 4 }} variant="body2" fontSize={16}>
        © 2025 Luke Mastrocola. All rights reserved.
      </Typography>

      <FlexBox row gap={isMobile ? 2 : 4} sx={{ display: "flex", alignItems: "center" }}>
        <Link to="home" smooth={true} duration={500} offset={-32}>
          <Typography fontWeight={500} sx={{ cursor: "pointer" }}>
            Home
          </Typography>
        </Link>
        <Link to="about" smooth={true} duration={500} offset={isMobile ? -36 : -48}>
          <Typography fontWeight={500} sx={{ cursor: "pointer" }}>
            About me
          </Typography>
        </Link>
        <Link to="portfolio" smooth={true} duration={500} offset={isMobile ? -36 : -48}>
          <Typography fontWeight={500} sx={{ cursor: "pointer" }}>
            View projects
          </Typography>
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

export default Footer;
