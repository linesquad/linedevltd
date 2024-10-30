function SingleWorker({ image, name, description }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt=""
        className="rounded-[20px] w-[300px] 2xl:w-[400px] object-cover"
      />
      <div className="mt-[15px] max-w-[300px] 2xl:max-w-[400px]">
        <p className="text-[18px]">{name}</p>
        <p className="text-[14px] text-n-1/50">{description}</p>
      </div>
    </div>
  );
}

export default SingleWorker;
