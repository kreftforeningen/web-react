import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const HoverCardGlobalStyles = createGlobalStyle`
  .kf-hover-card__content {
    font-family: var(--kf-font-sans);
    z-index: 50;
    width: 16rem;
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    box-shadow: var(--kf-shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1));
    outline: none;
    transform-origin: var(--radix-hover-card-content-transform-origin, center);
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
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardGlobalStyles />
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn("kf-hover-card__content", className)}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
