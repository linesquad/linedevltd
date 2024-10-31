import Section from "../Section";
import SinglePlan from "./SinglePlan";
import { FaDesktop } from "react-icons/fa";

// need to be dinamic

function OurPlans() {
  return (
    <div>
      <Section customPaddings="pt-[40px] px-[0px] md:px-[40px]">
        <div className="max-w-[1444px] px-[20px] mx-auto py-[50px] bg-gray-900 flex flex-col gap-[50px]">
          <SinglePlan
            Icon={FaDesktop}
            title="Write Legal Pleadings"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab reprehenderit
            repellendus praesentium. Excepturi repellendus repudiandae commodi neque
            enim earum provident, labore odio quis porro cum debitis amet sit
            corporis! Doloribus?"
          />
          <SinglePlan
            Icon={FaDesktop}
            title="Write Legal Pleadings"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab reprehenderit
            repellendus praesentium. Excepturi repellendus repudiandae commodi neque
            enim earum provident, labore odio quis porro cum debitis amet sit
            corporis! Doloribus?"
          />
          <SinglePlan
            Icon={FaDesktop}
            title="Write Legal Pleadings"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab reprehenderit
            repellendus praesentium. Excepturi repellendus repudiandae commodi neque
            enim earum provident, labore odio quis porro cum debitis amet sit
            corporis! Doloribus?"
          />
        </div>
      </Section>
    </div>
  );
}

export default OurPlans;
