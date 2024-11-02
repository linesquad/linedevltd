import SingleStat from "./SingleStat";

const stats = [
  {
    id: "1",
    value: "10+",
    description: "years experience",
  },

  {
    id: "2",
    value: "99%",
    description: "accurecy rate",
  },
  {
    id: "3",
    value: "500+",
    description: "possitive reviews",
  },
  {
    id: "4",
    value: "600+",
    description: "Trusted Patterns",
  },
];

function OurStats() {
  return (
    <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] justify-items-center gap-y-[50px] mt-[50px] py-[50px] px-[120xp] lg:bg-gray-900 rounded-[10px]">
      {stats.map((item) => {
        return (
          <SingleStat
            key={item.id}
            value={item.value}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default OurStats;
