function SingleStat({ value, description }) {
  return (
    <div className="flex flex-col gap-[5px] lg:gap-[10px]">
      <h2 className="text-[40px] lg:text-[45px]">{value}</h2>
      <p className="text-[14px] lg:text-[16px] text-n-1/50">{description}</p>
    </div>
  );
}

export default SingleStat;
