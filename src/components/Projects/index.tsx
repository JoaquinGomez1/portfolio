import { Normalize, useTranslation } from "react-i18next";
import projectsData from "../../data/projects";
import { AppTranslation } from "../../interfaces/translation";
import ProjectDetail from "../ProjectDetail";

export interface IProject {
  technologies: string[];
  title: Normalize<AppTranslation["projects"]>;
  imageUrl: string;
  url: string;
  repoUrl: string;
  paragraphs: Normalize<AppTranslation["projects"]>[];
}

export default function index() {
  const { t } = useTranslation("projects");
  return (
    <section id="projects" className="myWork">
      <div data-aos="fade-left" data-aos-duration="1000" className="container">
        <div className="work-title">
          <h4 className="text-medium">{t("header")}</h4>
          <h1 className="text-large">{t("title")}</h1>
        </div>
        <div className="proyectos-container">
          {projectsData.map((project) => (
            <ProjectDetail {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
