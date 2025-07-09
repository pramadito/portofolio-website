import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

interface NavMenuProps extends NavigationMenuProps {
  linkComponent?: (href: string, children: React.ReactNode) => React.ReactNode;
}

export const NavMenu = ({ linkComponent, ...props }: NavMenuProps) => {
  const links = [
    { href: "#about-me", text: "About Me" },
    { href: "#skills", text: "Skills" },
    { href: "#portofolio", text: "Portofolio" },
    { href: "#experience", text: "Experience" },
    { href: "#testimonial", text: "Testimonial" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              {linkComponent ? (
                linkComponent(link.href, link.text)
              ) : (
                <Link href={link.href}>{link.text}</Link>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};