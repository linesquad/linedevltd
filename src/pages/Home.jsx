import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Colaboration from "../components/Colaboration";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Colaboration />
      <Services />
      <Pricing />
      <Roadmap />

      <ButtonGradient />
    </>
  );
};

export default Home;
