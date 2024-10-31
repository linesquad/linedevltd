import Section from "../Section";
import SingleWorker from "./SingleWorker";
import worker from "/worker.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// needto be dinaminc full compnent

const ourWorkers = [
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
];

function OurWorkers() {
  return (
    <div>
      <Section customPaddings="pt-[40px] px-[0px] md:px-[40px]">
        <div className="max-w-[1444px] mx-auto bg-gray-900 py-[50px]">
          <h2 className="text-[18px] lg:text-[24px] text-center">
            Lets Meet Our Antonys
          </h2>
          <div className="mt-[16px]">
            <p className="text-[14px] lg:text-[16px] text-center">
              Get the proper legal consultation from Legal wizard. We are here
              to
            </p>
            <p className="text-[14px] lg:text-[16px] text-center">
              consult you as per your business need
            </p>
          </div>
          <div className="mt-[70px] px-[20px] flex items-center justify-center">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              autoplay={{
                delay: 3000, // Delay in milliseconds between slide transitions
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // Stops autoplay on hover
              }}
              speed={800}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                850: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {ourWorkers.map((item, index) => (
                <SwiperSlide key={index}>
                  <SingleWorker
                    image={item.image}
                    name={item.name}
                    description={item.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default OurWorkers;
