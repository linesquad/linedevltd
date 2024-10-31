import React from "react";
import { Link } from "react-router-dom";
import { PinContainer } from "../ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const PortfolioCard = ({
  pinTitle,
  pinLink,
  cover,
  image,
  title,
  desc,
  link,
  icons,
}) => {
  return (
    <div className="py-20" id="projects">
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] z-1">
          <PinContainer title={pinTitle} href={pinLink}>
            <Link to={link} target="_blank">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#4d218e75]">
                  <img src={cover} alt="bg-img" width={500} height={500} />
                </div>
                <img
                  src={image}
                  alt={"portfolio"}
                  className="z-10 absolute bottom-0"
                  width={500}
                  height={500}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:xl lg:font-normal font-light text-sm line-clamp-2">
                {desc}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {icons.map((icon) => (
                    <div
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * icon.id * 2}px)` }}
                      key={icon.id}
                    >
                      <img src={icon.image} alt={`icon`} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check live site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </Link>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
