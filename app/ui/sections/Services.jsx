import CardService from "@/app/ui/CardService";
import { BiLogoJavascript, BiLogoJava } from "react-icons/bi";
import { MdConstruction } from "react-icons/md";

const services = [
  {
    subjects: ["Bases", "Promesses", "DOM"],
    price: 20,
    icons: <BiLogoJavascript className="card-service__icon" />,
  },
  {
    subjects: ["Bases", "POO", "Collections", "Exceptions"],
    price: 20,
    icons: <BiLogoJava className="card-service__icon" />,
  },
  {
    subjects: ["MVC", "MVP", "MVVM"],
    price: 15,
    icons: <MdConstruction className="card-service__icon" />,
  },
];

function Services() {
  return (
    <section className="section section--services" id="services">
      <div className="services__container">
        {services.map((service, index) => (
          <CardService
            key={index}
            subjects={service.subjects}
            price={service.price}
            icons={service.icons}
            last={index === services.length - 1}
          />
        ))}
        <span className="services__subtitle">
          Et encore d&apos;autres services à venir..👀
        </span>
      </div>
    </section>
  );
}

export default Services;
