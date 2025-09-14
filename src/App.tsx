import { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import createAppTheme from "./theme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { useResponsive } from "./hooks/useResponsive";
import Portfolio from "./components/porfolio/Portfolio";
import Contact from "./components/Contact";
import LegacySite from "./components/LegacySite";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLegacy, setIsLegacy] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const mobileTransition = isLegacy ? "1s" : "0.6s";
  const theme = createAppTheme(isDark);
  const isMobile = useResponsive();
  const position = isMobile ? "97px 149px" : "114px 169px";

  const toNewSite = () => {
    setAnimationKey((prev) => prev + 1);
    setIsLegacy(false);
  };

  const toLegacySite = () => {
    setAnimationKey((prev) => prev + 1);
    setIsLegacy(true);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes expandWithPause-${animationKey} {
        0% { clip-path: circle(0px at ${position}); }
        30% { clip-path: circle(4vmax at ${position}); }
        85% { clip-path: circle(0.5vmax at ${position}); }
        100% { clip-path: circle(150vmax at ${position}); }
      }
      @keyframes contractWithPause-${animationKey} {
        0% { clip-path: circle(150vmax at ${position}); }
        20% { clip-path: circle(0.5vmax at ${position}); }
        95% { clip-path: circle(4vmax at ${position}); }
        100% { clip-path: circle(0px at ${position}); }
      }
    `;
    document.head.appendChild(style);
  }, [animationKey]);

  useEffect(() => {
    setTimeout(
      () => {
        document.body.style.overflow = isLegacy ? "hidden" : "auto";
      },
      isLegacy && !isMobile ? 1800 : !isLegacy && isMobile ? 0 : isMobile ? 0 : 140
    );
  }, [toNewSite]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: isLegacy ? 10 : 5,
          clipPath: isLegacy ? `circle(150vmax at ${position})` : `circle(0px at ${position})`,
          transition: isMobile
            ? `clip-path ${mobileTransition} cubic-bezier(0.4, 0, 0.2, 1)`
            : "none",
          animation:
            animationKey > 0
              ? `${
                  isLegacy ? `expandWithPause-${animationKey}` : `contractWithPause-${animationKey}`
                } ${!isMobile ? "2s" : "0s"} cubic-bezier(0.4, 0, 0.2, 1)`
              : "none",
        }}
      >
        <LegacySite toNewSite={toNewSite} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 12 : 32,
          mt: isMobile ? 0 : 4,
        }}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <About isDark={isDark} toLegacySite={toLegacySite} />
        <Portfolio />
        <Contact />
        <Footer isDark={isDark} setIsDark={() => setIsDark(!isDark)} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
