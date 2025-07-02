import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger,SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      {/* BAND AID FIX Harus ada tiles */}
      <SheetTitle className="hidden"/>
      <SheetContent className="p-5">
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};