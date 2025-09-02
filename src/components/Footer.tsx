import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { useTheme, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { FlexBox } from "../helpers/Wrappers";

const Footer = () => {
  const theme = useTheme();
  const text = theme.palette.text;
  const bgcolor = theme.palette.background;

  const socialIconss = {
    fontSize: 24,
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
    <FlexBox>
      <FlexBox py={8} textAlign={"center"} bgcolor={bgcolor.paper}>
        <Typography sx={{ typography: "h6", fontWeight: 600 }}>
          Luke Mastrocola
        </Typography>
        <Typography variant="body2">Web developer | Audio producer</Typography>
        <FlexBox row mx="auto">
          {socials.map((social, index) => (
            <MuiLink
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener"
              sx={{
                transition: "all 0.1s ease",
                "&:hover": {
                  color: text.primary,
                },
              }}
            >
              {social.icon}
            </MuiLink>
          ))}
        </FlexBox>
        <Typography py={4} variant="body2">
          © 2025 Luke Mastrocola. All rights reserved.
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default Footer;
