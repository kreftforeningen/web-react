"use client";

import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const AspectRatioGlobalStyles = createGlobalStyle`
  .kf-aspect-ratio img,
  .kf-aspect-ratio picture > img {
    width: 100%;
    height: 100%;
    border-radius: var(--kf-radius-lg, 0.5rem);
    object-fit: cover;
  }

  .dark .kf-aspect-ratio img,
  .dark .kf-aspect-ratio picture > img {
    filter: brightness(0.2) grayscale(100%);
  }
`;

function AspectRatio({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>) {
  return (
    <>
      <AspectRatioGlobalStyles />
      <AspectRatioPrimitive.Root
        data-slot="aspect-ratio"
        className={cn("kf-aspect-ratio", className)}
        {...props}
      />
    </>
  );
}

export { AspectRatio };
