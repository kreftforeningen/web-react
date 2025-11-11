import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const TooltipGlobalStyles = createGlobalStyle`
  .kf-tooltip__content {
    font-family: var(--kf-font-sans);
    z-index: 50;
    width: fit-content;
    padding: calc(var(--kf-spacing, 0.25rem) * 1.5) calc(var(--kf-spacing, 0.25rem) * 3);
    border-radius: var(--kf-radius-md, 0.375rem);
    background: var(--kf-color-blue-600, #1d4ed8);
    color: var(--kf-color-blue-50, #ffffff);
    font-size: var(--kf-text-xs, 0.75rem);
    text-wrap: balance;
    outline: none;
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
      kf-tooltip-fade-in 120ms var(--kf-ease-out, ease-out),
      kf-tooltip-slide-up 120ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__content[data-side="bottom"] {
    animation:
      kf-tooltip-fade-in 120ms var(--kf-ease-out, ease-out),
      kf-tooltip-slide-down 120ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__content[data-side="left"] {
    animation:
      kf-tooltip-fade-in 120ms var(--kf-ease-out, ease-out),
      kf-tooltip-slide-left 120ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__content[data-side="right"] {
    animation:
      kf-tooltip-fade-in 120ms var(--kf-ease-out, ease-out),
      kf-tooltip-slide-right 120ms var(--kf-ease-out, ease-out);
  }

  .kf-tooltip__arrow {
    position: relative;
    width: calc(var(--kf-spacing, 0.25rem) * 2.5);
    height: calc(var(--kf-spacing, 0.25rem) * 2.5);
    background: var(--kf-color-blue-600, #1d4ed8);
    fill: var(--kf-color-blue-600, #1d4ed8);
    transform: translateY(calc(-50% - 2px)) rotate(45deg);
    border-radius: 2px;
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
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipGlobalStyles />
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
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
