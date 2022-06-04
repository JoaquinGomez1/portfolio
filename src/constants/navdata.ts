import { AppTranslation } from "../interfaces/translation";

export interface NavData {
  text: keyof AppTranslation["navbar"];
  path: string;
}

export const navData: NavData[] = [
  { text: "home", path: "#nav" },
  { text: "about", path: "#about" },
  { text: "projects", path: "#projects" },
  { text: "services", path: "#services" },
  { text: "contact", path: "#contact" },
];
