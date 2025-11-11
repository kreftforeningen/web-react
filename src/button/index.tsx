import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { createGlobalStyle } from "styled-components";
import { cn } from "@/lib/utils";

const ButtonGlobalStyles = createGlobalStyle`
  .kf-btn {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--kf-btn-gap, 0.5rem);
    white-space: nowrap;
    border-radius: var(--kf-radius-full, 9999px);
    font-size: var(--kf-btn-font-size, 1rem);
    font-weight: var(--kf-btn-font-weight, 500);
    border-width: var(--kf-border-2, var(--kf-border-width, 2px));
    border-style: solid;
    cursor: pointer;
    padding: 0 var(--kf-btn-px-md, 1rem);
    height: var(--kf-btn-height-md, 44px);
    color: var(--kf-btn-text, var(--kf-color-gray-950, #0b1220));
    background: transparent;
    border-color: transparent;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    /* Ring defaults (overridden per-variant) */
    --kf-ring-color: var(--kf-color-blue-400, #60a5fa);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
    --kf-ring-width: 2px;
    --kf-ring-offset-width: 2px;
    transition: background-color 120ms var(--kf-ease-in-out, ease), border-color 120ms var(--kf-ease-in-out, ease), color 120ms var(--kf-ease-in-out, ease), box-shadow 120ms var(--kf-ease-in-out, ease);
  }
  .kf-btn[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .kf-btn svg {
    pointer-events: none;
    flex-shrink: 0;
  }
  .kf-btn svg:not([class*="size-"]) {
    width: var(--kf-btn-icon-size, var(--kf-btn-icon-size-md, 1rem));
    height: var(--kf-btn-icon-size, var(--kf-btn-icon-size-md, 1rem));
  }
  .kf-btn:focus-visible {
    outline: 0;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }
  .kf-btn:focus {
    outline: 0;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }
  .kf-btn[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }
  .kf-btn[aria-invalid="true"]:focus-visible {
    --kf-ring-color: var(--kf-color-red-700, #b91c1c);
  }

  .dark .kf-btn {
    --kf-ring-offset-color: var(--kf-color-gray-950, #0b0b0b);
  }

  .kf-btn--default {
    background: var(--kf-color-blue-700, #1d4ed8);
    color: var(--kf-color-blue-50, #eff6ff);
    border-color: var(--kf-color-blue-700, #1d4ed8);
    --kf-ring-color: var(--kf-color-blue-700, #1d4ed8);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
  }

  .kf-btn--default:hover {
    background: var(--kf-color-blue-800, #1e3a8a);
    border-color: var(--kf-color-blue-800, #1e3a8a);
  }

  .kf-btn--default:focus,
  .kf-btn--default:focus-visible {
    border-color: var(--kf-color-blue-700, #1d4ed8);
  }

  .dark .kf-btn--default {
    background: var(--kf-color-blue-700, #1d4ed8);
    color: var(--kf-color-blue-50, #eff6ff);
    border-color: var(--kf-color-blue-700, #1d4ed8);
    --kf-ring-color: var(--kf-color-blue-700, #1d4ed8);
  }
    
  .dark .kf-btn--default:hover,
  .dark .kf-btn--default:focus,
  .dark .kf-btn--default:focus-visible {
    background: var(--kf-color-blue-800, #1e3a8a);
    border-color: var(--kf-color-blue-800, #1e3a8a);
    --kf-ring-color: var(--kf-color-blue-800, #1e3a8a);
  }

  .kf-btn--secondary {
    background: var(--kf-color-pink-700, #9f1239);
    color: var(--kf-color-pink-50, #eff6ff);
    border-color: var(--kf-color-pink-700, #9f1239);
    --kf-ring-color: var(--kf-color-pink-700, #9f1239);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
  }

  .kf-btn--secondary:hover {
    background: var(--kf-color-pink-800, #881337);
    border-color: var(--kf-color-pink-800, #881337);
  }

  .kf-btn--secondary:focus,
  .kf-btn--secondary:focus-visible {
    border-color: var(--kf-color-pink-700, #9f1239);
  }

  .dark .kf-btn--secondary {
    background: var(--kf-color-pink-700, #9f1239);
    color: var(--kf-color-pink-50, #faf4f5);
    border-color: var(--kf-color-pink-700, #9f1239);
    --kf-ring-color: var(--kf-color-pink-700, #9f1239);
  }
    
  .dark .kf-btn--secondary:hover,
  .dark .kf-btn--secondary:focus,
  .dark .kf-btn--secondary:focus-visible {
    background: var(--kf-color-pink-800, #881337);
    border-color: var(--kf-color-pink-800, #881337);
    --kf-ring-color: var(--kf-color-pink-800, #881337);
  }

  .kf-btn--destructive {
    background: var(--kf-color-red-700, #b91c1c);
    color: var(--kf-color-red-50, #fef2f2);
    border-color: var(--kf-color-red-700, #b91c1c);
    --kf-ring-color: var(--kf-color-red-700, #b91c1c);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
  }

  .kf-btn--destructive:hover {
    background: var(--kf-color-red-800, #991b1b);
    border-color: var(--kf-color-red-800, #991b1b);
  }
    
  .kf-btn--destructive:focus,
  .kf-btn--destructive:focus-visible {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .dark .kf-btn--destructive:hover,
  .dark .kf-btn--destructive:focus,
  .dark .kf-btn--destructive:focus-visible {
    background: var(--kf-color-red-800, #991b1b);
    border-color: var(--kf-color-red-800, #991b1b);
    --kf-ring-color: var(--kf-color-red-800, #991b1b);
  }

  .kf-btn--outline {
    background: var(--kf-color-white, #ffffff);
    color: var(--kf-color-blue-700, #1e40af);
    border-color: var(--kf-color-blue-700, #1e40af);
    --kf-ring-color: var(--kf-color-blue-700, #1e40af);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
  }
  .kf-btn--outline:hover,
  .kf-btn--outline:focus {
    background: var(--kf-color-blue-700, #1e40af);
    color: var(--kf-color-blue-50, #eff6ff);
  }
  .kf-btn--outline:focus,
  .kf-btn--outline:focus-visible {
    border-color: var(--kf-color-blue-700, #1e40af);
  }

  .dark .kf-btn--outline {
    background: transparent;
    color: var(--kf-color-blue-200, #bfdbfe);
    border-color: var(--kf-color-blue-200, #bfdbfe);
    --kf-ring-color: var(--kf-color-blue-200, #bfdbfe);
    --kf-ring-offset-color: var(--kf-color-blue-950, #0b1a33);
  }
  .dark .kf-btn--outline:hover,
  .dark .kf-btn--outline:focus,
  .dark .kf-btn--outline:focus-visible {
    background: var(--kf-color-blue-200, #bfdbfe);
    color: var(--kf-color-blue-950, #0b1a33);
    border-color: var(--kf-color-blue-200, #bfdbfe);
  }

  .kf-btn--ghost {
    background: transparent;
    color: var(--kf-color-gray-950, #0b1220);
    border-color: transparent;
    --kf-ring-color: var(--kf-color-gray-200, #e5e7eb);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
  }
  .kf-btn--ghost:hover,
  .kf-btn--ghost:focus {
    background: var(--kf-color-gray-200, #e5e7eb);
    color: var(--kf-color-gray-950, #0b1220);
  }
  .kf-btn--ghost:focus,
  .kf-btn--ghost:focus-visible {
    border-color: transparent;
  }

  .dark .kf-btn--ghost {
    --kf-ring-offset-color: var(--kf-color-gray-950, #0b0b0b);
    color: var(--kf-color-gray-50, #f9fafb);
  }
  .dark .kf-btn--ghost:hover,
  .dark .kf-btn--ghost:focus,
  .dark .kf-btn--ghost:focus-visible {
    background: var(--kf-color-gray-700, #374151);
    color: var(--kf-color-gray-50, #f9fafb);
    --kf-ring-color: var(--kf-color-gray-700, #374151);
  }

  .kf-btn--link {
    background: transparent;
    border-color: transparent;
    color: var(--kf-color-blue-700, #1d4ed8);
    text-decoration: none;
    text-underline-offset: 4px;
    --kf-ring-color: transparent;
    --kf-ring-offset-color: transparent;
  }
  .kf-btn--link:hover,
  .kf-btn--link:focus {
    text-decoration: underline;
  }

  .kf-btn--link {
    --kf-ring-color: transparent;
    --kf-ring-offset-color: transparent;
  }

  .dark .kf-btn--link {
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .kf-btn--size-default {
    height: var(--kf-btn-height-md, 44px);
    padding: 0 var(--kf-btn-px-md, 1rem);
    font-size: var(--kf-font-size-md, 1rem);
  }
  .kf-btn--size-sm {
    height: var(--kf-btn-height-sm, 36px);
    padding: 0 var(--kf-btn-px-sm, 0.75rem);
    border-radius: var(--kf-radius-md, 0.375rem);
    font-size: var(--kf-font-size-sm, 0.875rem);
    gap: 0.375rem;
  }
  .kf-btn--size-lg {
    height: var(--kf-btn-height-lg, 48px);
    padding: 0 var(--kf-btn-px-lg, 1.5rem);
    border-radius: var(--kf-radius-md, 0.375rem);
    font-size: var(--kf-font-size-lg, 1.125rem);
  }
  .kf-btn--size-icon {
    width: var(--kf-btn-height-icon, 36px);
    height: var(--kf-btn-height-icon, 36px);
    padding: 0;
  }

  .kf-btn--shape-default {
    border-radius: var(--kf-radius-full, 9999px);
  }
  .kf-btn--shape-square {
    border-radius: var(--kf-radius-md, 0.375rem);
  }
`;

const buttonVariants = cva("kf-btn", {
  variants: {
    variant: {
      default: "kf-btn--default",
      destructive: "kf-btn--destructive",
      outline: "kf-btn--outline",
      secondary: "kf-btn--secondary",
      ghost: "kf-btn--ghost",
      link: "kf-btn--link",
    },
    size: {
      default: "kf-btn--size-default",
      sm: "kf-btn--size-sm",
      lg: "kf-btn--size-lg",
      icon: "kf-btn--size-icon",
    },
    shape: {
      default: "kf-btn--shape-default",
      square: "kf-btn--shape-square",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Button({
  className,
  variant,
  size,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <ButtonGlobalStyles />
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, shape, className }))}
        {...props}
      />
    </>
  );
}

export { Button, buttonVariants };
