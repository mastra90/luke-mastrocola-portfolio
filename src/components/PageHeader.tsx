import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, useTheme, Avatar, Typography, Button } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import ToggleThemeButton from "./ToggleThemeButton";
import { FlexBox } from "../helpers/Wrappers";

const PageHeader = ({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) => {
  const theme = useTheme();
  const { green, yellow } = theme.palette;
  const text = theme.palette.text;
  const bgcolor = theme.palette.background;
  const isMobile = useResponsive();

  const socialIconss = {
    display: "flex",
    fontSize: isMobile ? 24 : 28,
    transition: "all 0.1s ease-in-out",
    "&:hover": { color: text.secondary },
  };

  const socials = [
    {
      icon: <GitHub sx={socialIconss} />,
      link: "https://github.com/mastra90?tab=repositories",
    },
    {
      icon: <LinkedIn sx={socialIconss} />,
      link: "https://www.linkedin.com/in/luke-mastrocola-aab00427a/",
    },
    {
      icon: <Twitter sx={socialIconss} />,
      link: "https://x.com/Mastra_90",
    },
    {
      icon: <Instagram sx={socialIconss} />,
      link: "https://www.instagram.com/luke.mastrocola/",
    },
  ];

  return (
    <>
      <ToggleThemeButton toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
      <FlexBox spacious rowOnDesktop mx={"auto"}>
        <Avatar
          src="/Headshot.jpg"
          alt="Luke Mastrocola"
          sx={{
            width: isMobile ? 150 : 240,
            height: isMobile ? 150 : 240,
            border: `3px solid ${yellow}`,
            mx: isMobile ? "auto" : "inherit",
          }}
        />
        <FlexBox textAlign={isMobile ? "center" : "inherit"}>
          <Typography sx={{ color: green, mx: isMobile ? "center" : "none", fontWeight: 500 }}>
            Hello! I'm
          </Typography>

          <FlexBox row mx="auto" gap={1} sx={{ "& > :last-child": { color: green } }}>
            <Typography variant={isMobile ? "h5" : "h3"}>Luke</Typography>
            <Typography variant={isMobile ? "h5" : "h3"}> Mastrocola </Typography>
          </FlexBox>

          <Typography variant="body2" fontSize={isMobile ? 20 : 22}>
            Web developer | Audio producer
          </Typography>
          <Typography sx={{ color: text.secondary, maxWidth: 340 }}>
            My passion is building digital experiences through code and sound.
          </Typography>
          <FlexBox
            flexDirection={isMobile ? "column" : "row"}
            alignItems="center"
            gap={isMobile ? 2 : 4}
          >
            <Box sx={{ display: "flex", gap: isMobile ? 1.5 : 2 }}>
              {socials.map((social, index) => (
                <MuiLink
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: text.secondary,
                    transition: "all 0.1s ease",
                    "&:hover": { color: text.primary },
                  }}
                >
                  {social.icon}
                </MuiLink>
              ))}
            </Box>
            <Button
              sx={{
                transition: "all 0.1s ease",
                borderRadius: 2,
                px: 2,
                color: text.primary,
                border: 2,
                borderColor: bgcolor.paper,
                "&:hover": { borderColor: green },
              }}
            >
              View projects
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default PageHeader;
