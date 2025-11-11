import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const NavigationMenuGlobalStyles = createGlobalStyle`
  .kf-navigation-menu {
    font-family: var(--kf-font-sans);
    position: relative;
    display: flex;
    flex: 1 1 auto;
    max-width: max-content;
    justify-content: center;
    align-items: center;
  }

  .kf-navigation-menu__list {
    display: flex;
    flex: 1 1 auto;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    list-style: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .kf-navigation-menu__item {
    position: relative;
  }

  .kf-navigation-menu__trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    height: calc(var(--kf-spacing, 0.25rem) * 9);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 4);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-md, 0.375rem);
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    font-size: var(--kf-text-base, 1rem);
    font-weight: 500;
    transition:
      color 120ms var(--kf-ease-in-out, ease),
      background 120ms var(--kf-ease-in-out, ease),
      box-shadow 120ms var(--kf-ease-in-out, ease);
    outline: none;
  }

  .kf-navigation-menu__trigger:hover,
  .kf-navigation-menu__trigger:focus-visible,
  .kf-navigation-menu__trigger[data-state="open"] {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-navigation-menu__trigger:focus-visible {
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 65%, transparent);
  }

  .kf-navigation-menu__trigger:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .kf-navigation-menu__trigger-icon {
    width: calc(var(--kf-spacing, 0.25rem) * 3);
    height: calc(var(--kf-spacing, 0.25rem) * 3);
    transition: transform 160ms var(--kf-ease-in-out, ease);
  }

  .kf-navigation-menu__trigger[data-state="open"] .kf-navigation-menu__trigger-icon {
    transform: rotate(180deg);
  }

  .kf-navigation-menu__content {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: calc(var(--kf-spacing, 0.25rem) * 2) calc(var(--kf-spacing, 0.25rem) * 2.5);
    border-radius: var(--kf-radius-md, 0.375rem);
    outline: none;
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-navigation-menu__content {
      position: absolute;
      width: auto;
    }
  }

  .kf-navigation-menu[data-viewport="false"] .kf-navigation-menu__content {
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    box-shadow: var(--kf-shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1));
    margin-top: calc(var(--kf-spacing, 0.25rem) * 1.5);
    overflow: hidden;
  }

  .kf-navigation-menu__content[data-motion^="from-"] {
    animation: kf-navigation-menu-fade-in 160ms var(--kf-ease-out, ease-out);
  }

  .kf-navigation-menu__content[data-motion^="to-"] {
    animation: kf-navigation-menu-fade-out 120ms var(--kf-ease-in, ease-in);
  }

  .kf-navigation-menu__content[data-motion="from-start"] {
    animation:
      kf-navigation-menu-slide-from-left 180ms var(--kf-ease-out, ease-out),
      kf-navigation-menu-fade-in 160ms var(--kf-ease-out, ease-out);
  }

  .kf-navigation-menu__content[data-motion="from-end"] {
    animation:
      kf-navigation-menu-slide-from-right 180ms var(--kf-ease-out, ease-out),
      kf-navigation-menu-fade-in 160ms var(--kf-ease-out, ease-out);
  }

  .kf-navigation-menu__content[data-motion="to-start"] {
    animation:
      kf-navigation-menu-slide-to-left 150ms var(--kf-ease-in, ease-in),
      kf-navigation-menu-fade-out 120ms var(--kf-ease-in, ease-in);
  }

  .kf-navigation-menu__content[data-motion="to-end"] {
    animation:
      kf-navigation-menu-slide-to-right 150ms var(--kf-ease-in, ease-in),
      kf-navigation-menu-fade-out 120ms var(--kf-ease-in, ease-in);
  }

  .kf-navigation-menu__viewport-container {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 50;
    display: flex;
    justify-content: center;
    width: 100%;
    isolation: isolate;
  }

  .kf-navigation-menu__viewport {
    position: relative;
    margin-top: calc(var(--kf-spacing, 0.25rem) * 1.5);
    height: var(--radix-navigation-menu-viewport-height);
    width: 100%;
    overflow: hidden;
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    box-shadow: var(--kf-shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1));
    transform-origin: var(--radix-navigation-menu-viewport-transform-origin, top center);
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-navigation-menu__viewport {
      width: var(--radix-navigation-menu-viewport-width);
    }
  }

  .kf-navigation-menu__viewport[data-state="open"] {
    animation:
      kf-navigation-menu-fade-in 160ms var(--kf-ease-out, ease-out),
      kf-navigation-menu-scale-in 160ms var(--kf-ease-out, ease-out);
  }

  .kf-navigation-menu__viewport[data-state="closed"] {
    animation:
      kf-navigation-menu-fade-out 120ms var(--kf-ease-in, ease-in),
      kf-navigation-menu-scale-out 120ms var(--kf-ease-in, ease-in);
  }

  .kf-navigation-menu__link {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-md, 0.375rem);
    font-size: var(--kf-text-base, 1rem);
    transition: background 120ms var(--kf-ease-in-out, ease), color 120ms var(--kf-ease-in-out, ease);
    outline: none;
  }

  .kf-navigation-menu__link svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-navigation-menu__link:hover,
  .kf-navigation-menu__link:focus-visible,
  .kf-navigation-menu__link[data-active="true"],
  .kf-navigation-menu__link[data-active="true"]:hover {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-navigation-menu__link:focus-visible {
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 65%, transparent);
  }

  .kf-navigation-menu__indicator {
    position: absolute;
    top: 100%;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: calc(var(--kf-spacing, 0.25rem) * 1.5);
    overflow: hidden;
  }

  .kf-navigation-menu__indicator[data-state="visible"] {
    animation: kf-navigation-menu-fade-in 160ms var(--kf-ease-out, ease-out);
  }

  .kf-navigation-menu__indicator[data-state="hidden"] {
    animation: kf-navigation-menu-fade-out 120ms var(--kf-ease-in, ease-in);
  }

  .kf-navigation-menu__indicator-arrow {
    position: relative;
    top: calc(var(--kf-spacing, 0.25rem) * 2.4);
    width: calc(var(--kf-spacing, 0.25rem) * 2);
    height: calc(var(--kf-spacing, 0.25rem) * 2);
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    transform: rotate(45deg);
    border-top-left-radius: var(--kf-radius-xs, 0.125rem);
    box-shadow: var(--kf-shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1));
  }

  .kf-navigation-menu[data-viewport="false"] .kf-navigation-menu__indicator-arrow {
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  @keyframes kf-navigation-menu-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes kf-navigation-menu-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes kf-navigation-menu-slide-from-left {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * -13)); }
    to { transform: translateX(0); }
  }

  @keyframes kf-navigation-menu-slide-from-right {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * 13)); }
    to { transform: translateX(0); }
  }

  @keyframes kf-navigation-menu-slide-to-left {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(calc(var(--kf-spacing, 0.25rem) * -13)); opacity: 0; }
  }

  @keyframes kf-navigation-menu-slide-to-right {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(calc(var(--kf-spacing, 0.25rem) * 13)); opacity: 0; }
  }

  @keyframes kf-navigation-menu-scale-in {
    from { transform: scale(0.96); }
    to { transform: scale(1); }
  }

  @keyframes kf-navigation-menu-scale-out {
    from { transform: scale(1); }
    to { transform: scale(0.96); }
  }
`;

const navigationMenuTriggerStyle = () => "kf-navigation-menu__trigger";

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <>
      <NavigationMenuGlobalStyles />
      <NavigationMenuPrimitive.Root
        data-slot="navigation-menu"
        data-viewport={viewport}
        className={cn("kf-navigation-menu", className)}
        {...props}
      >
        {children}
        {viewport && <NavigationMenuViewport />}
      </NavigationMenuPrimitive.Root>
    </>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("kf-navigation-menu__list", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("kf-navigation-menu__item", className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="kf-navigation-menu__trigger-icon"
        aria-hidden="true"
        focusable="false"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn("kf-navigation-menu__content", className)}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="kf-navigation-menu__viewport-container">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn("kf-navigation-menu__viewport", className)}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn("kf-navigation-menu__link", className)}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn("kf-navigation-menu__indicator", className)}
      {...props}
    >
      <div className="kf-navigation-menu__indicator-arrow" aria-hidden="true" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
