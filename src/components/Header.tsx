import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, useTheme, Avatar, Typography, Button } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  const socials = [
    {
      icon: <GitHub />,
      link: "https://github.com/mastra90?tab=repositories",
    },
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/luke-mastrocola-aab00427a/",
    },
    {
      icon: <Twitter />,
      link: "https://x.com/Mastra_90",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/luke.mastrocola/",
    },
  ];

  return (
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
          mt: { xs: 4, sm: 0 },
          textAlign: { xs: "center", sm: "inherit" },
          color: theme.palette.text.secondary,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            typography: { xs: "h5", sm: "h4" },
            fontWeight: { xs: 500, sm: 500 },
          }}
        >
          Luke Mastrocola
        </Typography>
        <Typography sx={{ my: 2, fontWeight: 500 }}>
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
  );
};

export default Header;
