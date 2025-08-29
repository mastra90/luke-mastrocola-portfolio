import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, useTheme, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        py: 8,
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          mx: "auto",
          textAlign: "center",
          color: theme.palette.text.secondary,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            typography: "h6",
            fontWeight: { xs: 500, sm: 500 },
          }}
        >
          Luke Mastrocola
        </Typography>
        <Typography sx={{ my: 2 }}>Web developer | Audio producer</Typography>
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
        <Typography sx={{ mt: 6, fontSize: 14 }}>
          © 2025 Luke Mastrocola. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
