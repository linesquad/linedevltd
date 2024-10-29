import Section from "../Section";
import companyLogo from "../../assets/lineZ.png";

function OurCompany() {
  return (
    <div>
      <Section customPaddings="py-[40px] pb-[100px] px-[0px] md:px-[40px]">
        <div className="px-[20px] w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:max-w-[400px] xl:max-w-[650px]">
            <h2 className="text-[18px] lg:text-[24px]">
              We help on creating Legal briefs
            </h2>
            <p className="text-[14px] lg:text-[16px] mt-[16px] text-n-1/50 pb-[10px] border-b-[1px] border-[#eaeaea]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              nobis sequi veniam consequuntur dolor odio omnis sunt. Nihil
              tempora dolorum nobis aperiam voluptas quisquam eius est eveniet
              vero? Quia, voluptas expedita voluptates eaque ratione sit
              ducimus.
            </p>
            <p className="text-[14px] lg:text-[16px] mt-[16px] text-n-1/50 pb-[10px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur sed earum itaque non nostrum mollitia est possimus,
              excepturi qui perferendis nesciunt quasi sapiente corrupti illum
              alias eaque hic, dolorem unde distinctio! Harum atque earum omnis
              illum.
            </p>
          </div>
          <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] mt-[20px] lg:mt-[0px] bg-gradient-to-br from-[#2a003f] via-[#1b1b3a] to-[#0a043c] rounded-[20px] relative">
            <img src={companyLogo} alt="company-logo" />
            <div className="hidden lg:block w-[200px] p-[20px] bg-[#fff] absolute bottom-[-70px] left-[-70px] rounded-[20px]">
              <p className="text-[#000]">
                ,,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque, cum. Lorem ipsum dolor sit.&quot;
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default OurCompany;
