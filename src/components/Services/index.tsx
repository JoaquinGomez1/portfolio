import { Normalize, useTranslation } from "react-i18next";
import { ServiceCard } from "..";
import es from "../../translations/es/translation.json";

interface ServiceItem {
  title: Normalize<typeof es.services>;
  description: Normalize<typeof es.services>;
  icon: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "service1.title",
    description: "service1.description",
    icon: "fab fa-react",
  },
  {
    title: "service2.title",
    description: "service2.description",
    icon: "fas fa-desktop",
  },
  {
    title: "service3.title",
    description: "service3.description",
    icon: "fas fa-flag-usa",
  },
  {
    title: "service4.title",
    description: "service4.description",
    icon: "fas fa-server",
  },
  {
    title: "service5.title",
    description: "service5.description",
    icon: "far fa-lightbulb",
  },
  {
    title: "service6.title",
    description: "service6.description",
    icon: "fas fa-users",
  },
];

export default function index() {
  const { t } = useTranslation("services");
  return (
    <section id="services" className="services">
      <div data-aos="fade-right" data-aos-duration="1000" className="container">
        <h2 className="text-large">{t("title")}</h2>
        <div className="card-container">
          {servicesData.map(({ title, description, icon }) => (
            <ServiceCard
              title={t(title) as string}
              description={t(description) as string}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
