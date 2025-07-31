import { useState } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import createAppTheme from "./theme";
import Header from "./components/Header";
import ToggleThemeButton from "./components/ToggleThemeButton";
import DevWork from "./components/DevWork";
import AudioWork from "./components/AudioWork";
import ServicesSwitch from "./components/ServicesSwitch";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [showWebDev, setShowWebDev] = useState(true);
  const theme = createAppTheme(isDark);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          mx: "auto",
          my: 4,
          maxWidth: "1050px !important",
        }}
      >
        <CssBaseline />
        <ToggleThemeButton toggleTheme={toggleTheme} />
        <Header />
        <ServicesSwitch showWebDev={showWebDev} setShowWebDev={setShowWebDev} />
        {showWebDev ? <DevWork /> : <AudioWork />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
