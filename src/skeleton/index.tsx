import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const SkeletonGlobalStyles = createGlobalStyle`
  @keyframes kf-skeleton-pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }

  .kf-skeleton {
    font-family: var(--kf-font-sans);
    border-radius: var(--kf-radius-md, 0.375rem);
    background: color-mix(in srgb, var(--kf-color-gray-200, rgba(148, 163, 184, 0.3)) 100%, transparent);
    animation: kf-skeleton-pulse 1.5s ease-in-out infinite;
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
