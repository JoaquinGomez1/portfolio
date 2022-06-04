import { useTranslation } from "react-i18next";
import { ScrollableLink } from "..";
import { navData } from "../../constants/navdata";

/**This component will only show on desktop*/
export default function index() {
  const { t } = useTranslation("navbar");

  return (
    <section className="sidebar">
      {navData.map((x) => (
        <ScrollableLink className="sidebarItem" path={x.path}>
          <p>{t(x.text)}</p>
        </ScrollableLink>
      ))}
    </section>
  );
}
