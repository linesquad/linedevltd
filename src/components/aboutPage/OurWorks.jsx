import Section from "../Section";
import OurStats from "./OurStats";
import teamImage from "/team.jpg";

function OurWorks() {
  return (
    <div>
      <Section customPaddings="pt-[40px] lg:pt-[130px] px-[0px] md:px-[40px]">
        <div className="max-w-[1444px] mx-auto px-[20px]">
          <div>
            <h2 className="text-[22px] lg:text-[24px] text-center">
              Take A Vital Look At Our
            </h2>
            <h2 className="text-[22px] lg:text-[24px] text-center mt-[10px]">
              Application Working
            </h2>
            <p className="text-[14px] lg:text-[16px] text-n-1/50 mt-[16px] text-center">
              By accessing and using the Legal Wizard platform, you agree to be
            </p>
            <p className="text-[14px] lg:text-[16px] text-n-1/50 text-center">
              bound by these terms of service
            </p>
          </div>
          <div className="mt-[30px]">
            <img
              src={teamImage}
              alt=""
              className="rounded-[20px] mx-auto lg:w-[1200px] lg:h-[600px] object-cover"
            />
          </div>
          <OurStats />
        </div>
      </Section>
    </div>
  );
}

export default OurWorks;
