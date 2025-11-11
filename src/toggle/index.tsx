import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type ToggleVariant = "default" | "outline";
type ToggleSize = "default" | "sm" | "lg";

const ToggleGlobalStyles = createGlobalStyle`
  .kf-toggle {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-md, 0.375rem);
    font-size: var(--kf-text-base, 1rem);
    font-weight: 500;
    background: transparent;
    color: var(--kf-color-gray-950, #0f172a);
    cursor: pointer;
    outline: none;
    transition:
      color 120ms var(--kf-ease-in-out, ease),
      background 120ms var(--kf-ease-in-out, ease),
      box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .kf-toggle svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  .kf-toggle svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-toggle[data-variant="default"] {
    background: transparent;
  }

  .kf-toggle[data-variant="outline"] {
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    box-shadow: var(--kf-shadow-xs, 0 1px 2px 0 rgb(15 23 42 / 0.05));
  }

  .kf-toggle[data-variant="outline"]:hover {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-toggle[data-variant="default"]:hover {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 80%, transparent);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }

  .kf-toggle[data-variant="default"][data-state="on"],
  .kf-toggle[data-variant="outline"][data-state="on"] {
    background: color-mix(in srgb, var(--kf-color-gray-900, #0f172a) 20%, transparent);
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-toggle[data-size="default"] {
    height: calc(var(--kf-spacing, 0.25rem) * 11);
    min-width: calc(var(--kf-spacing, 0.25rem) * 11);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2.5);
  }

  .kf-toggle[data-size="sm"] {
    height: calc(var(--kf-spacing, 0.25rem) * 9);
    min-width: calc(var(--kf-spacing, 0.25rem) * 9);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-sm, 0.875rem);
  }

  .kf-toggle[data-size="lg"] {
    height: calc(var(--kf-spacing, 0.25rem) * 13);
    min-width: calc(var(--kf-spacing, 0.25rem) * 13);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-toggle:focus-visible {
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-toggle[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-toggle[aria-invalid="true"]:focus-visible {
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 25%, transparent);
  }

  .kf-toggle[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & {
  variant?: ToggleVariant;
  size?: ToggleSize;
}) {
  return (
    <>
      <ToggleGlobalStyles />
      <TogglePrimitive.Root
        data-slot="toggle"
        data-variant={variant}
        data-size={size}
        className={cn("kf-toggle", className)}
        {...props}
      />
    </>
  );
}

export { Toggle };
