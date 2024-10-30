function SinglePlan({ Icon, title, description }) {
  return (
    <div className="flex gap-[50px] items-center max-w-[800px] mx-auto">
      <div className="hidden lg:flex items-center justify-center w-[100px] h-[100px] rounded-[50%] bg-[#fff]">
        <Icon color="black" size={30} />
      </div>
      <div className="flex flex-col gap-[20px] w-full max-w-[600px]">
        <h2 className="text-[24px]">{title}</h2>
        <p className="text-[14px] lg:text-[16px] text-n-1/50">{description}</p>
      </div>
    </div>
  );
}

export default SinglePlan;
