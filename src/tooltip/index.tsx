import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const TooltipGlobalStyles = createGlobalStyle`
  .kf-tooltip__content {
  z-index: 50;
  width: fit-content;
    padding: calc(var(--kf-spacing, 0.25rem) * 1.5) calc(var(--kf-spacing, 0.25rem) * 3);
    border-radius: var(--kf-radius-md, 0.375rem);
    background: var(--kf-color-gray-950, oklch(0.039 0.01 240));
    color: var(--kf-color-gray-0, oklch(0.98 0 0));
    font-family: var(--kf-font-sans);
    font-size: var(--kf-text-xs, 0.75rem);
    font-weight: 500;
    line-height: 1.25;
    text-wrap: balance;
    box-shadow:
      0px 10px 15px -3px rgba(15, 23, 42, 0.3),
      0px 4px 6px -4px rgba(15, 23, 42, 0.25);
    outline: none;
    transform-origin: var(--radix-tooltip-content-transform-origin);
  }

  .dark .kf-tooltip__content {
    background: var(--kf-color-gray-50, oklch(0.98 0 0));
    color: var(--kf-color-gray-950, oklch(0.039 0.01 240));
  }

  .kf-tooltip__content > * {
    margin: 0;
  }

  .kf-tooltip__content[data-state="open"] {
    animation:
      kf-tooltip-fade-in 120ms var(--kf-ease-out, ease-out),
      kf-tooltip-zoom-in 120ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__content[data-state="closed"] {
    animation:
      kf-tooltip-fade-out 80ms var(--kf-ease-in, ease-in),
      kf-tooltip-zoom-out 80ms var(--kf-ease-in, ease-in);
  }

  .kf-tooltip__content[data-side="top"] {
    animation:
    kf-tooltip-fade-in 150ms var(--kf-ease-out, ease-out),
    kf-tooltip-slide-up 150ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__content[data-side="bottom"] {
    animation:
    kf-tooltip-fade-in 150ms var(--kf-ease-out, ease-out),
    kf-tooltip-slide-down 150ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__content[data-side="left"] {
    animation:
    kf-tooltip-fade-in 150ms var(--kf-ease-out, ease-out),
    kf-tooltip-slide-left 150ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__content[data-side="right"] {
    animation:
    kf-tooltip-fade-in 150ms var(--kf-ease-out, ease-out),
    kf-tooltip-slide-right 150ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    border: none;
    background: transparent;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  .kf-tooltip__trigger:focus-visible {
    outline: none;
  }

  .kf-tooltip__arrow {
    position: relative;
    width: calc(var(--kf-spacing, 0.25rem) * 2.5);
    height: calc(var(--kf-spacing, 0.25rem) * 2.5);
    background: var(--kf-color-gray-950, hsl(240 10% 3.9%));
    fill: var(--kf-color-gray-950, hsl(240 10% 3.9%));
    transform: translateY(calc(-50% - 2px)) rotate(45deg);
    border-radius: 2px;
  }

  .dark .kf-tooltip__arrow {
    background: var(--kf-color-gray-50, oklch(0.98 0 0));
    fill: var(--kf-color-gray-50, oklch(0.98 0 0));
  }

  @keyframes kf-tooltip-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes kf-tooltip-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes kf-tooltip-zoom-in {
    from { transform: scale(0.95); }
    to { transform: scale(1); }
  }

  @keyframes kf-tooltip-zoom-out {
    from { transform: scale(1); }
    to { transform: scale(0.95); }
  }

  @keyframes kf-tooltip-slide-up {
    from { transform: translateY(calc(var(--kf-spacing, 0.25rem) * 2)); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes kf-tooltip-slide-down {
    from { transform: translateY(calc(var(--kf-spacing, 0.25rem) * -2)); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes kf-tooltip-slide-left {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * 2)); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes kf-tooltip-slide-right {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * -2)); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props}>
        {children}
      </TooltipPrimitive.Root>
    </TooltipProvider>
  );
}

function TooltipTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  if (asChild) {
    return (
      <TooltipPrimitive.Trigger data-slot="tooltip-trigger" asChild {...props}>
        {children}
      </TooltipPrimitive.Trigger>
    );
  }

  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      className={cn("kf-tooltip__trigger", className)}
      asChild
      {...props}
    >
      <span>{children}</span>
    </TooltipPrimitive.Trigger>
  );
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <>
      <TooltipGlobalStyles />
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          data-slot="tooltip-content"
          sideOffset={sideOffset}
          className={cn("kf-tooltip__content", className)}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="kf-tooltip__arrow" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
