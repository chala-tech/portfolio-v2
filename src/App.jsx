import Loader from "./components/layout/Loader";
import CustomCursor from "./components/layout/CustomCursor";
import ScrollProgress from "./components/layout/ScrollProgress";
import SmoothScroll from "./components/layout/SmoothScroll";
import CursorGlow from "./components/layout/CursorGlow";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden bg-bg">
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;