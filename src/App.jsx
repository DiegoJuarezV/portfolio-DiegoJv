import AboutMe from "./Components/AboutMe";
import { CarouselWithContent } from "./Components/CarouselInfo";
import { NavbarSimple } from "./Components/Header";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <NavbarSimple />
      <AboutMe />
      <Projects />
      <CarouselWithContent />
    </>
  )
}

export default App;
