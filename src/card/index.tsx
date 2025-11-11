import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const CardGlobalStyles = createGlobalStyle`
  .kf-card {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 6);
    border-radius: var(--kf-radius-2xl, 1rem);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 8);
    background: var(--kf-color-gray-100, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-card__header {
    display: grid;
    grid-auto-rows: min-content;
    grid-template-rows: auto auto;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    align-items: flex-start;
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-card__header:has([data-slot="card-action"]) {
    grid-template-columns: 1fr auto;
  }

  .kf-card__action {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: flex-start;
    justify-self: flex-end;
  }

  .kf-card__title {
    font-family: var(--font-condensed, var(--font-sans, sans-serif));
    font-size: var(--kf-text-2xl, 1.5rem);
    line-height: var(--kf-text-2xl--line-height, 1.3333333333);
    font-weight: 600;
    margin: 0;
  }

  .kf-card__description {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-card__content {
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-card__footer {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 8);
  }
`;

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <CardGlobalStyles />
      <div data-slot="card" className={cn("kf-card", className)} {...props} />
    </>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("kf-card__header", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("kf-card__title", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("kf-card__description", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("kf-card__action", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("kf-card__content", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("kf-card__footer", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
