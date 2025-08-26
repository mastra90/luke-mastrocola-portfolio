import { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  useMediaQuery,
} from "@mui/material";
import createAppTheme from "./theme";
import Header from "./components/Header";
import ToggleThemeButton from "./components/ToggleThemeButton";
import ServicesSwitch from "./components/ServicesSwitch";
import Portfolio from "./components/porfolio/Portfolio";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [showWebDev, setShowWebDev] = useState(true);
  const theme = createAppTheme(isDark);

  const isMobileHeight = useMediaQuery("(max-height: 480px)");
  const isMobileWidth = useMediaQuery("(max-width: 600px)");
  const isMobile = isMobileHeight || isMobileWidth ? true : false;

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <ToggleThemeButton
          isMobile={isMobile}
          toggleTheme={() => setIsDark(!isDark)}
          isDark={isDark}
        />
        <Header isMobile={isMobile} />
        <Welcome isMobile={isMobile} />
      </Box>

      <Container
        sx={{
          mx: "auto",
          maxWidth: {
            xl: 1600,
            lg: 800,
            md: 800,
          },
        }}
      >
        <CssBaseline />
        <ServicesSwitch showWebDev={showWebDev} setShowWebDev={setShowWebDev} />
        <Portfolio showWebDev={showWebDev} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
