import { useState } from "react";
import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import createAppTheme from "./theme";
import Header from "./components/Header";
import ToggleThemeButton from "./components/ToggleThemeButton";
import ServicesSwitch from "./components/ServicesSwitch";
import Portfolio from "./components/porfolio/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [showWebDev, setShowWebDev] = useState(true);
  const theme = createAppTheme(isDark);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "auto" }}>
        <ToggleThemeButton
          toggleTheme={() => setIsDark(!isDark)}
          isDark={isDark}
        />
        <Header />
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
