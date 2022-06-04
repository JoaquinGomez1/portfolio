import { useTranslation } from "react-i18next";
import { IProject } from "../Projects";

export default function ProjectDetail({
  paragraphs,
  technologies,
  title,
  url,
  imageUrl,
  repoUrl,
}: IProject) {
  const { t } = useTranslation("projects");
  return (
    <div className="proyecto">
      <a href={url} target="_blank" className="proyecto-imagen">
        <img src={imageUrl} alt={`${t(title)} demo`} />
      </a>

      <div className="proyecto-descripcion">
        <h3 className="proyecto-titulo">{t(title) as string}</h3>
        <div className="proyecto-historia">
          {/*Pass children to handle different text layouts*/}
          <div>
            {paragraphs.map((pNumber) => (
              <p key={pNumber}>{t(pNumber) as string}</p>
            ))}
          </div>
          <ul>
            {technologies.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        </div>
        <div className="proyecto-link">
          <a className="callToAction" href={repoUrl}>
            <i className="fab fa-github mr-4"></i>
            {t("viewSourceCode")}
          </a>

          <a className="callToAction" href={url} target="_blank">
            <i className="fas fa-globe-americas mr-4"></i>
            {t("viewDemo")}
          </a>
        </div>
      </div>
    </div>
  );
}
