import SingleStat from "./SingleStat";
// update to make dinamic

function OurStats() {
  return (
    <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] justify-items-center gap-y-[50px] mt-[50px] py-[50px] px-[120xp] lg:bg-gray-900 rounded-[10px]">
      <SingleStat value="10+" description="years experience" />
      <SingleStat value="99%" description="accurecy rate" />
      <SingleStat value="500+" description="possitive reviewss" />
      <SingleStat value="600+" description="Trusted Patterns" />
    </div>
  );
}

export default OurStats;
