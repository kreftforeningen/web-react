"use client";

import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type MarkerVariant = "default" | "border" | "separator";

const MarkerGlobalStyles = createGlobalStyle`
  .kf-marker {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    font-family: var(--kf-font-sans);
    font-size: var(--kf-text-xs, 0.75rem);
    line-height: var(--kf-text-xs--line-height, 1.3333333333);
    color: var(--kf-color-gray-500, #6b7280);
  }

  .kf-marker--border {
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 2);
    border-bottom: 1px solid var(--kf-color-gray-200, #e5e7eb);
  }

  .kf-marker--separator {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
    width: 100%;
  }

  .kf-marker--separator::before,
  .kf-marker--separator::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--kf-color-gray-200, #e5e7eb);
  }

  .kf-marker--interactive {
    cursor: pointer;
    text-decoration: none;
    transition: color 150ms var(--kf-ease-in-out, ease);
  }

  .kf-marker--interactive:hover,
  .kf-marker--interactive:focus-visible {
    color: var(--kf-color-gray-700, #374151);
  }

  .kf-marker--interactive:focus-visible {
    outline: none;
    --kf-ring-color: var(--kf-color-blue-500, #3b82f6);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .kf-marker-icon {
    display: flex;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    color: var(--kf-color-gray-400, #9ca3af);
  }

  .kf-marker-icon > svg {
    width: 100%;
    height: 100%;
  }

  .kf-marker-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dark .kf-marker {
    color: var(--kf-color-gray-400, #9ca3af);
  }

  .dark .kf-marker--border {
    border-bottom-color: var(--kf-color-gray-700, #374151);
  }

  .dark .kf-marker--separator::before,
  .dark .kf-marker--separator::after {
    background: var(--kf-color-gray-700, #374151);
  }

  .dark .kf-marker--interactive:hover,
  .dark .kf-marker--interactive:focus-visible {
    color: var(--kf-color-gray-200, #e5e7eb);
  }

  .dark .kf-marker-icon {
    color: var(--kf-color-gray-500, #6b7280);
  }
`;

const variantClassName: Record<MarkerVariant, string> = {
  default: "",
  border: "kf-marker--border",
  separator: "kf-marker--separator",
};

type MarkerProps = React.ComponentPropsWithoutRef<"span"> & {
  variant?: MarkerVariant;
  render?: React.ReactElement;
};

function Marker({
  className,
  variant = "default",
  render,
  children,
  ...props
}: MarkerProps) {
  const classes = cn(
    "kf-marker",
    variantClassName[variant],
    render && "kf-marker--interactive",
    className,
  );

  if (render && React.isValidElement(render)) {
    const Comp = render.type as React.ElementType;
    const renderProps = render.props as Record<string, unknown>;
    return (
      <>
        <MarkerGlobalStyles />
        <Comp
          data-slot="marker"
          className={cn(classes, renderProps.className as string)}
          {...renderProps}
          {...props}
        >
          {children}
        </Comp>
      </>
    );
  }

  return (
    <>
      <MarkerGlobalStyles />
      <span
          data-slot="marker"
          className={classes}
          {...props}
        >
          {children}
        </span>
      </>
    );
}

function MarkerIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn("kf-marker-icon", className)}
      {...props}
    />
  );
}

function MarkerContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn("kf-marker-content", className)}
      {...props}
    />
  );
}

export { Marker, MarkerIcon, MarkerContent };
