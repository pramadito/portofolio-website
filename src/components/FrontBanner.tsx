import { Search } from "lucide-react";
import { Button } from "./ui/button";

const FrontBanner = () => {
  return (
    <section
      id="front-banner"
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 space-x-4 space-y-4 pt-18 "
    >
      <div className="order-2 md:order-1 flex flex-col gap-8 justify-center px-8">
        <h1 className="text-6xl">Pramadito Rafiaqil Ibrahim</h1>
        <p className="text-2xl">
          Full-Stack Developer & Business Management Specialist
        </p>
        <p className="text-xl">
          Building scalable web solutions while bridging technology and business
          strategy. Passionate about legacy code maintenance and innovative
          entrepreneurship.
        </p>

        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button>Contact Me</Button>
        </div>
      </div>
      <div className=" order-1 md:order-2">
        <img src="/cat.jpg" alt="thumbnail" />
      </div>
    </section>
  );
};

export default FrontBanner;
