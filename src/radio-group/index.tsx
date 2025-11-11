import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const RadioGroupGlobalStyles = createGlobalStyle`
  .kf-radio-group {
    font-family: var(--kf-font-sans);
    display: grid;
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-radio-group__item {
    position: relative;
    aspect-ratio: 1 / 1;
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    flex-shrink: 0;
    border-radius: 9999px;
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.08));
    outline: none;
    transition:
      color 120ms var(--kf-ease-in-out, ease),
      box-shadow 120ms var(--kf-ease-in-out, ease),
      border-color 120ms var(--kf-ease-in-out, ease);
    cursor: pointer;
  }

  .dark .kf-radio-group__item {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.12)) 80%, transparent);
  }

  .kf-radio-group__item[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-radio-group__item[aria-invalid="true"]:focus-visible {
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 25%, transparent);
  }

  .kf-radio-group__item:focus-visible {
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-radio-group__item:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .kf-radio-group__indicator {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kf-radio-group__icon {
    width: calc(var(--kf-spacing, 0.25rem) * 2);
    height: calc(var(--kf-spacing, 0.25rem) * 2);
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    fill: var(--kf-color-blue-600, #1d4ed8);
  }

  .dark .kf-radio-group__icon {
    fill: var(--kf-color-blue-200, #bfdbfe);
  }
`;

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <>
      <RadioGroupGlobalStyles />
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn("kf-radio-group", className)}
        {...props}
      />
    </>
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn("kf-radio-group__item", className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="kf-radio-group__indicator"
      >
        <CircleIcon
          className="kf-radio-group__icon"
          aria-hidden="true"
          focusable="false"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
