import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import Link from "next/link";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetTitle className="hidden"/>
      <SheetContent className="p-5">
        <Logo />
        <NavMenu 
          orientation="vertical" 
          className="-mt-20"
          linkComponent={(href, children) => (
            <SheetClose asChild>
              <Link href={href}>{children}</Link>
            </SheetClose>
          )}
        />
      </SheetContent>
    </Sheet>
  );
};