import { useTranslation } from "react-i18next";
import remoteManImg from "../../assets/images/remote-work-man-edit.svg";

export default function About() {
  const { t } = useTranslation("about");
  return (
    <section id="about" className="about">
      <div data-aos="fade-left" data-aos-duration="1000" className="container">
        <div className="about-illustration">
          <img src={remoteManImg} alt="" />
        </div>
        <div>
          <div className="information-top">
            <h4 className="text-medium">{t("subheader")}</h4>
            <h2 className="text-large">{t("header")}</h2>
            <p>{t("firstParagraph")}</p>
            <p>{t("secondParagraph")}</p>
            <p>
              {t("thirdParagraph")}
              <a href="#contact">{t("url")}</a>
            </p>

            <h3>{t("technologies.title")}:</h3>
            <div className="myTecnologies">
              <div className="tec javascript">
                <i className="fab fa-js fa-fw"></i>
                {t("technologies.js")}
              </div>
              <div className="tec react">
                <i className="fab fa-react fa-fw"></i>
                {t("technologies.react")}
              </div>
              <div className="tec nodejs">
                <i className="fab fa-node fa-fw"></i>
                {t("technologies.node")}
              </div>

              <div className="tec mongodb">
                <i className="fas fa-database fa-fw"></i> {t("technologies.db")}
              </div>
              <div className="tec console">
                <i className="fas fa-terminal fa-fw"></i>
                {t("technologies.misc")}
              </div>
              <div className="tec git">
                <i className="fab fa-git-alt fa-fw"></i>
                {t("technologies.git")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
