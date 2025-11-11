import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { PanelLeftIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { useIsMobile } from "@/hooks/use-mobile";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/button";
import { Input } from "@/input";
import { Separator } from "@/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/sheet";
import { Skeleton } from "@/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/tooltip";

const SidebarGlobalStyles = createGlobalStyle`
  .kf-sidebar-wrapper {
    font-family: var(--kf-font-sans);
    min-height: 100svh;
    width: 100%;
    display: flex;
    background: var(--kf-color-sidebar-background, transparent);
  }

  .kf-sidebar-wrapper[data-variant="inset"] {
    background: var(--kf-color-sidebar-background, transparent);
  }

  .kf-sidebar {
    color: var(--kf-color-gray-950, var(--kf-color-gray-950, #0f172a));
  }

  .dark .kf-sidebar {
    color: var(--kf-color-gray-950, var(--kf-color-gray-950, #f8fafc));
  }

  .kf-sidebar__gap {
    position: relative;
    background: transparent;
    transition: width 200ms var(--kf-ease-linear, linear);
  }

  .kf-sidebar__container {
    position: fixed;
    inset-block: 0;
    z-index: 10;
    display: none;
    height: 100svh;
    transition:
      left 200ms var(--kf-ease-linear, linear),
      right 200ms var(--kf-ease-linear, linear),
      width 200ms var(--kf-ease-linear, linear);
  }

  @media (min-width: 48rem) {
    .kf-sidebar__container {
      display: flex;
    }
  }

  .kf-sidebar__inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: var(--kf-color-gray-100, var(--kf-color-gray-100, #ffffff));
    border-radius: var(--kf-radius-xl, 0.75rem);
    border: none;
    box-shadow: none;
    transition: border-color 200ms var(--kf-ease-in-out, ease);
  }

  .kf-sidebar__inner[data-variant="floating"],
  .kf-sidebar__inner[data-variant="inset"] {
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    box-shadow: var(--kf-shadow-sm, 0 1px 3px 0 rgb(15 23 42 / 0.1), 0 1px 2px -1px rgb(15 23 42 / 0.1));
  }

  .dark .kf-sidebar__inner[data-variant="floating"],
  .dark .kf-sidebar__inner[data-variant="inset"] {
    border-color: color-mix(in srgb, var(--kf-color-gray-300, rgba(248, 250, 252, 0.16)) 70%, transparent);
    box-shadow: var(--kf-shadow-md, 0 4px 6px -1px rgb(15 23 42 / 0.45), 0 2px 4px -2px rgb(15 23 42 / 0.4));
  }

  .kf-sidebar__trigger {
    width: calc(var(--kf-spacing, 0.25rem) * 7);
    height: calc(var(--kf-spacing, 0.25rem) * 7);
  }

  .kf-sidebar__rail {
    position: absolute;
    inset-block: 0;
    z-index: 20;
    display: none;
    width: 1rem;
    transform: translateX(-50%);
    transition: all 200ms var(--kf-ease-linear, linear);
    background: transparent;
  }

  .kf-sidebar__rail::after {
    content: "";
    position: absolute;
    inset-block: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: transparent;
  }

  @media (min-width: 40rem) {
    .kf-sidebar__rail {
      display: flex;
    }
  }

  .kf-sidebar__rail:hover::after {
    background: var(--kf-color-gray-100, rgba(15, 23, 42, 0.16));
  }

  .kf-sidebar__inset {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    flex-direction: column;
    background: var(--kf-color-gray-50, #ffffff);
  }

  .kf-sidebar__inset[data-variant="inset"] {
    margin: calc(var(--kf-spacing, 0.25rem) * 8);
    margin-left: 0;
    border-radius: var(--kf-radius-2xl, 1rem);
    box-shadow: var(--kf-shadow-sm, 0 1px 3px 0 rgb(15 23 42 / 0.1), 0 1px 2px -1px rgb(15 23 42 / 0.1));
  }

  .kf-sidebar__input {
    background: var(--kf-color-gray-50, #ffffff);
    height: calc(var(--kf-spacing, 0.25rem) * 8);
    width: 100%;
    box-shadow: none;
  }

  .kf-sidebar__header,
  .kf-sidebar__footer {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-sidebar__separator {
    margin-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    width: auto;
    background: var(--kf-color-gray-100, rgba(15, 23, 42, 0.12));
  }

  .kf-sidebar__content {
    display: flex;
    min-height: 0;
    flex: 1 1 auto;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    overflow: auto;
  }

  .kf-sidebar__icon-collapsed .kf-sidebar__content {
    overflow: hidden;
  }

  .kf-sidebar__group {
    position: relative;
    display: flex;
    width: 100%;
    min-width: 0;
    flex-direction: column;
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-sidebar__group-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-lg, 0.5rem);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    font-size: var(--kf-text-sm, 0.875rem);
    font-weight: 500;
  }

  .kf-sidebar__group-label:has(:focus-visible) {
    outline: none;
    box-shadow: var(--kf-ring-offset-width, 0) var(--kf-ring-offset-color, transparent);
  }

  .kf-sidebar__group-content {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    padding: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-sidebar__menu {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 0.5);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .kf-sidebar__menu-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-lg, 0.5rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
    color: inherit;
    transition:
      background 120ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-sidebar__menu-item[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }

  .kf-sidebar__menu-item[data-active="true"],
  .kf-sidebar__menu-item:focus-visible {
    background: color-mix(in srgb, var(--kf-color-blue-600, #1d4ed8) 14%, transparent);
    color: var(--kf-color-blue-50, #ffffff);
  }

  .kf-sidebar__menu-item:hover {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 60%, transparent);
  }

  .kf-sidebar__menu-item[data-variant="floating"],
  .kf-sidebar__menu-item[data-variant="inset"] {
    border-radius: var(--kf-radius-md, 0.375rem);
  }

  .kf-sidebar__menu-button {
    display: flex;
    width: 100%;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-lg, 0.5rem);
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    transition:
      background 120ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-sidebar__menu-button:hover {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 50%, transparent);
  }

  .kf-sidebar__menu-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--kf-color-blue-600, #1d4ed8) 20%, transparent);
  }

  .kf-sidebar__menu-button[data-active="true"] {
    background: color-mix(in srgb, var(--kf-color-blue-600, #1d4ed8) 14%, transparent);
    color: var(--kf-color-blue-50, #ffffff);
  }

  .kf-sidebar__menu-button[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }

  .kf-sidebar__menu-link {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    width: 100%;
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-lg, 0.5rem);
    text-decoration: none;
    color: inherit;
    transition:
      background 120ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-sidebar__menu-link:hover {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 60%, transparent);
  }

  .kf-sidebar__menu-link:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--kf-color-blue-600, #1d4ed8) 20%, transparent);
  }

  .kf-sidebar__menu-link[data-active="true"] {
    background: color-mix(in srgb, var(--kf-color-blue-600, #1d4ed8) 14%, transparent);
    color: var(--kf-color-blue-50, #ffffff);
  }

  .kf-sidebar__menu-badge {
    font-size: var(--kf-text-xs, 0.75rem);
    font-weight: 600;
    border-radius: var(--kf-radius-md, 0.375rem);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 0.5);
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 80%, transparent);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .dark .kf-sidebar__menu-badge {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.32)) 80%, transparent);
    color: var(--kf-color-gray-500, rgba(248, 250, 252, 0.76));
  }

  .kf-sidebar__skeleton {
    width: 100%;
    height: calc(var(--kf-spacing, 0.25rem) * 10);
    border-radius: var(--kf-radius-lg, 0.5rem);
  }

  .kf-sidebar__menu-item[data-collapsible="icon"] .kf-sidebar__menu-text,
  .kf-sidebar__menu-button[data-collapsible="icon"] .kf-sidebar__menu-text,
  .kf-sidebar__menu-link[data-collapsible="icon"] .kf-sidebar__menu-text {
    opacity: 0;
    pointer-events: none;
  }

  .kf-sidebar__menu-item[data-collapsible="icon"] .kf-sidebar__menu-icon,
  .kf-sidebar__menu-button[data-collapsible="icon"] .kf-sidebar__menu-icon,
  .kf-sidebar__menu-link[data-collapsible="icon"] .kf-sidebar__menu-icon {
    margin-inline: auto;
  }
`;

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <SidebarGlobalStyles />
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  );
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  const id = React.useId();
  const width = React.useMemo(() => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = (hash << 5) - hash + id.charCodeAt(i);
      hash |= 0;
    }
    const n = Math.abs(hash) % 41;
    return `${50 + n}%`;
  }, [id]);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
