import { SxProps } from "@mui/material";
import { Theme, useTheme } from "@mui/system";
import { useResponsive } from "../hooks/useResponsive";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { FlexBox } from "../helpers/Wrappers";
import { Link as MuiLink } from "@mui/material";

type SocialLinksProps = {
  sx?: SxProps<Theme>;
};

export const SocialLinks = ({ sx }: SocialLinksProps) => {
  const theme = useTheme();
  const isMobile = useResponsive();
  const text = theme.palette.text;

  const socialIconss = {
    ...sx,
    display: "flex",
    fontSize: isMobile ? 24 : 28,
    transition: "all 0.1s ease-in-out",
    ...(!isMobile && { "&:hover": { color: text.secondary } }),
  };
  const socialLinksData = [
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
    <FlexBox row>
      {socialLinksData.map((social, index) => (
        <MuiLink key={index} href={social.link} target="_blank" rel="noopener">
          {social.icon}
        </MuiLink>
      ))}
    </FlexBox>
  );
};
