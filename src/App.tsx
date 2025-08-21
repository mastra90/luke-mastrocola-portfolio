import { useState } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import createAppTheme from "./theme";
import Header from "./components/Header";
import ToggleThemeButton from "./components/ToggleThemeButton";
import ServicesSwitch from "./components/ServicesSwitch";
import Portfolio from "./components/porfolio/Portfolio";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [showWebDev, setShowWebDev] = useState(true);
  const theme = createAppTheme(isDark);

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          mx: "auto",
          my: 4,
          maxWidth: {
            xl: 1600,
            lg: 800,
            md: 800,
          },
        }}
      >
        <CssBaseline />
        <ToggleThemeButton
          toggleTheme={() => setIsDark(!isDark)}
          isDark={isDark}
        />
        <Header />
        <ServicesSwitch showWebDev={showWebDev} setShowWebDev={setShowWebDev} />
        <Portfolio showWebDev={showWebDev} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
