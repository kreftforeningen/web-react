"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const HoverCardGlobalStyles = createGlobalStyle`
  .kf-hover-card__content {
    font-family: var(--kf-font-sans);
    z-index: 50;
    width: 16rem;
    border-radius: var(--kf-radius-xl, 0.75rem);
    border: var(--kf-border-1, 1px)
      solid
      color-mix(
        in srgb,
        var(--kf-color-gray-300, rgba(15, 23, 42, 0.18)) 65%,
        transparent
      );
    background: color-mix(
      in srgb,
      var(--kf-color-gray-50, #f9fafb) 96%,
      transparent
    );
    color: var(--kf-color-gray-950, #020617);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    box-shadow:
      0 16px 40px rgba(15, 23, 42, 0.28),
      0 0 0 1px rgba(15, 23, 42, 0.04);
    outline: none;
    transform-origin: var(--radix-hover-card-content-transform-origin, center);
  }

  .dark .kf-hover-card__content {
    background: var(--kf-color-gray-950, #020617);
    color: var(--kf-color-gray-50, #f9fafb);
    border-color: color-mix(
      in srgb,
      var(--kf-color-gray-700, #374151) 75%,
      transparent
    );
    box-shadow:
      0 18px 50px rgba(0, 0, 0, 0.7),
      0 0 0 1px rgba(15, 23, 42, 0.6);
  }

  .kf-hover-card__content[data-state="open"] {
    animation:
      kf-hover-card-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-hover-card-scale-in 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-hover-card__content[data-state="closed"] {
    animation:
      kf-hover-card-fade-out 80ms var(--kf-ease-in, ease-in) forwards,
      kf-hover-card-scale-out 80ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-hover-card__content[data-side="top"] {
    animation:
      kf-hover-card-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-hover-card-slide-from-bottom 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-hover-card__content[data-side="bottom"] {
    animation:
      kf-hover-card-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-hover-card-slide-from-top 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-hover-card__content[data-side="left"] {
    animation:
      kf-hover-card-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-hover-card-slide-from-right 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-hover-card__content[data-side="right"] {
    animation:
      kf-hover-card-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-hover-card-slide-from-left 120ms var(--kf-ease-out, ease-out) forwards;
  }

  @keyframes kf-hover-card-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes kf-hover-card-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes kf-hover-card-scale-in {
    from {
      transform: scale(0.96);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes kf-hover-card-scale-out {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.96);
    }
  }

  @keyframes kf-hover-card-slide-from-top {
    from {
      transform: translateY(calc(var(--kf-spacing, 0.25rem) * -2));
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes kf-hover-card-slide-from-bottom {
    from {
      transform: translateY(calc(var(--kf-spacing, 0.25rem) * 2));
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes kf-hover-card-slide-from-left {
    from {
      transform: translateX(calc(var(--kf-spacing, 0.25rem) * 2));
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes kf-hover-card-slide-from-right {
    from {
      transform: translateX(calc(var(--kf-spacing, 0.25rem) * -2));
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <>
      <HoverCardGlobalStyles />
      <HoverCardPrimitive.Portal data-slot="hover-card-portal">
        <HoverCardPrimitive.Content
          data-slot="hover-card-content"
          align={align}
          sideOffset={sideOffset}
          className={cn("kf-hover-card__content", className)}
          {...props}
        />
      </HoverCardPrimitive.Portal>
    </>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
