import Lottie from "lottie-react";
import error from "../animation/Error.json";

const Error = ({ width, height }) => {
  return (
    <Lottie
      animationData={error}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default Error;
