import { Cpu, Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <div className="bg-black w-full fixed opacity-90 z-50">
    <nav className="container mx-auto lg:px-12 px-4 py-5 flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <Cpu className="text-white"/> 
        <h1> <a href="#front-banner" className="text-2xl text-white">Pramadito</a></h1>
      </div>
      <div className="hidden lg:flex gap-10 items-center">
        <NavMenu className="hidden lg:block" />
        
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden text-white ">
        <NavigationSheet/>
        {/* https://ui.shadcn.com/docs/components/sidebar */}
      </div>
      
    </nav>
    </div>

    
  );
};

export default Navbar;
