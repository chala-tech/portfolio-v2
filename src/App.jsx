import Navbar from "./components/layout/Navbar";
import CursorGlow from "./components/layout/CursorGlow";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <main className="relative bg-bg min-h-screen overflow-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;