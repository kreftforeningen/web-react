import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Page,
} from "@/lib/main";

export default function NavigationMenuDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2 className="margin">Navigation Menu</h2>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Installation</NavigationMenuLink>
              <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
              <NavigationMenuLink href="#">Community</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Buttons</NavigationMenuLink>
              <NavigationMenuLink href="#">Forms</NavigationMenuLink>
              <NavigationMenuLink href="#">Navigation</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#">Buttons</NavigationMenuLink>
              <NavigationMenuLink href="#">Forms</NavigationMenuLink>
              <NavigationMenuLink href="#">Navigation</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </Page.Block>
  );
}
