import { useEffect } from "react";
import ContactForm from "../components/contactPage/ContactForm";
import Section from "../components/Section";

const Connect = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Section id="features">
      <div className=" container relative ">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Connect;
