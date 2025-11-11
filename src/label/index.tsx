import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const LabelGlobalStyles = createGlobalStyle`
  .kf-label {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    font-weight: 500;
    user-select: none;
  }

  .kf-label[data-disabled="true"],
  .kf-label .peer:disabled + & {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <>
      <LabelGlobalStyles />
      <LabelPrimitive.Root
        data-slot="label"
        className={cn("kf-label", className)}
        {...props}
      />
    </>
  );
}

export { Label };
