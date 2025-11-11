import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/lib/main";

export default function NavigationMenuDemo() {
  return (
    <>
      <h2>Navigation Menu</h2>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="app-menu-grid">
                <NavigationMenuLink href="#">Installation</NavigationMenuLink>
                <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
                <NavigationMenuLink href="#">Community</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="app-menu-grid">
                <NavigationMenuLink href="#">Buttons</NavigationMenuLink>
                <NavigationMenuLink href="#">Forms</NavigationMenuLink>
                <NavigationMenuLink href="#">Navigation</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </>
  );
}

