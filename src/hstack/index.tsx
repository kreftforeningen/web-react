"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

// Breakpoints mirror @kreftforeningen/web-css tokens but are hard-coded so media queries remain valid.
const breakpoints = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
} as const;

type Breakpoint = keyof typeof breakpoints;

type ResponsiveObject<T> = {
  base?: T;
} & Partial<Record<Breakpoint, T>>;

type ResponsiveValue<T> = T | ResponsiveObject<T>;

const propertyConfig = {
  gap: { css: "gap", fallback: "calc(var(--kf-spacing, 0.25rem) * 2)" },
  justify: {
    css: "justify-content",
    fallback: "flex-start",
  },
  align: {
    css: "align-items",
    fallback: "stretch",
  },
  wrap: {
    css: "flex-wrap",
    fallback: "nowrap",
  },
  padding: { css: "padding", fallback: "0" },
  "padding-inline": { css: "padding-inline", fallback: "0" },
  "padding-block": { css: "padding-block", fallback: "0" },
  margin: { css: "margin", fallback: "0" },
  "margin-inline": { css: "margin-inline", fallback: "0" },
  "margin-block": { css: "margin-block", fallback: "0" },
  width: { css: "width", fallback: "auto" },
  "min-width": { css: "min-width", fallback: "0" },
  "max-width": { css: "max-width", fallback: "none" },
  height: { css: "height", fallback: "auto" },
  "min-height": { css: "min-height", fallback: "0" },
  "max-height": { css: "max-height", fallback: "none" },
  position: { css: "position", fallback: "static" },
  inset: { css: "inset", fallback: "auto" },
  top: { css: "top", fallback: "auto" },
  right: { css: "right", fallback: "auto" },
  bottom: { css: "bottom", fallback: "auto" },
  left: { css: "left", fallback: "auto" },
  "flex-basis": { css: "flex-basis", fallback: "auto" },
  "flex-grow": { css: "flex-grow", fallback: "0" },
  "flex-shrink": { css: "flex-shrink", fallback: "1" },
  "grid-column": { css: "grid-column", fallback: "auto" },
  overflow: { css: "overflow", fallback: "visible" },
  "overflow-x": { css: "overflow-x", fallback: "visible" },
  "overflow-y": { css: "overflow-y", fallback: "visible" },
} as const;

const responsiveBaseStyles = Object.entries(propertyConfig)
  .map(
    ([key, value]) =>
      `    ${value.css}: var(--kf-hstack-${key}-base, ${value.fallback});`
  )
  .join("\n");

const responsiveBreakpointStyles = (
  Object.entries(breakpoints) as [Breakpoint, string][]
)
  .map(
    ([bp, size]) => `
@media (min-width: ${size}) {
  .kf-hstack {
${Object.entries(propertyConfig)
  .map(
    ([key, value]) =>
      `    ${value.css}: var(--kf-hstack-${key}-${bp}, var(--kf-hstack-${key}-base, ${value.fallback}));`
  )
  .join("\n")}
  }
}`
  )
  .join("\n");

const HStackGlobalStyles = createGlobalStyle`
  .kf-hstack {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: row;
    width: 100%;
    ${responsiveBaseStyles}
  }

  ${responsiveBreakpointStyles}
`;

const isResponsiveObject = <T,>(
  value: ResponsiveValue<T>
): value is ResponsiveObject<T> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const formatSpacingValue = (value: string | number) => {
  return typeof value === "number"
    ? `calc(var(--kf-spacing, 0.25rem) * ${value})`
    : value;
};

const formatLengthValue = (value: string | number) => {
  return typeof value === "number" ? `${value}px` : value;
};

const formatTokenValue = (value: string | number | boolean) => {
  if (typeof value === "boolean") {
    return value ? "wrap" : "nowrap";
  }
  return typeof value === "number" ? `${value}` : value;
};

const assignResponsiveVars = <T,>(
  value: ResponsiveValue<T> | undefined,
  formatter: (val: T) => string,
  key: keyof typeof propertyConfig
) => {
  if (value === undefined) {
    return {};
  }

  const styles: Record<string, string | number> = {};

  if (!isResponsiveObject(value)) {
    styles[`--kf-hstack-${key}-base`] = formatter(value);
    return styles as React.CSSProperties;
  }

  if (value.base !== undefined) {
    styles[`--kf-hstack-${key}-base`] = formatter(value.base);
  }

  (Object.keys(breakpoints) as Breakpoint[]).forEach((bp) => {
    if (value[bp] !== undefined) {
      styles[`--kf-hstack-${key}-${bp}`] = formatter(value[bp] as T);
    }
  });

  return styles as React.CSSProperties;
};

type LengthValue = string | number;

type HStackProps<T extends React.ElementType = "div"> = {
  as?: T;
  asChild?: boolean;
  gap?: ResponsiveValue<LengthValue>;
  justify?: ResponsiveValue<
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly"
  >;
  align?: ResponsiveValue<"start" | "center" | "end" | "stretch" | "baseline">;
  wrap?: ResponsiveValue<boolean>;
  padding?: ResponsiveValue<LengthValue>;
  paddingInline?: ResponsiveValue<LengthValue>;
  paddingBlock?: ResponsiveValue<LengthValue>;
  margin?: ResponsiveValue<LengthValue>;
  marginInline?: ResponsiveValue<LengthValue>;
  marginBlock?: ResponsiveValue<LengthValue>;
  width?: ResponsiveValue<LengthValue>;
  minWidth?: ResponsiveValue<LengthValue>;
  maxWidth?: ResponsiveValue<LengthValue>;
  height?: ResponsiveValue<LengthValue>;
  minHeight?: ResponsiveValue<LengthValue>;
  maxHeight?: ResponsiveValue<LengthValue>;
  position?: ResponsiveValue<
    "static" | "relative" | "absolute" | "fixed" | "sticky"
  >;
  inset?: ResponsiveValue<LengthValue>;
  top?: ResponsiveValue<LengthValue>;
  right?: ResponsiveValue<LengthValue>;
  bottom?: ResponsiveValue<LengthValue>;
  left?: ResponsiveValue<LengthValue>;
  flexBasis?: ResponsiveValue<LengthValue>;
  flexGrow?: ResponsiveValue<string | number>;
  flexShrink?: ResponsiveValue<string | number>;
  gridColumn?: ResponsiveValue<string>;
  overflow?: ResponsiveValue<"auto" | "visible" | "hidden" | "clip" | "scroll">;
  overflowX?: ResponsiveValue<
    "auto" | "visible" | "hidden" | "clip" | "scroll"
  >;
  overflowY?: ResponsiveValue<
    "auto" | "visible" | "hidden" | "clip" | "scroll"
  >;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "as" | "style" | "align" | "justify" | "gap" | "children" | "className"
>;

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  (
    {
      as,
      asChild = false,
      gap,
      justify,
      align,
      wrap,
      padding,
      paddingInline,
      paddingBlock,
      margin,
      marginInline,
      marginBlock,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      position,
      inset,
      top,
      right,
      bottom,
      left,
      flexBasis,
      flexGrow,
      flexShrink,
      gridColumn,
      overflow,
      overflowX,
      overflowY,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : as ?? "div";

    const styleVars: React.CSSProperties = {
      ...assignResponsiveVars(gap, formatSpacingValue, "gap"),
      ...assignResponsiveVars(justify, formatTokenValue, "justify"),
      ...assignResponsiveVars(align, formatTokenValue, "align"),
      ...assignResponsiveVars(wrap, formatTokenValue, "wrap"),
      ...assignResponsiveVars(padding, formatSpacingValue, "padding"),
      ...assignResponsiveVars(
        paddingInline,
        formatSpacingValue,
        "padding-inline"
      ),
      ...assignResponsiveVars(
        paddingBlock,
        formatSpacingValue,
        "padding-block"
      ),
      ...assignResponsiveVars(margin, formatSpacingValue, "margin"),
      ...assignResponsiveVars(
        marginInline,
        formatSpacingValue,
        "margin-inline"
      ),
      ...assignResponsiveVars(marginBlock, formatSpacingValue, "margin-block"),
      ...assignResponsiveVars(width, formatLengthValue, "width"),
      ...assignResponsiveVars(minWidth, formatLengthValue, "min-width"),
      ...assignResponsiveVars(maxWidth, formatLengthValue, "max-width"),
      ...assignResponsiveVars(height, formatLengthValue, "height"),
      ...assignResponsiveVars(minHeight, formatLengthValue, "min-height"),
      ...assignResponsiveVars(maxHeight, formatLengthValue, "max-height"),
      ...assignResponsiveVars(position, formatTokenValue, "position"),
      ...assignResponsiveVars(inset, formatSpacingValue, "inset"),
      ...assignResponsiveVars(top, formatSpacingValue, "top"),
      ...assignResponsiveVars(right, formatSpacingValue, "right"),
      ...assignResponsiveVars(bottom, formatSpacingValue, "bottom"),
      ...assignResponsiveVars(left, formatSpacingValue, "left"),
      ...assignResponsiveVars(flexBasis, formatLengthValue, "flex-basis"),
      ...assignResponsiveVars(flexGrow, formatTokenValue, "flex-grow"),
      ...assignResponsiveVars(flexShrink, formatTokenValue, "flex-shrink"),
      ...assignResponsiveVars(gridColumn, formatTokenValue, "grid-column"),
      ...assignResponsiveVars(overflow, formatTokenValue, "overflow"),
      ...assignResponsiveVars(overflowX, formatTokenValue, "overflow-x"),
      ...assignResponsiveVars(overflowY, formatTokenValue, "overflow-y"),
    };

    return (
      <Comp
        ref={ref}
        data-slot="hstack"
        className={cn("kf-hstack", className)}
        style={{ ...styleVars, ...style }}
        {...props}
      >
        <HStackGlobalStyles />
        {children}
      </Comp>
    );
  }
);

HStack.displayName = "HStack";

export { HStack };
