import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const CheckboxGlobalStyles = createGlobalStyle`
  .kf-checkbox {
    --kf-checkbox-size: calc(var(--kf-spacing, 0.25rem) * 4);
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--kf-checkbox-size);
    height: var(--kf-checkbox-size);
    border-radius: 0.25rem;
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(15, 23, 42, 0.08)) 90%, transparent);
    color: var(--kf-color-gray-950, #0f172a);
    transition: box-shadow 150ms var(--kf-ease-in-out, ease), border-color 150ms var(--kf-ease-in-out, ease), background-color 150ms var(--kf-ease-in-out, ease);
    outline: none;
  }

  .kf-checkbox:focus-visible {
    --kf-ring-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .kf-checkbox[data-state="checked"],
  .kf-checkbox[data-state="indeterminate"] {
    background: var(--kf-color-blue-600, #0f172a);
    border-color: var(--kf-color-blue-600, #0f172a);
    color: var(--kf-color-blue-50, #f8fafc);
  }

  .kf-checkbox[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-checkbox[aria-invalid="true"]:focus-visible {
    --kf-ring-color: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 40%, transparent);
  }

  .kf-checkbox[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .kf-checkbox__indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: currentColor;
  }

  .kf-checkbox__icon {
    width: calc(var(--kf-spacing, 0.25rem) * 3.5);
    height: calc(var(--kf-spacing, 0.25rem) * 3.5);
  }
`;

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <>
      <CheckboxGlobalStyles />
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn("kf-checkbox", className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="kf-checkbox__indicator"
        >
          <CheckIcon
            className="kf-checkbox__icon"
            aria-hidden="true"
            focusable="false"
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  );
}

export { Checkbox };
