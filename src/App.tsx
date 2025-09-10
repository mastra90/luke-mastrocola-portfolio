import { useState } from "react";
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
  const theme = createAppTheme(isDark);
  const isMobile = useResponsive();
  const [isLegacy, setIsLegacy] = useState(false);
  const toNewSite = () => setIsLegacy(false);
  const toLegacySite = () => setIsLegacy(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LegacySite isLegacy={isLegacy} toNewSite={toNewSite} />
      <Box
        sx={{
          display: isLegacy ? "none" : "flex",
          opacity: isLegacy ? 0 : 1,
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