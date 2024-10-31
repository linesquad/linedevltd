import PortfolioCard from "../components/portfolioPage/PortfolioCard";
import lanobg from "../assets/portfolio/lano.png";
import jujuna from "../assets/portfolio/jujuna.png";
import bg from "../assets/portfolio/bg.png";
import Section from "../components/Section";
// need update to become dynamic
const Portfolio = () => {
  const lanoIcons = [
    {
      id: 1,
      image:
        "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsJ_C1vvOwsl4FWrkAZ7hDYwMeBcMpQgDQw&s",
    },
    { id: 3, image: "https://www.loopple.com/img/tailwind-logo-blue.png" },
    {
      id: 4,
      image:
        "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png",
    },
  ];

  return (
    <Section id={"portfolio"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <PortfolioCard
          cover={bg}
          desc={`Lano Pet Shop is an online store offering a wide range of quality pet products,
             from food and toys to grooming essentials, designed to meet all pet care needs.`}
          pinLink={"https://lano.vercel.app/"}
          pinTitle={"https://lano.vercel.app/"}
          image={lanobg}
          title={`Lano - pet shop`}
          icons={lanoIcons}
        />
        <PortfolioCard
          cover={bg}
          desc={`ჟუჟუნა ალკოჰოლის მაღაზია გთავაზობთ ღვინისა და სხვადასხვა მაღალი ხარისხის
             სასმელების მრავალფეროვან არჩევანს ადგილობრივი და უცხოური ბრენდებით.`}
          pinLink={"https://jujuna-v001.vercel.app/"}
          pinTitle={"https://jujuna-v001.vercel.app/"}
          image={jujuna}
          title={`ჟუჟუნა`}
          icons={lanoIcons}
        />
      </div>
    </Section>
  );
};

export default Portfolio;
