import { useState } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import createAppTheme from "./theme";
import HeroSection from "./components/HeroSection";
import ToggleThemeButton from "./components/ToggleThemeButton";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const theme = createAppTheme(isDark);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mx: "auto", my: 4 }}>
        <CssBaseline />
        <ToggleThemeButton toggleTheme={toggleTheme} />
        <HeroSection />
      </Container>
    </ThemeProvider>
  );
};

export default App;
