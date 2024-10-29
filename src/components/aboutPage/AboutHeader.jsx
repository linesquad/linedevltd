import Section from "../Section";

function AboutHeader() {
  return (
    <div>
      <Section customPaddings="py-[0px] px-[0px] md:px-[40px]">
        <div className="bg-gradient-to-br from-[#0e0c15] via-[#383850] to-[#18191a] lg:rounded-b-[50px]">
          <div className=" flex flex-col items-center pt-[50px] px-[20px] py-[70px]">
            <h2 className="text-[24px] lg:text-[30px]">About Us</h2>
            <div className="mt-[40px]">
              <p className="text-center">
                Read more anout us, Our vission, mission, success and
              </p>
              <p className="text-center">many other you might love</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default AboutHeader;
