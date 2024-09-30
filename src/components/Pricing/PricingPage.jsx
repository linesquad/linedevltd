import { LeftLine, RightLine } from "../design/Pricing";
import Heading from "../Heading";
import PricingList from "../PricingList";
import Section from "../Section";

const PricingPage = () => {
  return (
    <>
      <Section className="overflow-hidden" id="pricing">
        <div className=" container relative z-2">
          <Heading
            className=" md:max-w-md lg:max-w-2xl"
            title="Course Pricing"
          />

          <div className="relative">
            <PricingList pickPrice="coursePricing" />
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </Section>
      <Section className="overflow-hidden" id="pricing">
        <div className=" container relative z-2">
          <Heading
            className=" md:max-w-md lg:max-w-2xl"
            title="Web Page Build Pricing"
          />

          <div className="relative">
            <PricingList pickPrice="pricing" />
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </Section>
    </>
  );
};

export default PricingPage;
