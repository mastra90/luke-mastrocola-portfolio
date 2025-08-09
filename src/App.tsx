import { ReactNode, useState } from "react";
import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import createAppTheme from "./theme";
import Header from "./components/Header";
import ToggleThemeButton from "./components/ToggleThemeButton";
import DevWork from "./components/DevWork";
import AudioWork from "./components/AudioWork";
import ServicesSwitch from "./components/ServicesSwitch";

const PortfolioView = ({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) => (
  <Box
    sx={{
      position: active ? "static" : "absolute",
      opacity: active ? 1 : 0,
    }}
  >
    {children}
  </Box>
);

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [showWebDev, setShowWebDev] = useState<boolean>(true);
  const theme = createAppTheme(isDark);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          mx: "auto",
          my: 4,
          maxWidth: "1800px !important",
        }}
      >
        <CssBaseline />
        <ToggleThemeButton toggleTheme={toggleTheme} isDark={isDark} />
        <Header />
        <ServicesSwitch showWebDev={showWebDev} setShowWebDev={setShowWebDev} />
        <Box>
          <PortfolioView active={showWebDev}>
            <DevWork />
          </PortfolioView>
          <PortfolioView active={!showWebDev}>
            <AudioWork />
          </PortfolioView>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
