import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const ProgressGlobalStyles = createGlobalStyle`
  .kf-progress {
    font-family: var(--kf-font-sans);
    position: relative;
    height: calc(var(--kf-spacing, 0.25rem) * 2);
    width: 100%;
    border-radius: var(--kf-radius-full, 9999px);
    overflow: hidden;
    background: color-mix(in srgb, var(--kf-color-blue-600, #1d4ed8) 20%, transparent);
  }

  .dark .kf-progress {
    background: color-mix(in srgb, var(--kf-color-blue-200, #bfdbfe) 20%, transparent);
  }

  .kf-progress__indicator {
    height: 100%;
    width: 100%;
    flex: 1 1 auto;
    background: var(--kf-color-blue-600, #1d4ed8);
    transform-origin: left center;
    transition: transform 160ms var(--kf-ease-in-out, ease);
  }

  .dark .kf-progress__indicator {
    background: var(--kf-color-blue-200, #bfdbfe);
  }
`;

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <>
      <ProgressGlobalStyles />
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn("kf-progress", className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="kf-progress__indicator"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </>
  );
}

export { Progress };
