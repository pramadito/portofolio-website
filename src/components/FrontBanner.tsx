import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Fade , Slide } from "react-awesome-reveal";

const FrontBanner = () => {
  return (
    <section
      id="front-banner"
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 space-x-4 space-y-4 pt-20 "
    >
      <div className="order-2 md:order-1 flex flex-col gap-8 justify-center md:px-8 px-4 ">
        <Slide triggerOnce>
        <h1 className="md:text-6xl text-2xl ">Pramadito Rafiaqil Ibrahim</h1>
        </Slide>
        <Slide delay={200} triggerOnce>
        <p className="md:text-2xl text-xl ">
          Full-Stack Developer & Business Management Specialist
        </p>
        </Slide>
        <Slide delay={400} triggerOnce>
        <p className="md:text-xl">
          Building scalable web solutions while bridging technology and business
          strategy. Passionate about legacy code maintenance and innovative
          entrepreneurship.
        </p>
        </Slide>
        
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Fade delay={500} triggerOnce>
          <Button>Contact Me</Button>
          </Fade>
        </div>
      </div>
      
      <div className="flex flex-row order-1 md:order-2 justify-center items-center">
        <Fade triggerOnce>
        <img src="/Pramadito.png" alt="thumbnail" />
        </Fade>
      </div>
      
    </section>
  );
};

export default FrontBanner;
