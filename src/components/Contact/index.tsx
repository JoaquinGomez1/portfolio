import { useTranslation } from "react-i18next";

export default function index() {
  const { t } = useTranslation("contact");
  return (
    <section className="contact" id="contact">
      <div data-aos="fade-down" data-aos-duration="1000" className="container">
        <div className="contact-title">
          <h4>{t("header")}</h4>
          <h2 className="text-large">{t("title")}:</h2>
        </div>
        <div className="contact-container">
          <div className="contact-input">
            <h3>{t("description")}:</h3>
            <form method="POST" name="emailFomr" id="form" className="form">
              <label htmlFor="name">{t("inputfield1.label")}:</label>
              <input
                type="text"
                id="subject"
                placeholder={t("inputfield1.placeholder")}
              />

              <label htmlFor="msg">{t("inputfield2.label")}:</label>
              <textarea
                id="msg"
                cols={30}
                rows={10}
                placeholder={t("inputfield2.placeholder")}
              ></textarea>

              <h3 className="errorMsg hide"></h3>
              <button className="callToAction sendFormBtn" type="submit">
                {t("button")}
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>{" "}
              <b> {t("location")}: </b> Córdoba, Argentina
            </div>
            <div className="location">
              <a
                href="https://github.com/JoaquinGomez1/"
                target="_blank"
                className="text-large text-primary contact-link"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/joaquin-g%C3%B3mez-6143221b2/"
                target="_blank"
                className="text-large text-primary contact-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
