import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const InputGlobalStyles = createGlobalStyle`
  .kf-input {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    height: calc(var(--kf-spacing, 0.25rem) * 11);
    padding: calc(var(--kf-spacing, 0.25rem) * 3) calc(var(--kf-spacing, 0.25rem) * 3);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.08));
    color: var(--kf-color-gray-950, #0f172a);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    outline: none;
    transition: color 120ms var(--kf-ease-in-out, ease), box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .dark .kf-input {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.1)) 80%, transparent);
  }

  .kf-input::placeholder {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.5));
  }

  .kf-input::selection {
    background: var(--kf-color-blue-600, #0f172a);
    color: var(--kf-color-blue-50, #f8fafc);
  }

  .kf-input:focus-visible {
    --kf-ring-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    --kf-ring-offset-color: var(--kf-color-gray-50, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .kf-input:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }

  .kf-input[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-input[aria-invalid="true"]:focus-visible {
    --kf-ring-color: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 40%, transparent);
  }

  .kf-input[type="file"] {
    padding: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-input[type="file"]::file-selector-button {
    display: inline-flex;
    height: calc(var(--kf-spacing, 0.25rem) * 7);
    padding: 0 calc(var(--kf-spacing, 0.25rem) * 3);
    border: 0;
    border-radius: var(--kf-radius-md, 0.375rem);
    background: transparent;
    font-size: var(--kf-text-sm, 0.875rem);
    font-weight: 500;
    color: inherit;
    cursor: pointer;
  }
`;

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <>
      <InputGlobalStyles />
      <input
        type={type}
        data-slot="input"
        className={cn("kf-input", className)}
        {...props}
      />
    </>
  );
}

export { Input };
