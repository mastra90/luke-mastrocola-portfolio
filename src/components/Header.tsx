import { useTheme, Avatar, Typography, Button } from "@mui/material";
import { useResponsive } from "../hooks/useResponsive";
import ToggleThemeButton from "./ToggleThemeButton";
import { FlexBox, SocialLinks } from "../helpers/Wrappers";
import { Link } from "react-scroll";

const Header = ({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) => {
  const theme = useTheme();
  const { green, yellow } = theme.palette;
  const bgcolor = theme.palette.background;
  const isMobile = useResponsive();

  return (
    <>
      <ToggleThemeButton toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
      <FlexBox spacious rowOnDesktop mx={"auto"}>
        <Avatar
          src="images/Headshot.jpg"
          alt="Luke Mastrocola"
          sx={{
            width: isMobile ? 150 : 240,
            height: isMobile ? 150 : 240,
            border: `3px solid ${yellow}`,
            mx: isMobile ? "auto" : "inherit",
          }}
        />
        <FlexBox
          textAlign={isMobile ? "center" : "inherit"}
          sx={{ mx: isMobile ? "center" : "none" }}
        >
          <Typography sx={{ color: green, fontWeight: 500 }}> Hello! I'm </Typography>
          <FlexBox row mx="auto" gap={1} sx={{ "& > :last-child": { color: green } }}>
            <Typography variant={isMobile ? "h5" : "h3"}>Luke</Typography>
            <Typography variant={isMobile ? "h5" : "h3"}> Mastrocola </Typography>
          </FlexBox>
          <Typography fontSize={isMobile ? 20 : 22} variant="body2">
            Web developer | Audio producer
          </Typography>
          <Typography variant="body2" fontSize={16} sx={{ maxWidth: 340 }}>
            My passion is building digital experiences through code and sound.
          </Typography>
          <FlexBox rowOnDesktop alignItems="center" gap={isMobile ? 2 : 4}>
            <SocialLinks />
            <Link to="portfolio" smooth={true} duration={500} offset={isMobile ? -36 : -48}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: bgcolor.secondary,
                  ...(!isMobile && { "&:hover": { borderColor: green } }),
                }}
              >
                View projects
              </Button>
            </Link>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Header;
