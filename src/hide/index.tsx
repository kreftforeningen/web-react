import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const breakpointEntries = [
  ["sm", "40rem"],
  ["md", "48rem"],
  ["lg", "64rem"],
  ["xl", "80rem"],
  ["2xl", "96rem"],
] as const;

type Breakpoint = (typeof breakpointEntries)[number][0];

const breakpointOrder = breakpointEntries.reduce((acc, [name], index) => {
  acc[name] = index;
  return acc;
}, {} as Record<Breakpoint, number>);

const hideAboveStyles = breakpointEntries
  .map(
    ([name, size]) => `
@media (min-width: ${size}) {
  .kf-hide[data-hide-mode="above-${name}"] {
    display: none;
  }
}
`
  )
  .join("\n");

const hideBelowStyles = breakpointEntries
  .map(
    ([name, size]) => `
@media (max-width: ${size}) {
  .kf-hide[data-hide-mode="below-${name}"] {
    display: none;
  }
}
`
  )
  .join("\n");

const hideBetweenStyles = breakpointEntries
  .flatMap((minEntry, minIdx) =>
    breakpointEntries.slice(minIdx).map(
      (maxEntry) => `
@media (min-width: ${minEntry[1]}) and (max-width: ${maxEntry[1]}) {
  .kf-hide[data-hide-mode="between-${minEntry[0]}-${maxEntry[0]}"] {
    display: none;
  }
}
`
    )
  )
  .join("\n");

const HideGlobalStyles = createGlobalStyle`
  .kf-hide {
    display: unset;
  }

  ${hideAboveStyles}
  ${hideBelowStyles}
  ${hideBetweenStyles}
`;

type HideProps<T extends React.ElementType = "div"> = {
  as?: T;
  asChild?: boolean;
  above?: Breakpoint;
  below?: Breakpoint;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "as" | "className" | "style" | "above" | "below" | "children"
>;

const resolveHideMode = (
  above?: Breakpoint,
  below?: Breakpoint
): string | null => {
  if (above && below) {
    if (breakpointOrder[above] > breakpointOrder[below]) {
      return null;
    }
    return `between-${above}-${below}`;
  }

  if (above) {
    return `above-${above}`;
  }

  if (below) {
    return `below-${below}`;
  }

  return null;
};

function Hide<T extends React.ElementType = "div">({
  as,
  asChild = false,
  above,
  below,
  className,
  style,
  children,
  ...props
}: HideProps<T>) {
  const Comp = asChild ? Slot : as ?? "div";
  const hideMode = resolveHideMode(above, below);

  return (
    <>
      <HideGlobalStyles />
      <Comp
        data-slot="hide"
        data-hide-mode={hideMode ?? undefined}
        className={cn("kf-hide", className)}
        style={style}
        {...props}
      >
        {children}
      </Comp>
    </>
  );
}

export { Hide };
