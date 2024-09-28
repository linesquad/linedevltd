import Section from "../components/Section";
import Heading from "../components/Heading";
import { check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "../components/Generating";
import {
  PhotChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import aca from "../assets/services/aca.jpg";
import senseitrans from "../assets/services/senseitrans.png";
import socienty from "../assets/services/socienty.jpg";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Line is producing"
          text="Line team unlocks the potential of full stack web applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className=" absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className=" w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={senseitrans}
                alt="Smartest AI"
              />
            </div>

            <div className=" relative z-1 max-w-[17rem] ml-auto">
              <h4 className=" h4 mb-4">Full stack web applications</h4>
              <p className=" body-2 mb-[3rem] text-n-3">
                Creating and solving new problems
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, i) => (
                  <li
                    className=" flex items-start py-4 border-t border-n-6"
                    key={i}
                  >
                    <img width={24} height={24} src={check} alt="" />
                    <p className=" ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 " />
          </div>

          <div className=" relative z-1 grid gap-5 lg:grid-cols-2">
            <div className=" relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className=" absolute inset-0">
                <img
                  src={socienty}
                  className=" h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90">
                <h4 className=" h4 mb-4">Line academy</h4>
                <p className=" body-2 mb-[3rem] text-n-3">
                  Place where our students getting experience in our stack and
                  joing our team, transforming dreams to reality
                </p>
              </div>
              <PhotChatMessage />
            </div>

            <div className=" p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className=" py-12 px-4 xl:px-8">
                <h4 className=" h4 mb-4">Line Society</h4>
                <p className=" body-2 mb-[2rem] text-n-3">
                  Helping, working on real world projects and problems. step out
                  from the freshmen wave.
                </p>

                <ul className=" flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, i) => (
                    <li
                      key={i}
                      className={`rounded-2xl flex items-center justify-center ${
                        i === 2
                          ? "w-[3rem] h-[3rem] p-0.5 bg-conic-gradient rounded-full md:w-[4.5rem] md:h-[4.5rem]"
                          : " h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={`${
                          i === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-full"
                            : ""
                        }`}
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={aca}
                  alt="robot"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
