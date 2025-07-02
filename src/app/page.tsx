import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FrontBanner from "@/components/FrontBanner";
import Portofolio from "@/components/Portofolio";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <FrontBanner />
      <AboutMe />
      <Skills />
      <Experience/>
      <Portofolio/>
      <Testimonial/>
      <Contact/>
    </>
  );
}
