import { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import createAppTheme from "./theme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { useResponsive } from "./hooks/useResponsive";
import Portfolio from "./components/porfolio/Portfolio";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isWebDevTab, setIsWebDevTab] = useState(true);
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
        <Portfolio isWebDevTab={isWebDevTab} setIsWebDevTab={setIsWebDevTab} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
