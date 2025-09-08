import { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import createAppTheme from "./theme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { useResponsive } from "./hooks/useResponsive";
import Portfolio from "./components/porfolio/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const theme = createAppTheme(isDark);
  const isMobile = useResponsive();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 12 : 32,
          mt: isMobile ? 0 : 4,
        }}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <About />
        <Portfolio />
        <Contact />
        <Footer isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
