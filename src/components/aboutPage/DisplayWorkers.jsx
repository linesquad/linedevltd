import OurWorkers from "./OurWorkers";
import worker from "/worker.jpg";

const ourWorkers = [
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
  {
    image: worker,
    name: "micheal obama",
    description: "web develoeper",
  },
];

function DisplayWorkers() {
  return (
    <div>
      <OurWorkers
        title="Lets meet Our workers"
        subTitle="Get the proper legal consultation from Legal wizard."
        ourWorkers={ourWorkers}
      />
    </div>
  );
}

export default DisplayWorkers;
