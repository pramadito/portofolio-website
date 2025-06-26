import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import FrontBanner from "@/components/FrontBanner";
import Portofolio from "@/components/Portofolio";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FrontBanner />
      <AboutMe />
      <Skills />
      <Portofolio/>
      <Contact/>
    </>
  );
}
