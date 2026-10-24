import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Practice from "./components/Practice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Effects from "./components/Effects";

export default function Page() {
  return (
    <>
      <Effects />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Practice />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
