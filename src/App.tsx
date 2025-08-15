import { ReactNode, useState } from "react";
import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import createAppTheme from "./theme";
import Header from "./components/Header";
import ToggleThemeButton from "./components/ToggleThemeButton";
import DevWork from "./components/DevWork";
import AudioWork from "./components/AudioWork";
import ServicesSwitch from "./components/ServicesSwitch";

function KeepMountedHidden({
  hidden,
  children,
}: {
  hidden: boolean;
  children: ReactNode;
}) {
  return (
    <Box
      aria-hidden={hidden}
      sx={
        hidden
          ? {
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }
          : { position: "static" }
      }
    >
      {children}
    </Box>
  );
}

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [showWebDev, setShowWebDev] = useState(true);
  const theme = createAppTheme(isDark);

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mx: "auto", my: 4, maxWidth: "1800px !important" }}>
        <CssBaseline />
        <ToggleThemeButton
          toggleTheme={() => setIsDark(!isDark)}
          isDark={isDark}
        />
        <Header />
        <ServicesSwitch showWebDev={showWebDev} setShowWebDev={setShowWebDev} />
        <KeepMountedHidden hidden={!showWebDev}>
          <DevWork />
        </KeepMountedHidden>
        <KeepMountedHidden hidden={showWebDev}>
          <AudioWork />
        </KeepMountedHidden>
      </Container>
    </ThemeProvider>
  );
};

export default App;
