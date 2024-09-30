import { LeftLine, RightLine } from "../design/Pricing";
import PricingList from "../PricingList";
import Section from "../Section";

const PricingPage = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className=" container relative z-2 w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl pb-10">Course Pricing</h1>
          <div className="relative">
            <PricingList pickPrice="coursePricing" />
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </div>
      <div className=" container relative z-2 w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl py-10">Web Page Build Pricing</h1>
          <div className="relative">
            <PricingList pickPrice="pricing" />
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PricingPage;
