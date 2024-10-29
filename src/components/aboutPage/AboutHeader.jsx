import Section from "../Section";

function AboutHeader() {
  return (
    <div>
      <Section customPaddings="py-[0px] px-[0px] md:px-[40px]">
        <div className="bg-gray-900 max-w-[1444px] mx-auto">
          <div className=" flex flex-col items-center pt-[50px] px-[20px]">
            <h2 className="text-[24px] lg:text-[30px]">About Us</h2>
            <div className="mt-[40px]">
              <p className="text-center">
                Read more anout us, Our vission, mission, success and
              </p>
              <p className="text-center">many other you might love</p>
            </div>
          </div>
        </div>
        <div className="h-[100px] lg:rounded-b-[60px] bg-gray-900"></div>
      </Section>
    </div>
  );
}

export default AboutHeader;
