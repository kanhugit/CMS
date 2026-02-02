import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Industries from "../components/Industries";
import Expertise from "../components/Expertise";
import Vision from "../components/Vision";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <Expertise />
      <Vision />
      <Contact />
      <Footer />
    </>
  );
}
