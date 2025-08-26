import { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Divider,
} from "@mui/material";
import createAppTheme from "./theme";
import Header from "./components/Header";
import Portfolio from "./components/porfolio/Portfolio";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AboutSection from "./components/AboutSection";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [showWebDev, setShowWebDev] = useState(true);
  const theme = createAppTheme(isDark);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Divider color={theme.palette.background.paper} />
        {isDark && <Divider color={theme.palette.background.paper} />}
        <Welcome />
        <AboutSection />
        <Container
          sx={{
            maxWidth: {
              xl: 1600,
              lg: 800,
              md: 800,
            },
            flex: 1,
          }}
        >
          <Portfolio showWebDev={showWebDev} setShowWebDev={setShowWebDev} />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
