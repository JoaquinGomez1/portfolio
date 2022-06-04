import { IProject } from "../components/Projects";

// Images
import bgtrackerImage from "../assets/images/NextjsBugTracker.png";
import twUi from "../assets/images/TwitterUI.png";
import ecomImg from "../assets/images/electroniks.png";
import pkpediaImg from "../assets/images/pokepedia.png";
import proofImg from "../assets/images/proof.jpg";

const projectsData: IProject[] = [
  {
    technologies: ["Nextjs", "React", "Tailwindcss"],
    title: "projects.twitterUi.title",
    imageUrl: twUi,
    url: "https://twitter-ui-clone-gules.vercel.app/",
    paragraphs: ["projects.twitterUi.paragraphs.1"],
    repoUrl: "https://github.com/JoaquinGomez1/twitter-ui-clone",
  },
  {
    technologies: [
      "Nextjs",
      "React",
      "Next Cloud Functions",
      "Framer motion",
      "Material UI",
      "Context API",
      "Postgresql",
      "Vercel",
    ],
    title: "projects.bugtracker.title",
    imageUrl: bgtrackerImage,
    url: "https://nextjs-bugtracker.vercel.app",
    paragraphs: [
      "projects.bugtracker.paragraphs.1",
      "projects.bugtracker.paragraphs.2",
      "projects.bugtracker.paragraphs.3",
    ],
    repoUrl: "https://github.com/JoaquinGomez1/Nextjs-Bugtracker",
  },

  // {
  //   technologies: [
  //     "React",
  //     "Nodejs",
  //     "Express",
  //     "Material UI",
  //     "Context API",
  //     "MongoDB & Mongo Cloud Atlas",
  //     "Heroku",
  //   ],
  //   title: "projects.ecommerce.title",
  //   imageUrl: ecomImg,
  //   url: "https://nextjs-bugtracker.vercel.app",
  //   paragraphs: [
  //     "projects.ecommerce.paragraphs.1",
  //     "projects.ecommerce.paragraphs.2",
  //   ],
  //   repoUrl: "https://github.com/JoaquinGomez1/Nextjs-Bugtracker",
  // },
  // {
  //   technologies: ["React", "React Router", "Fetch API", "Css", "Netlify"],
  //   title: "projects.pokepedia.title",
  //   imageUrl: pkpediaImg,
  //   url: "https://pokepediav2.netlify.app/",
  //   paragraphs: [
  //     "projects.pokepedia.paragraphs.1",
  //     "projects.pokepedia.paragraphs.2",
  //   ],
  //   repoUrl: "https://github.com/JoaquinGomez1/Pokedex-V2-React",
  // },
  // {
  //   technologies: ["Html", "Css"],
  //   title: "projects.proof.title",
  //   imageUrl: proofImg,
  //   url: "https://admiring-lumiere-8c7707.netlify.app/",
  //   repoUrl: "https://github.com/JoaquinGomez1/Proof-copy/",
  //   paragraphs: ["projects.proof.paragraphs.1", "projects.proof.paragraphs.2"],
  // },
];

export default projectsData;
