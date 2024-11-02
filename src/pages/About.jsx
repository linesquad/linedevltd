import AboutHeader from "../components/aboutPage/AboutHeader";
import DisplayWorkers from "../components/aboutPage/DisplayWorkers";
import OurCompany from "../components/aboutPage/OurCompany";
import OurPlans from "../components/aboutPage/OurPlans";
import OurWorks from "../components/aboutPage/OurWorks";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <OurCompany />
      <OurWorks />
      <DisplayWorkers />
      <OurPlans />
    </div>
  );
};

export default About;
