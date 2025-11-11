import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const KbdGlobalStyles = createGlobalStyle`
  .kf-kbd {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    height: calc(var(--kf-spacing, 0.25rem) * 5);
    min-width: calc(var(--kf-spacing, 0.25rem) * 5);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 1);
    font-family: var(--font-sans);
    font-size: var(--kf-text-xs, 0.75rem);
    font-weight: 500;
    border-radius: var(--kf-radius-sm, 0.125rem);
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 90%, transparent);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    user-select: none;
    pointer-events: none;
  }

  .kf-kbd > svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 3);
    height: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  [data-slot="tooltip-content"] .kf-kbd {
    background: color-mix(in srgb, var(--kf-color-gray-50, #ffffff) 20%, transparent);
    color: var(--kf-color-background-foreground, #0f172a);
  }

  .dark [data-slot="tooltip-content"] .kf-kbd {
    background: color-mix(in srgb, var(--kf-color-gray-50, #0f172a) 10%, transparent);
    color: var(--kf-color-gray-50, #ffffff);
  }

  .kf-kbd-group {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
  }
`;

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <>
      <KbdGlobalStyles />
      <kbd data-slot="kbd" className={cn("kf-kbd", className)} {...props} />
    </>
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("kf-kbd-group", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
