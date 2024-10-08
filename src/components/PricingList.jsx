import { useLocation, useNavigate } from "react-router-dom";
import { check } from "../assets";
import { coursePricing, pricing } from "../constants";
import Button from "./Button";

const PricingList = ({ pickPrice }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPricing = pickPrice ? coursePricing : pricing;

  const handleNavigation = (title) => {
    const formatTitleForUrl = title.toLowerCase().replace(/\s+/g, "-");

    const newPath = `/pricing/${formatTitleForUrl}`;
    if (location.pathname !== newPath) {
      navigate(newPath);
    }
  };

  return (
    <div
      className=" flex gap-[1rem] max-lg:flex-wrap
    tiny:flex-col smaller:flex-col smaller:items-center flex-col items-center md:flex-row md:flex-wrap
     md:justify-center lg:flex-row lg:flex-nowrap"
    >
      {currentPricing.map((item) => (
        <div
          key={item.id}
          className=" w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 "
        >
          <h4 className=" h4 mb-4">{item.title}</h4>
          <p className=" body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className=" flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className=" h3">{pickPrice ? "Gel" : "$"}</div>
                <div className=" text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className=" mb-6"
            white={!!item.price}
            onClick={() => handleNavigation(item.title)}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, i) => (
              <li
                key={i}
                className=" flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="check" />
                <p className=" body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
