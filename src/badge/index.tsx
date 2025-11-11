import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const BadgeGlobalStyles = createGlobalStyle`
  .kf-badge {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    border-width: var(--kf-border-1, 1px);
    border-style: solid;
    border-color: transparent;
    border-radius: var(--kf-radius-md, 0.375rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 1) calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-xs, 0.75rem);
    line-height: var(--kf-text-xs--line-height, 1.3333333333);
    font-weight: 500;
    min-width: fit-content;
    white-space: nowrap;
    flex-shrink: 0;
    overflow: hidden;
    transition:
      color 150ms var(--kf-ease-in-out, ease),
      box-shadow 150ms var(--kf-ease-in-out, ease),
      background-color 150ms var(--kf-ease-in-out, ease),
      border-color 150ms var(--kf-ease-in-out, ease);
  }

  .kf-badge > svg {
    width: 0.75rem;
    height: 0.75rem;
    pointer-events: none;
  }

  .kf-badge:focus-visible {
    outline: none;
    --kf-ring-color: var(--kf-color-blue-500, #3b82f6);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .kf-badge[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-badge[aria-invalid="true"]:focus-visible {
    --kf-ring-color: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 40%, transparent);
  }

  .kf-badge--default {
    background: var(--kf-color-blue-600, #0f172a);
    color: var(--kf-color-blue-50, #f8fafc);
  }

  .kf-badge--default:is(a:hover, a:focus-visible) {
    background: color-mix(in srgb, var(--kf-color-blue-600, #0f172a) 90%, transparent);
  }

  .kf-badge--secondary {
    background: var(--kf-color-pink-600, #f1f5f9);
    color: var(--kf-color-pink-50, #0f172a);
  }

  .kf-badge--secondary:is(a:hover, a:focus-visible) {
    background: color-mix(in srgb, var(--kf-color-pink-600, #f1f5f9) 90%, rgba(15, 23, 42, 0.08));
  }

  .kf-badge--destructive {
    background: var(--kf-color-red-700, #b91c1c);
    color: var(--kf-color-destructive-foreground, #fef2f2);
  }

  .kf-badge--destructive:is(a:hover, a:focus-visible) {
    background: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 90%, transparent);
  }

  .kf-badge--outline {
    background: transparent;
    color: var(--kf-color-gray-950, #0f172a);
    border-color: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-badge--outline:is(a:hover, a:focus-visible) {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }
`;

const variantClassName: Record<BadgeVariant, string> = {
  default: "kf-badge--default",
  secondary: "kf-badge--secondary",
  destructive: "kf-badge--destructive",
  outline: "kf-badge--outline",
};

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & {
  variant?: BadgeVariant;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "span";

  return (
    <>
      <BadgeGlobalStyles />
      <Comp
        data-slot="badge"
        className={cn("kf-badge", variantClassName[variant], className)}
        {...props}
      />
    </>
  );
}

export { Badge };
