import { Cpu, Menu } from "lucide-react";

const Navbar = () => {
  return (

    <nav className="container mx-auto md:px-12 px-4 py-5 flex justify-between items-center fixed bg-black">
      <div className="flex items-center gap-2">
        <Cpu className="text-white"/>
        <h1> <a href="#front-banner" className="text-2xl text-white">Portofolio</a></h1>
      </div>
      <div className="hidden md:flex gap-10 items-center">
        <a href="#about-me" className=" text-white">About Me</a>
        <a href="#skills" className=" text-white">Skills</a>
        <a href="#portofolio" className=" text-white">Portfolio</a>
        <a href="#contact" className=" text-white">Contact</a>
      </div>
      <div className="md:hidden text-white">
        <Menu />
        {/* https://ui.shadcn.com/docs/components/sidebar */}
      </div>
      
    </nav>


    
  );
};

export default Navbar;
