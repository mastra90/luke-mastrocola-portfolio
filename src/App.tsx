import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import createAppTheme from "./theme";
import HeroSection from "./components/HeroSection";

function App() {
  const [isDark, setIsDark] = useState(true); // Defaults to true (dark mode)
  
  const theme = React.useMemo(() => {
    const themeResult = createAppTheme(isDark);
    console.log('Theme created:', typeof themeResult);
    return themeResult;
  }, [isDark]);
  
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mx: "auto", my: 4 }}>
        <CssBaseline />
        <HeroSection toggleTheme={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;