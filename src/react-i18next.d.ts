import "react-i18next";
import es from "./translations/es/translation.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof es;
  }
}
