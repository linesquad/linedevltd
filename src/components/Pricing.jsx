import { ScrollParallax } from "react-just-parallax";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Button from "./Button";
import { useState } from "react";

const Pricing = () => {
  const [pickPrice, setPickPrice] = useState(false);

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className=" container relative z-2">
        <div className=" hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className=" relative z-1"
            alt="Sphere"
            width={255}
            height={255}
          />
          <ScrollParallax isAbsolutelyPositioned>
            <div className=" absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className=" w-full z-30"
                width={950}
                height={400}
                alt="stars"
              />
            </div>
          </ScrollParallax>
        </div>

        <Heading
          tag="Get started with LineDev"
          title="pick best option for you"
        />

        <div className=" flex justify-center gap-5 items-center mb-4">
          <Button onClick={() => setPickPrice(false)}>Build</Button>
          <Button onClick={() => setPickPrice(true)}>Academy</Button>
        </div>

        <div className="relative">
          <PricingList pickPrice={pickPrice} />
          <LeftLine />
          <RightLine />

          <div className=" flex justify-center mt-10">
            <a
              className=" text-xs font-code font-bold tracking-wider uppercase border-b"
              href=""
            >
              See full details
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
