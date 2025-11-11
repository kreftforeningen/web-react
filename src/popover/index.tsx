import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const PopoverGlobalStyles = createGlobalStyle`
  .kf-popover__content {
    font-family: var(--kf-font-sans);
    width: min(18rem, 100vw);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    box-shadow: var(--kf-shadow-md, 0 4px 6px -1px rgb(15 23 42 / 0.1), 0 2px 4px -2px rgb(15 23 42 / 0.08));
    outline: none;
    z-index: 50;
  }

  .kf-popover__content[data-state="open"] {
    animation:
      kf-popover-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-popover-scale-in 150ms var(--kf-ease-out, ease-out);
  }

  .kf-popover__content[data-state="closed"] {
    animation:
      kf-popover-fade-out 120ms var(--kf-ease-in, ease-in),
      kf-popover-scale-out 120ms var(--kf-ease-in, ease-in);
  }

  .kf-popover__content[data-side="top"] {
    animation:
      kf-popover-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-popover-slide-up 150ms var(--kf-ease-out, ease-out);
  }

  .kf-popover__content[data-side="bottom"] {
    animation:
      kf-popover-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-popover-slide-down 150ms var(--kf-ease-out, ease-out);
  }

  .kf-popover__content[data-side="left"] {
    animation:
      kf-popover-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-popover-slide-left 150ms var(--kf-ease-out, ease-out);
  }

  .kf-popover__content[data-side="right"] {
    animation:
      kf-popover-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-popover-slide-right 150ms var(--kf-ease-out, ease-out);
  }

  @keyframes kf-popover-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes kf-popover-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes kf-popover-scale-in {
    from { transform: scale(0.97); }
    to { transform: scale(1); }
  }

  @keyframes kf-popover-scale-out {
    from { transform: scale(1); }
    to { transform: scale(0.97); }
  }

  @keyframes kf-popover-slide-up {
    from { transform: translateY(calc(var(--kf-spacing, 0.25rem) * 2)); }
    to { transform: translateY(0); }
  }

  @keyframes kf-popover-slide-down {
    from { transform: translateY(calc(var(--kf-spacing, 0.25rem) * -2)); }
    to { transform: translateY(0); }
  }

  @keyframes kf-popover-slide-left {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * 2)); }
    to { transform: translateX(0); }
  }

  @keyframes kf-popover-slide-right {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * -2)); }
    to { transform: translateX(0); }
  }
`;

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverGlobalStyles />
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn("kf-popover__content", className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
