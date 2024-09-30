import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useNavigate } from "react-router-dom";

const Benefits = () => {
  const navigate = useNavigate();

  const handleExploreMore = (title) => {
    const formattedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    navigate(`/getCourse/${formattedTitle}`);
  };

  return (
    <Section id="features">
      <div className=" container relative z-2">
        <Heading
          className=" md:max-w-md lg:max-w-2xl"
          title="Grab your desired one"
        />

        <div
          className="flex flex-col  flex-wrap gap-10 mb-10 items-center sm:items-center
        md:justify-center md:flex-row"
        >
          {benefits.map((item) => (
            <div
              className=" block relative p-[7px] bg-no-repeat bg-[length:100%_100%] max-w-[24rem] border-color-1 border rounded-xl hover:border-transparent transition-all duration-300 ease-linear"
              key={item.id}
            >
              <div className=" relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className=" body-2 mb-6 text-n-3">{item.text}</p>
                <div className=" flex items-center mt-auto pointer-events-auto">
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <div
                    className=" ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer flex"
                    onClick={() => handleExploreMore(item.title)}
                  >
                    <button>Explore more</button>
                    <Arrow />
                  </div>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className=" absolute inset-0.5  "
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className=" absolute inset-0 opacity-0  transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={350}
                      height={362}
                      alt="image"
                      className=" w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
