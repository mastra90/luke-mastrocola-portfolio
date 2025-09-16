import { SvgIcon, SxProps } from "@mui/material";
import { Box, Theme, useTheme } from "@mui/system";
import { useResponsive } from "../hooks/useResponsive";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { FlexBox } from "../helpers/Wrappers";
import { Link as MuiLink } from "@mui/material";

type SocialLinksProps = {
  sx?: SxProps<Theme>;
};

export const SocialLinks = ({ sx }: SocialLinksProps) => {
  const theme = useTheme();
  const isMobile = useResponsive();
  const text = theme.palette.text;
  const bgcolor = theme.palette.background;

  const socialIconss = {
    ...sx,
    display: "flex",
    fontSize: isMobile ? 24 : 28,
    transition: "all 0.1s ease-in-out",
    ...(!isMobile && { "&:hover": { color: text.secondary } }),
  };

  const SoundCloudIcon = (props: any) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          width: isMobile ? 22 : 32,
          height: isMobile ? 22 : 28,
        }}
      >
        <SvgIcon {...props} viewBox="0 0 22 22">
          <circle cx="11" cy="11" r="11" />
          <rect
            x="8.25"
            y="7.0498"
            width="2.10056"
            height="7.35197"
            rx="1"
            fill={bgcolor.default}
          />
          <rect
            x="5.625"
            y="9.15039"
            width="2.10056"
            height="5.25141"
            rx="1"
            fill={bgcolor.default}
          />
          <rect x="3" y="11.251" width="2.10056" height="3.15085" rx="1" fill={bgcolor.default} />
          <path
            d="M19.9965 11.9065C19.9602 12.584 19.6755 13.2204 19.2039 13.6808C18.7322 14.1412 18.1098 14.3964 17.4651 14.3876H11.3808C11.2468 14.3876 11.1185 14.3289 11.0236 14.2292C10.9287 14.1295 10.8756 13.9946 10.8756 13.8538V6.9678C10.8701 6.85049 10.9008 6.73318 10.9622 6.63347C11.0236 6.53376 11.1101 6.45457 11.2134 6.40765C11.2134 6.40765 11.7743 6 12.9521 6C13.6722 6 14.3783 6.20236 14.9979 6.58948C15.4807 6.88862 15.8994 7.28747 16.2287 7.7655C16.558 8.24353 16.7869 8.78609 16.9041 9.3609C17.1134 9.29932 17.3311 9.26706 17.5488 9.26706C17.8754 9.26412 18.1991 9.33158 18.5033 9.46355C18.8075 9.59552 19.0755 9.79495 19.3043 10.0413C19.5332 10.2876 19.7118 10.578 19.8318 10.9006C19.9518 11.2232 20.0077 11.5634 19.9965 11.9065Z"
            fill={bgcolor.default}
          />
        </SvgIcon>
      </Box>
    );
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
      icon: (
        <SoundCloudIcon
          sx={{ ...socialIconss, fontSize: isMobile ? 22 : 26, mt: isMobile ? 0.25 : 0.05 }}
        />
      ),
      link: "https://soundcloud.com/luke-mastrocola",
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
