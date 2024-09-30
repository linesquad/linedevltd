import { useParams } from "react-router-dom";
import Section from "../Section";

const SinglePagePricing = () => {
  const { servicesPricing } = useParams();
  return (
    <Section id="servicesPricing">
      <div className=" container relative z-2">
        <div>{servicesPricing}</div>
      </div>
    </Section>
  );
};

export default SinglePagePricing;
