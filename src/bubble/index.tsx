"use client";

import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type BubbleVariant =
  | "default"
  | "secondary"
  | "muted"
  | "tinted"
  | "outline"
  | "ghost"
  | "destructive";

type BubbleAlign = "start" | "end";

const BubbleGlobalStyles = createGlobalStyle`
  .kf-bubble {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 80%;
    font-family: var(--kf-font-sans);
  }

  .kf-bubble--align-end {
    margin-inline-start: auto;
  }

  .kf-bubble--default .kf-bubble__content {
    background: var(--kf-color-blue-600, #2563eb);
    color: var(--kf-color-white, #ffffff);
    border-radius: var(--kf-radius-xl, 0.75rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 2.5) calc(var(--kf-spacing, 0.25rem) * 3.5);
  }

  .kf-bubble--secondary .kf-bubble__content {
    background: var(--kf-color-gray-200, #e5e7eb);
    color: var(--kf-color-gray-900, #111827);
    border-radius: var(--kf-radius-xl, 0.75rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 2.5) calc(var(--kf-spacing, 0.25rem) * 3.5);
  }

  .kf-bubble--muted .kf-bubble__content {
    background: var(--kf-color-gray-100, #f3f4f6);
    color: var(--kf-color-gray-800, #1f2937);
    border-radius: var(--kf-radius-xl, 0.75rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 2.5) calc(var(--kf-spacing, 0.25rem) * 3.5);
  }

  .kf-bubble--tinted .kf-bubble__content {
    background: color-mix(in srgb, var(--kf-color-blue-100, #dbeafe) 50%, transparent);
    color: var(--kf-color-blue-900, #1e3a8a);
    border-radius: var(--kf-radius-xl, 0.75rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 2.5) calc(var(--kf-spacing, 0.25rem) * 3.5);
  }

  .kf-bubble--outline .kf-bubble__content {
    background: transparent;
    color: var(--kf-color-gray-900, #111827);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, #d1d5db);
    border-radius: var(--kf-radius-xl, 0.75rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 2.5) calc(var(--kf-spacing, 0.25rem) * 3.5);
  }

  .kf-bubble--ghost {
    max-width: 100%;
  }

  .kf-bubble--ghost .kf-bubble__content {
    background: transparent;
    color: inherit;
    padding: calc(var(--kf-spacing, 0.25rem) * 1) calc(var(--kf-spacing, 0.25rem) * 0);
  }

  .kf-bubble--destructive .kf-bubble__content {
    background: var(--kf-color-red-700, #b91c1c);
    color: var(--kf-color-white, #ffffff);
    border-radius: var(--kf-radius-xl, 0.75rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 2.5) calc(var(--kf-spacing, 0.25rem) * 3.5);
  }

  .kf-bubble__reactions {
    display: flex;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    position: relative;
    z-index: 1;
  }

  .kf-bubble__reactions--side-top {
    order: -1;
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * -1.5);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-bubble__reactions--side-bottom {
    margin-top: calc(var(--kf-spacing, 0.25rem) * -1.5);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-bubble__reactions--align-end {
    justify-content: flex-end;
  }

  .kf-bubble__reactions--align-start {
    justify-content: flex-start;
  }

  .kf-bubble-group {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 0.5);
  }

  .kf-bubble-group > .kf-bubble .kf-bubble__content {
    border-radius: var(--kf-radius-sm, 0.25rem);
  }

  .kf-bubble-group > .kf-bubble:first-child .kf-bubble__content {
    border-top-left-radius: var(--kf-radius-xl, 0.75rem);
    border-top-right-radius: var(--kf-radius-xl, 0.75rem);
  }

  .kf-bubble-group > .kf-bubble:last-child .kf-bubble__content {
    border-bottom-left-radius: var(--kf-radius-xl, 0.75rem);
    border-bottom-right-radius: var(--kf-radius-xl, 0.75rem);
  }

  .kf-bubble-group > .kf-bubble--align-end:first-child .kf-bubble__content {
    border-top-left-radius: var(--kf-radius-xl, 0.75rem);
    border-top-right-radius: var(--kf-radius-xl, 0.75rem);
  }

  .kf-bubble-group > .kf-bubble--align-end:last-child .kf-bubble__content {
    border-bottom-left-radius: var(--kf-radius-xl, 0.75rem);
    border-bottom-right-radius: var(--kf-radius-xl, 0.75rem);
  }

  .dark .kf-bubble--secondary .kf-bubble__content {
    background: var(--kf-color-gray-700, #374151);
    color: var(--kf-color-gray-100, #f3f4f6);
  }

  .dark .kf-bubble--muted .kf-bubble__content {
    background: var(--kf-color-gray-800, #1f2937);
    color: var(--kf-color-gray-200, #e5e7eb);
  }

  .dark .kf-bubble--tinted .kf-bubble__content {
    background: color-mix(in srgb, var(--kf-color-blue-900, #1e3a8a) 40%, transparent);
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .dark .kf-bubble--outline .kf-bubble__content {
    background: transparent;
    color: var(--kf-color-gray-100, #f3f4f6);
    border-color: var(--kf-color-gray-600, #4b5563);
  }

  .dark .kf-bubble--destructive .kf-bubble__content {
    background: var(--kf-color-red-800, #991b1b);
  }
`;

const variantClassName: Record<BubbleVariant, string> = {
  default: "kf-bubble--default",
  secondary: "kf-bubble--secondary",
  muted: "kf-bubble--muted",
  tinted: "kf-bubble--tinted",
  outline: "kf-bubble--outline",
  ghost: "kf-bubble--ghost",
  destructive: "kf-bubble--destructive",
};

type BubbleProps = React.ComponentPropsWithoutRef<"div"> & {
  variant?: BubbleVariant;
  align?: BubbleAlign;
};

const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>(
  ({ className, variant = "default", align = "start", ...props }, ref) => (
    <>
      <BubbleGlobalStyles />
      <div
        ref={ref}
        data-slot="bubble"
        className={cn(
          "kf-bubble",
          variantClassName[variant],
          align === "end" && "kf-bubble--align-end",
          className
        )}
        {...props}
      />
    </>
  )
);

Bubble.displayName = "Bubble";

type BubbleContentProps = React.ComponentPropsWithoutRef<"div"> & {
  render?: React.ReactElement;
};

function BubbleContent({
  className,
  render,
  children,
  ...props
}: BubbleContentProps) {
  if (render && React.isValidElement(render)) {
    const Comp = render.type as React.ElementType;
    const renderProps = render.props as Record<string, unknown>;
    return (
      <Comp
        data-slot="bubble-content"
        className={cn("kf-bubble__content", className, renderProps.className as string)}
        {...renderProps}
        {...props}
      >
        {children}
      </Comp>
    );
  }

  return (
    <div
      data-slot="bubble-content"
      className={cn("kf-bubble__content", className)}
      {...props}
    >
      {children}
    </div>
  );
}


type BubbleReactionsProps = React.ComponentPropsWithoutRef<"div"> & {
  side?: "top" | "bottom";
  align?: "start" | "end";
};

const BubbleReactions = React.forwardRef<HTMLDivElement, BubbleReactionsProps>(
  ({ className, side = "bottom", align = "end", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="bubble-reactions"
      className={cn(
        "kf-bubble__reactions",
        `kf-bubble__reactions--side-${side}`,
        `kf-bubble__reactions--align-${align}`,
        className
      )}
      {...props}
    />
  )
);

BubbleReactions.displayName = "BubbleReactions";

type BubbleGroupProps = React.ComponentPropsWithoutRef<"div">;

const BubbleGroup = React.forwardRef<HTMLDivElement, BubbleGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="bubble-group"
      className={cn("kf-bubble-group", className)}
      {...props}
    />
  )
);

BubbleGroup.displayName = "BubbleGroup";

export { Bubble, BubbleContent, BubbleReactions, BubbleGroup };
