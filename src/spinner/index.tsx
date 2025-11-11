import { createGlobalStyle } from "styled-components";
import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

const SpinnerGlobalStyles = createGlobalStyle`
  @keyframes kf-spinner-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .kf-spinner {
    font-family: var(--kf-font-sans);
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    animation: kf-spinner-rotate 600ms linear infinite;
  }
`;

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <>
      <SpinnerGlobalStyles />
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("kf-spinner", className)}
        {...props}
      />
    </>
  );
}

export { Spinner };
