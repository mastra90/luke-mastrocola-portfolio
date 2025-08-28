import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, useTheme, Avatar, Typography, Button } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import ToggleThemeButton from "./ToggleThemeButton";

const Header = ({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) => {
  const theme = useTheme();
  const isMobile = useResponsive();

  const socialIconss = {
    fontSize: isMobile ? 24 : 28,
    transition: "all 0.1s ease-in-out",
    "&:hover": { color: theme.palette.text.secondary },
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
      <ToggleThemeButton
        toggleTheme={() => setIsDark(!isDark)}
        isDark={isDark}
      />
      <Box
        sx={{
          display: "flex",
          width: isMobile ? "100%" : "auto",
          gap: 4,
          mt: isMobile ? 4 : 12,
          mb: 16,
          px: 2,
          mx: "auto",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Avatar
          src="/Headshot.jpg"
          alt="Luke Mastrocola"
          sx={{
            width: isMobile ? 150 : 240,
            height: isMobile ? 150 : 240,
            border: `3px solid ${theme.palette.border.primary}`,
            mt: isMobile ? 4 : 0,
          }}
        />
        <Box
          sx={{
            mx: "auto",
            mt: isMobile ? 2 : 0,
            textAlign: isMobile ? "center" : "inherit",
            color: theme.palette.text.secondary,
          }}
        >
          <Typography
            sx={{
              mb: 1,
              color: theme.palette.techChip.background,
              maxWidth: 340,
              mx: isMobile ? "center" : "none",
              fontWeight: 500,
              pl: 0.3,
            }}
          >
            Hello! I'm
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              typography: isMobile ? "h5" : "h3",
              fontWeight: 500,
            }}
          >
            Luke{" "}
            <Box
              component="span"
              sx={{
                color: theme.palette.techChip.background,
                typography: isMobile ? "h5" : "h3",
                fontWeight: 500,
              }}
            >
              Mastrocola
            </Box>
          </Typography>
          <Typography
            sx={{
              my: 1,
              fontWeight: 300,
              fontSize: isMobile ? 20 : 22,
            }}
          >
            Web developer | Audio producer
          </Typography>
          <Typography
            sx={{
              mb: 2,
              color: theme.palette.text.secondary,
              maxWidth: 340,
              mx: isMobile ? "center" : "none",
            }}
          >
            My passion is building digital experiences through code and sound.
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: 3,
              justifyContent: isMobile ? "center" : "inherit",
            }}
          >
            {!isMobile && (
              <Button
                sx={{
                  transition: "all 0.1s ease",
                  borderRadius: 2,
                  px: 2,
                  mr: 2,
                  color: theme.palette.background.default,
                  bgcolor: theme.palette.techChip.background,
                  border: 2,
                  borderColor: theme.palette.techChip.background,
                  "&:hover": {
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.techChip.background,
                    bgcolor: theme.palette.background.default,
                  },
                }}
              >
                View projects
              </Button>
            )}
            {socials.map((social, index) => (
              <MuiLink
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener"
                sx={{
                  color: theme.palette.text.secondary,
                  px: 1,
                  pt: 1,
                  transition: "all 0.1s ease",
                  "&:hover": {
                    color: theme.palette.text.primary,
                  },
                }}
              >
                {social.icon}
              </MuiLink>
            ))}
          </Box>
          {isMobile && (
            <Button
              sx={{
                transition: "all 0.1s ease",
                borderRadius: 2,
                px: 2,
                my: 2,
                mx: 1,
                color: theme.palette.background.default,
                bgcolor: theme.palette.techChip.background,
                border: 2,
                borderColor: theme.palette.techChip.background,
                "&:hover": {
                  color: theme.palette.text.primary,
                  borderColor: theme.palette.techChip.background,
                  bgcolor: theme.palette.background.default,
                },
              }}
            >
              View projects
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
