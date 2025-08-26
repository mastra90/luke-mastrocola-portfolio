import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, useTheme, Avatar, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";

const Header = () => {
  const theme = useTheme();
  const isMobile = useResponsive;

  const socialIconss = {
    fontSize: 24,
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
      <Box
        sx={{
          display: "flex",
          mt: isMobile() ? -2 : 8,
          width: isMobile() ? "100%" : 500,
          mx: "auto",
          mb: isMobile() ? 2 : 8,
          alignItems: "center",
          flexDirection: isMobile() ? "column" : "row",
        }}
      >
        <Avatar
          src="/Headshot.jpg"
          alt="Luke Mastrocola"
          sx={{
            width: isMobile() ? 80 : 150,
            height: isMobile() ? 80 : 150,
            border: `4px solid ${theme.palette.border.primary}`,
            mt: isMobile() ? 4 : 0,
          }}
        />
        <Box
          sx={{
            mx: "auto",
            mt: isMobile() ? 2 : 0,
            textAlign: isMobile() ? "center" : "inherit",
            color: theme.palette.text.secondary,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.text.primary,
              typography: isMobile() ? "h6" : "h5",
              fontWeight: 500,
            }}
          >
            Luke Mastrocola
          </Typography>
          <Typography sx={{ my: isMobile() ? 1 : 2, fontWeight: 500 }}>
            Web developer | Audio producer
          </Typography>
          {socials.map((social, index) => (
            <MuiLink
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener"
              sx={{
                color: theme.palette.text.secondary,
                pr: 2,
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
      </Box>
    </>
  );
};

export default Header;
