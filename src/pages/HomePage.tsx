import { Container } from "@mui/material";
import HeroSection from "../components/HeroSection";
import DevWork from "../components/DevWork";

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ m: "auto", minHeight: "100vh" }}>
      <HeroSection /> <DevWork/>
    </Container>
  );
};

export default HomePage;
