import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const NativeSelectGlobalStyles = createGlobalStyle`
  .kf-native-select {
    font-family: var(--kf-font-sans);
    position: relative;
    width: fit-content;
  }

  .kf-native-select:has(select:disabled) {
    opacity: 0.5;
  }

  .kf-native-select__control {
    width: 100%;
    min-width: 0;
    height: calc(var(--kf-spacing, 0.25rem) * 11);
    padding: calc(var(--kf-spacing, 0.25rem) * 3) calc(var(--kf-spacing, 0.25rem) * 3);
    padding-right: calc(var(--kf-spacing, 0.25rem) * 9);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: transparent;
    color: var(--kf-color-gray-950, #0f172a);
    font-size: var(--kf-text-md, 1.125rem);
    outline: none;
    appearance: none;
    transition: color 120ms var(--kf-ease-in-out, ease), box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .kf-native-select__control::placeholder {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.5));
  }

  .kf-native-select__control::selection {
    background: var(--kf-color-blue-600, #0f172a);
    color: var(--kf-color-blue-50, #f8fafc);
  }

  .kf-native-select__control:focus-visible {
    --kf-ring-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    --kf-ring-offset-color: var(--kf-color-gray-50, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .kf-native-select__control[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-native-select__control[aria-invalid="true"]:focus-visible {
    --kf-ring-color: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 40%, transparent);
  }

  .kf-native-select__control:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  .dark .kf-native-select__control {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.3)) 90%, transparent);
  }

  .kf-native-select__icon {
    position: absolute;
    top: 50%;
    right: calc(var(--kf-spacing, 0.25rem) * 3.5);
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.5));
    pointer-events: none;
    opacity: 0.5;
  }
`;

function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <>
      <NativeSelectGlobalStyles />
      <div className="kf-native-select" data-slot="native-select-wrapper">
        <select
          data-slot="native-select"
          className={cn("kf-native-select__control", className)}
          {...props}
        />
        <ChevronDownIcon
          className="kf-native-select__icon"
          aria-hidden="true"
          data-slot="native-select-icon"
        />
      </div>
    </>
  );
}

function NativeSelectOption({ ...props }: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />;
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  );
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
