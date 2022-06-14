import { useTranslation } from "react-i18next";
import { ScrollableLink } from "..";
import { navData } from "../../constants/navdata";

export default function Navbar() {
  const { t } = useTranslation("navbar");

  return (
    <nav id="nav">
      <div className="container nav-container">
        <div className="logo">
          <h1>
            JoaquinG
            <span className="square-dot" />
          </h1>
        </div>
        <div className="nav-options-hamburger">
          <div className="navbarMenuContainer">
            <ul>
              {navData.map((x) => (
                <li>
                  <ScrollableLink path={x.path} text={t(x.text) as string} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
