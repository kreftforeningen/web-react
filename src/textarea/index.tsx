import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const TextareaGlobalStyles = createGlobalStyle`
  .kf-textarea {
    font-family: var(--kf-font-sans);
    width: 100%;
    min-height: calc(var(--kf-spacing, 0.25rem) * 16);
    padding: calc(var(--kf-spacing, 0.25rem) * 3) calc(var(--kf-spacing, 0.25rem) * 3);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.08));
    color: var(--kf-color-gray-950, #0f172a);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    outline: none;
    resize: vertical;
    transition: color 120ms var(--kf-ease-in-out, ease), box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .dark .kf-textarea {
    background: color-mix(in srgb, var(--kf-color-gray-800, #111827) 90%, transparent);
    border-color: color-mix(in srgb, var(--kf-color-gray-400, #374151) 80%, transparent);
    color: var(--kf-color-gray-50, #f8fafc);
  }

  .kf-textarea::placeholder {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .dark .kf-textarea::placeholder {
    color: var(--kf-color-gray-400, rgba(203, 213, 225, 0.65));
  }

  .kf-textarea:focus-visible {
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-textarea[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-textarea[aria-invalid="true"]:focus-visible {
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 25%, transparent);
  }

  .kf-textarea:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <TextareaGlobalStyles />
        <textarea
          ref={ref}
          data-slot="textarea"
          className={cn("kf-textarea", className)}
          {...props}
        />
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
