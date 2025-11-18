import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const InputGlobalStyles = createGlobalStyle`
  .kf-input {
    display: inline-flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    height: calc(var(--kf-spacing, 0.25rem) * 11);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 0.25);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, rgba(148, 163, 184, 0.12));
    color: var(--kf-color-gray-950, #0f172a);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    outline: none;
    transition:
      color 160ms var(--kf-ease-in-out, ease),
      box-shadow 160ms var(--kf-ease-in-out, ease),
      border-color 160ms var(--kf-ease-in-out, ease),
      background-color 160ms var(--kf-ease-in-out, ease);
  }

  .dark .kf-input {
    background: color-mix(in srgb, var(--kf-color-gray-800, #111827) 90%, transparent);
    border-color: color-mix(in srgb, var(--kf-color-gray-400, #374151) 80%, transparent);
    color: var(--kf-color-gray-50, #f8fafc);
  }

  .kf-input::placeholder {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .dark .kf-input::placeholder {
    color: var(--kf-color-gray-400, rgba(203, 213, 225, 0.65));
  }

  .kf-input::selection {
    background: var(--kf-color-blue-600, #2563eb);
    color: var(--kf-color-blue-50, #eff6ff);
  }

  .kf-input:focus-visible {
    --kf-ring-color: color-mix(in srgb, var(--kf-color-blue-500, #3b82f6) 50%, transparent);
    --kf-ring-offset-color: var(--kf-color-gray-50, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    border-color: var(--kf-color-blue-500, #3b82f6);
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .dark .kf-input:focus-visible {
    --kf-ring-offset-color: var(--kf-color-gray-900, #0f172a);
    border-color: var(--kf-color-blue-400, #60a5fa);
  }

  .kf-input:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }

  .kf-input[aria-invalid="true"] {
    border-color: var(--kf-color-red-600, #dc2626);
  }

  .kf-input[aria-invalid="true"]:focus-visible {
    --kf-ring-color: color-mix(in srgb, var(--kf-color-red-600, #dc2626) 40%, transparent);
    --kf-ring-offset-color: var(--kf-color-red-50, #fef2f2);
  }

  .dark .kf-input[aria-invalid="true"] {
    border-color: var(--kf-color-red-500, #ef4444);
  }

  .kf-input[type="file"] {
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1.5);
  }

  .kf-input[type="file"]::file-selector-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: calc(var(--kf-spacing, 0.25rem) * 7);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
    border: 0;
    border-radius: var(--kf-radius-md, 0.375rem);
    background: transparent;
    font-size: var(--kf-text-sm, 0.875rem);
    font-weight: 500;
    color: inherit;
    cursor: pointer;
  }

  .kf-input[type="file"]::file-selector-button:hover {
    text-decoration: underline;
  }
`;

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <InputGlobalStyles />
        <input
          ref={ref}
          type={type}
          data-slot="input"
          className={cn("kf-input", className)}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
