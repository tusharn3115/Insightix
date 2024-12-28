/**
 * @copyright 2024 tushxr05
 * @license Apache-2.0
 */

// imports components
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import IconLogo from "./IconLogo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// assets
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

// constants
import { navMenu } from "@/constants";

const Header = () => {
  return (
    <header className="h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="container flex justify-between lg:grid lg:grid-cols-[1fr,3fr,1fr]">
        <IconLogo variant="icon" />

        <NavigationMenu className="max-lg:hidden mx-auto">
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <>
                    <NavigationMenuTrigger>
                      {label}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid grid-cols-2 gap-2 p-2 w-[640px]">
                        {submenu.map(({href, icon, label, desc}, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a href={href} className="flex gap-3 select-none p-2 rounded-sm transition-colors hover:bg-foreground/5 ">
                                <div className="w-10 h-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center">{icon}</div>

                                <div>
                                  <div className="text-[13px] leading-normal mb-1">{label}</div>
                                  <p className="text-[13px] leading-normal text-muted-foreground">{desc}</p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 justify-end max-lg:hidden">
          <Button variant='ghost' className="text-base">Sign In</Button>
          <Button className="bg-[#F1943A] hover:bg-[#C1742E] text-base">Sign In</Button>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden ">
              <Menu />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            align="end"
            className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden"
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
