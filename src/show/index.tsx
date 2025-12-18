"use client";

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

const showAboveStyles = breakpointEntries
  .map(
    ([name, size]) => `
.kf-show[data-show-mode="above-${name}"] {
  display: none;
}
@media (min-width: ${size}) {
  .kf-show[data-show-mode="above-${name}"] {
    display: unset;
  }
}
`
  )
  .join("\n");

const showBelowStyles = breakpointEntries
  .map(
    ([name, size]) => `
.kf-show[data-show-mode="below-${name}"] {
  display: none;
}
@media (max-width: ${size}) {
  .kf-show[data-show-mode="below-${name}"] {
    display: unset;
  }
}
`
  )
  .join("\n");

const showBetweenStyles = breakpointEntries
  .flatMap((minEntry, minIdx) =>
    breakpointEntries.slice(minIdx).map(
      (maxEntry) => `
.kf-show[data-show-mode="between-${minEntry[0]}-${maxEntry[0]}"] {
  display: none;
}
@media (min-width: ${minEntry[1]}) and (max-width: ${maxEntry[1]}) {
  .kf-show[data-show-mode="between-${minEntry[0]}-${maxEntry[0]}"] {
    display: unset;
  }
}
`
    )
  )
  .join("\n");

const ShowGlobalStyles = createGlobalStyle`
  .kf-show {
    display: unset;
  }

  .kf-show[data-show-mode="never"] {
    display: none;
  }

  ${showAboveStyles}
  ${showBelowStyles}
  ${showBetweenStyles}
`;

type ShowProps<T extends React.ElementType = "div"> = {
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

const resolveShowMode = (
  above?: Breakpoint,
  below?: Breakpoint
): string | null => {
  if (above && below) {
    if (breakpointOrder[above] > breakpointOrder[below]) {
      return "never";
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

function Show<T extends React.ElementType = "div">({
  as,
  asChild = false,
  above,
  below,
  className,
  style,
  children,
  ...props
}: ShowProps<T>) {
  const Comp = asChild ? Slot : as ?? "div";
  const showMode = resolveShowMode(above, below);

  return (
    <>
      <ShowGlobalStyles />
      <Comp
        data-slot="show"
        data-show-mode={showMode ?? undefined}
        className={cn("kf-show", className)}
        style={style}
        {...props}
      >
        {children}
      </Comp>
    </>
  );
}

export { Show };
