"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const SwitchGlobalStyles = createGlobalStyle`
  .kf-switch {
    display: inline-flex;
    align-items: center;
    width: 2rem;
    height: 1.15rem;
    border-radius: var(--kf-radius-full, 9999px);
    border: none;
    background: var(--kf-color-gray-400, oklch(0.85 0 0));
    cursor: pointer;
    transition: background 120ms var(--kf-ease-in-out, ease);
    outline: none;
    position: relative;
  }

  .dark .kf-switch {
    background: var(--kf-color-gray-700, oklch(0.3 0 0));
  }

  .kf-switch[data-state="checked"] {
    background: var(--kf-color-blue-600, oklch(0.18 0 0));
  }

  .dark .kf-switch[data-state="checked"] {
    background: var(--kf-color-blue-100, #e6f0ff);
  }

  .kf-switch:focus-visible {
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-switch[data-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kf-switch__thumb {
    pointer-events: none;
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: var(--kf-radius-full, 9999px);
    background: var(--kf-color-white, #ffffff);
    position: absolute;
    left: calc((1.15rem - 1rem) / 2);
    top: 50%;
    transform: translateY(-50%);
    transition: left 120ms var(--kf-ease-in-out, ease), background 120ms var(--kf-ease-in-out, ease);
  }

  .kf-switch[data-state="checked"] .kf-switch__thumb {
    left: calc(100% - 1rem - (1.15rem - 1rem) / 2);
    background: var(--kf-color-white, #ffffff);
  }

  .dark .kf-switch[data-state="checked"] .kf-switch__thumb {
    background: var(--kf-color-blue-950, oklch(0.18 0 0));
  }
`;

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <>
      <SwitchGlobalStyles />
      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn("kf-switch", className)}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className="kf-switch__thumb"
        />
      </SwitchPrimitive.Root>
    </>
  );
}

export { Switch };
