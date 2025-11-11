import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const SeparatorGlobalStyles = createGlobalStyle`
  .kf-separator {
    font-family: var(--kf-font-sans);
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    flex-shrink: 0;
  }

  .kf-separator[data-orientation="horizontal"] {
    height: 1px;
    width: 100%;
  }

  .kf-separator[data-orientation="vertical"] {
    width: 1px;
    height: 100%;
  }
`;

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <>
      <SeparatorGlobalStyles />
      <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn("kf-separator", className)}
        {...props}
      />
    </>
  );
}

export { Separator };
