import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const SwitchGlobalStyles = createGlobalStyle`
  .kf-switch {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    width: 2rem;
    height: 1.15rem;
    border-radius: var(--kf-radius-full, 9999px);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.08));
    cursor: pointer;
    transition: background 120ms var(--kf-ease-in-out, ease), border-color 120ms var(--kf-ease-in-out, ease);
    outline: none;
  }

  .kf-switch[data-state="checked"] {
    background: var(--kf-color-blue-600, #1d4ed8);
    border-color: var(--kf-color-blue-600, #1d4ed8);
  }

  .kf-switch[data-state="unchecked"] {
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.08));
  }

  .dark .kf-switch[data-state="unchecked"] {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 80%, transparent);
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
    border-radius: 9999px;
    background: color-mix(in srgb, var(--kf-color-gray-200, rgba(148, 163, 184, 0.16)) 100%, transparent);
    transform: translateX(0);
    transition: transform 120ms var(--kf-ease-in-out, ease), background 120ms var(--kf-ease-in-out, ease);
  }

  .kf-switch[data-state="checked"] .kf-switch__thumb {
    transform: translateX(calc(100% - 2px));
    background: var(--kf-color-blue-50, #ffffff);
  }

  .dark .kf-switch[data-state="unchecked"] .kf-switch__thumb {
    background: var(--kf-color-gray-500, rgba(226, 232, 240, 0.6));
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
