import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import LeetCode from "./components/LeetCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <Nav />
      {/* Wise-style: sage ↔ white band rhythm + dark polarity-flip for LeetCode & contact */}
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <LeetCode />
      <Contact />
      <Footer />
    </main>
  );
}
