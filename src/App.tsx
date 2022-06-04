import { useEffect } from "react";
import HomePage from "./pages/Home";
import AOS from "aos";

function App() {
  useEffect(() => {
    // Initialize Animate on Scroll library
    AOS.init({ once: true });
  }, []);
  return <HomePage />;
}

export default App;
