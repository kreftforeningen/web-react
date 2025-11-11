import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const DrawerGlobalStyles = createGlobalStyle`
  .kf-drawer__overlay {
    font-family: var(--kf-font-sans);
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in srgb, #000000 50%, transparent);
  }

  .kf-drawer__overlay[data-state="open"] {
    animation: kf-drawer-fade-in 160ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-drawer__overlay[data-state="closed"] {
    animation: kf-drawer-fade-out 120ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-drawer__content {
    position: fixed;
    z-index: 50;
    display: flex;
    flex-direction: column;
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-drawer__content[data-vaul-drawer-direction="bottom"] {
    inset-inline: 0;
    bottom: 0;
    max-height: 80vh;
    border-top-left-radius: var(--kf-radius-lg, 0.5rem);
    border-top-right-radius: var(--kf-radius-lg, 0.5rem);
    border-top-width: var(--kf-border-1, 1px);
    border-bottom-width: 0;
  }

  .kf-drawer__content[data-vaul-drawer-direction="top"] {
    inset-inline: 0;
    top: 0;
    max-height: 80vh;
    border-bottom-left-radius: var(--kf-radius-lg, 0.5rem);
    border-bottom-right-radius: var(--kf-radius-lg, 0.5rem);
    border-bottom-width: var(--kf-border-1, 1px);
    border-top-width: 0;
  }

  .kf-drawer__content[data-vaul-drawer-direction="left"] {
    inset-block: 0;
    left: 0;
    width: 75vw;
    max-width: 24rem;
    border-top-right-radius: var(--kf-radius-lg, 0.5rem);
    border-bottom-right-radius: var(--kf-radius-lg, 0.5rem);
    border-right-width: var(--kf-border-1, 1px);
    border-left-width: 0;
  }

  .kf-drawer__content[data-vaul-drawer-direction="right"] {
    inset-block: 0;
    right: 0;
    width: 75vw;
    max-width: 24rem;
    border-top-left-radius: var(--kf-radius-lg, 0.5rem);
    border-bottom-left-radius: var(--kf-radius-lg, 0.5rem);
    border-left-width: var(--kf-border-1, 1px);
    border-right-width: 0;
  }

  .kf-drawer__handle {
    display: none;
    width: 100px;
    height: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-full, 9999px);
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.3));
    margin-inline: auto;
    margin-top: calc(var(--kf-spacing, 0.25rem) * 4);
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-drawer__content[data-vaul-drawer-direction="bottom"] .kf-drawer__handle {
    display: block;
  }

  .kf-drawer__header {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    text-align: left;
  }

  .kf-drawer__content[data-vaul-drawer-direction="bottom"] .kf-drawer__header,
  .kf-drawer__content[data-vaul-drawer-direction="top"] .kf-drawer__header {
    text-align: center;
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-drawer__content[data-vaul-drawer-direction="bottom"] .kf-drawer__header,
    .kf-drawer__content[data-vaul-drawer-direction="top"] .kf-drawer__header {
      text-align: left;
    }
  }

  .kf-drawer__footer {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-drawer__title {
    font-size: var(--kf-text-lg, 1.125rem);
    line-height: var(--kf-text-lg--line-height, 1.5555555556);
    font-weight: 600;
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-drawer__description {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }

  @keyframes kf-drawer-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes kf-drawer-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .kf-drawer__content[data-vaul-drawer-direction="bottom"][data-state="open"] {
    animation: kf-drawer-slide-in-bottom 200ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-drawer__content[data-vaul-drawer-direction="bottom"][data-state="closed"] {
    animation: kf-drawer-slide-out-bottom 160ms var(--kf-ease-in, ease-in) forwards;
  }

  @keyframes kf-drawer-slide-in-bottom {
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes kf-drawer-slide-out-bottom {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 100%, 0);
    }
  }

  .kf-drawer__content[data-vaul-drawer-direction="top"][data-state="open"] {
    animation: kf-drawer-slide-in-top 200ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-drawer__content[data-vaul-drawer-direction="top"][data-state="closed"] {
    animation: kf-drawer-slide-out-top 160ms var(--kf-ease-in, ease-in) forwards;
  }

  @keyframes kf-drawer-slide-in-top {
    from {
      transform: translate3d(0, -100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes kf-drawer-slide-out-top {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, -100%, 0);
    }
  }

  .kf-drawer__content[data-vaul-drawer-direction="left"][data-state="open"] {
    animation: kf-drawer-slide-in-left 200ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-drawer__content[data-vaul-drawer-direction="left"][data-state="closed"] {
    animation: kf-drawer-slide-out-left 160ms var(--kf-ease-in, ease-in) forwards;
  }

  @keyframes kf-drawer-slide-in-left {
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes kf-drawer-slide-out-left {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .kf-drawer__content[data-vaul-drawer-direction="right"][data-state="open"] {
    animation: kf-drawer-slide-in-right 200ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-drawer__content[data-vaul-drawer-direction="right"][data-state="closed"] {
    animation: kf-drawer-slide-out-right 160ms var(--kf-ease-in, ease-in) forwards;
  }

  @keyframes kf-drawer-slide-in-right {
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes kf-drawer-slide-out-right {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(100%, 0, 0);
    }
  }
`;

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return (
    <>
      <DrawerGlobalStyles />
      <DrawerPrimitive.Root data-slot="drawer" {...props} />
    </>
  );
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn("kf-drawer__overlay", className)}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn("kf-drawer__content", className)}
        {...props}
      >
        <div className="kf-drawer__handle" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("kf-drawer__header", className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("kf-drawer__footer", className)}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("kf-drawer__title", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("kf-drawer__description", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
