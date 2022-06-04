import {
  About,
  Contact,
  Landing,
  Navbar,
  Projects,
  Services,
  Sidebar,
} from "../../components";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Landing />
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
