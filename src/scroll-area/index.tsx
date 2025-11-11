import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const ScrollAreaGlobalStyles = createGlobalStyle`
  .kf-scroll-area {
    font-family: var(--kf-font-sans);
    position: relative;
  }

  .kf-scroll-area__viewport {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    outline: none;
    transition: box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .kf-scroll-area__viewport:focus-visible {
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-scroll-area__scrollbar {
    display: flex;
    user-select: none;
    touch-action: none;
    padding: 1px;
    transition: background 120ms var(--kf-ease-in-out, ease);
  }

  .kf-scroll-area__scrollbar[data-orientation="vertical"] {
    width: calc(var(--kf-spacing, 0.25rem) * 2.5);
    height: 100%;
    border-left: 1px solid transparent;
  }

  .kf-scroll-area__scrollbar[data-orientation="horizontal"] {
    height: calc(var(--kf-spacing, 0.25rem) * 2.5);
    width: 100%;
    flex-direction: column;
    border-top: 1px solid transparent;
  }

  .kf-scroll-area__thumb {
    position: relative;
    flex: 1 1 auto;
    border-radius: var(--kf-radius-full, 9999px);
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.16));
  }
`;

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <>
      <ScrollAreaGlobalStyles />
      <ScrollAreaPrimitive.Root
        data-slot="scroll-area"
        className={cn("kf-scroll-area", className)}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          data-slot="scroll-area-viewport"
          className="kf-scroll-area__viewport"
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    </>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn("kf-scroll-area__scrollbar", className)}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="kf-scroll-area__thumb"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
