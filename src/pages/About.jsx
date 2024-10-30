import AboutHeader from "../components/aboutPage/AboutHeader";
import OurCompany from "../components/aboutPage/OurCompany";
import OurPlans from "../components/aboutPage/OurPlans";
import OurWorkers from "../components/aboutPage/OurWorkers";
import OurWorks from "../components/aboutPage/OurWorks";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <OurCompany />
      <OurWorks />
      <OurWorkers />
      <OurPlans />
    </div>
  );
};

export default About;
