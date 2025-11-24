import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const SkeletonGlobalStyles = createGlobalStyle`
  @keyframes kf-skeleton-pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }

  .kf-skeleton {
    border-radius: var(--kf-radius-md, 0.375rem);
    background: var(--kf-color-gray-200, #e5e7eb);
    animation: kf-skeleton-pulse 2.5s ease-in-out infinite;
  }

  .dark .kf-skeleton {
    background: var(--kf-color-gray-700, #374151);
  }
`;

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <SkeletonGlobalStyles />
      <div
        data-slot="skeleton"
        className={cn("kf-skeleton", className)}
        {...props}
      />
    </>
  );
}

export { Skeleton };
