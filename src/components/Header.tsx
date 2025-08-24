import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, useTheme, Avatar, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

const Header = () => {
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
    <>
      <Box
        sx={{
          display: "flex",
          mt: { xs: 4, sm: 8 },
          width: { xs: "100%", sm: 500 },
          mx: "auto",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Avatar
          src="/Headshot.jpg"
          alt="Luke Mastrocola"
          sx={{
            width: 150,
            height: 150,
            border: `4px solid ${theme.palette.border.primary}`,
          }}
        />
        <Box
          sx={{
            mx: "auto",
            mt: { xs: 2, sm: 0 },
            textAlign: { xs: "center", sm: "inherit" },
            color: theme.palette.text.secondary,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.text.primary,
              typography: { xs: "h6", sm: "h5" },
              fontWeight: { xs: 500, sm: 500 },
            }}
          >
            Luke Mastrocola
          </Typography>
          <Typography sx={{ my: { xs: 1, sm: 2 }, fontWeight: 500 }}>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
          width: "100%",
          my: { xs: 4, sm: 8 },
          py: { xs: 4, sm: 8 },
          bgcolor: theme.palette.background.switch,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
            fontSize: { xs: 16, sm: 20 },
          }}
        >
          Welcome to my portfolio.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: theme.palette.text.secondary,
            maxWidth: 600,
          }}
        >
          I'm a passionate web developer and audio producer. Each project
          reflects my commitment to intuitive design, and creative innovation.
          Explore my work below to see how my ideas come to life.
        </Typography>
      </Box>
    </>
  );
};

export default Header;
