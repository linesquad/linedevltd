import Lottie from "lottie-react";
import programmer from "../animation/Programming.json";

const Loading = ({ width, height }) => {
  return (
    <Lottie
      animationData={programmer}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default Loading;
