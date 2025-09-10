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
  const theme = createAppTheme(isDark);
  const isMobile = useResponsive();
  const transition = isLegacy ? "1s" : "0.6s";

  const toNewSite = () => setIsLegacy(false);
  const toLegacySite = () => setIsLegacy(true);

  useEffect(() => {
    setTimeout(
      () => {
        document.body.style.overflow = isLegacy ? "hidden" : "auto";
      },
      isLegacy ? 300 : 240
    );
  }, [toNewSite]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          bgcolor: "#f2f2ef",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: isLegacy ? 10 : 5,
          clipPath: isLegacy ? "circle(150vmax at 5% 11.8%)" : "circle(0px at 5% 11.8%)",
          transition: `clip-path ${transition} cubic-bezier(0.4, 0, 0.2, 1)`,
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
        <About toLegacySite={toLegacySite} />
        <Portfolio />
        <Contact />
        <Footer isDark={isDark} setIsDark={() => setIsDark(!isDark)} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
