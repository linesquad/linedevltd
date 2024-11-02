import { plans } from "../../constants";
import Section from "../Section";
import SinglePlan from "./SinglePlan";

function OurPlans() {
  return (
    <div>
      <Section customPaddings="pt-[40px] px-[0px] md:px-[40px]">
        <div className="max-w-[1444px] px-[20px] mx-auto py-[50px] bg-gray-900 flex flex-col gap-[50px]">
          {plans.map((item, index) => {
            return (
              <SinglePlan
                key={index}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </Section>
    </div>
  );
}

export default OurPlans;
