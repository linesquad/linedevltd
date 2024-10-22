import { stars, smallSphere } from "../../assets";
import { ScrollParallax } from "react-just-parallax";

export default function MovingStars_Sphere() {
  return (
    <ScrollParallax>
      <div className="  w-[2rem] pointer-events-none">
        <img
          src={smallSphere}
          width={255}
          height={255}
          className="ml-[1300px]  z-30"
          alt="stars"
        />
      </div>
      <div className="  w-[60rem] pointer-events-none">
        <img
          src={stars}
          className=" w-full z-30"
          width={950}
          height={400}
          alt="stars"
        />
      </div>

      <div className="  w-[2rem] pointer-events-none">
        <img
          src={smallSphere}
          width={255}
          height={255}
          className="  z-30"
          alt="stars"
        />
      </div>
    </ScrollParallax>
  );
}
