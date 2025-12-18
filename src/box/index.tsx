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
  padding: { css: "padding", fallback: "0" },
  margin: { css: "margin", fallback: "0" },
  "margin-inline": { css: "margin-inline", fallback: "0" },
  "margin-block": { css: "margin-block", fallback: "0" },
  width: { css: "width", fallback: "auto" },
  "min-width": { css: "min-width", fallback: "0" },
  "max-width": { css: "max-width", fallback: "none" },
  height: { css: "height", fallback: "auto" },
  "min-height": { css: "min-height", fallback: "0" },
  "max-height": { css: "max-height", fallback: "none" },
  inset: { css: "inset", fallback: "auto" },
  top: { css: "top", fallback: "auto" },
  right: { css: "right", fallback: "auto" },
  bottom: { css: "bottom", fallback: "auto" },
  left: { css: "left", fallback: "auto" },
  "flex-basis": { css: "flex-basis", fallback: "auto" },
  "flex-grow": { css: "flex-grow", fallback: "0" },
  "flex-shrink": { css: "flex-shrink", fallback: "1" },
  "grid-column": { css: "grid-column", fallback: "auto" },
  position: { css: "position", fallback: "static" },
  overflow: { css: "overflow", fallback: "visible" },
  "overflow-x": { css: "overflow-x", fallback: "visible" },
  "overflow-y": { css: "overflow-y", fallback: "visible" },
} as const;

const responsiveBaseStyles = Object.entries(propertyConfig)
  .map(
    ([key, value]) =>
      `    ${value.css}: var(--kf-box-${key}-base, ${value.fallback});`
  )
  .join("\n");

const responsiveBreakpointStyles = (
  Object.entries(breakpoints) as [Breakpoint, string][]
)
  .map(
    ([bp, size]) => `
@media (min-width: ${size}) {
  .kf-box {
${Object.entries(propertyConfig)
  .map(
    ([key, value]) =>
      `    ${value.css}: var(--kf-box-${key}-${bp}, var(--kf-box-${key}-base, ${value.fallback}));`
  )
  .join("\n")}
  }
}`
  )
  .join("\n");

const boxColors = {
  gray: {
    light: {
      background: "var(--kf-color-gray-100)",
      text: "var(--kf-color-gray-900)",
    },
    dark: {
      background: "var(--kf-color-gray-900)",
      text: "var(--kf-color-gray-100)",
    },
  },
  blue: {
    light: {
      background: "var(--kf-color-blue-100)",
      text: "var(--kf-color-blue-900)",
    },
    dark: {
      background: "var(--kf-color-blue-900)",
      text: "var(--kf-color-blue-100)",
    },
  },
  green: {
    light: {
      background: "var(--kf-color-green-100)",
      text: "var(--kf-color-green-900)",
    },
    dark: {
      background: "var(--kf-color-green-900)",
      text: "var(--kf-color-green-100)",
    },
  },
  orange: {
    light: {
      background: "var(--kf-color-orange-100)",
      text: "var(--kf-color-orange-900)",
    },
    dark: {
      background: "var(--kf-color-orange-900)",
      text: "var(--kf-color-orange-100)",
    },
  },
  pink: {
    light: {
      background: "var(--kf-color-pink-100)",
      text: "var(--kf-color-pink-900)",
    },
    dark: {
      background: "var(--kf-color-pink-900)",
      text: "var(--kf-color-pink-100)",
    },
  },
  purple: {
    light: {
      background: "var(--kf-color-purple-100)",
      text: "var(--kf-color-purple-900)",
    },
    dark: {
      background: "var(--kf-color-purple-900)",
      text: "var(--kf-color-purple-100)",
    },
  },
  red: {
    light: {
      background: "var(--kf-color-red-100)",
      text: "var(--kf-color-red-900)",
    },
    dark: {
      background: "var(--kf-color-red-900)",
      text: "var(--kf-color-red-100)",
    },
  },
} as const;

const colorPadding = {
  base: "calc(var(--kf-spacing, 0.25rem) * 3.5)",
  sm: "calc(var(--kf-spacing, 0.25rem) * 4)",
  md: "calc(var(--kf-spacing, 0.25rem) * 4.5)",
  lg: "calc(var(--kf-spacing, 0.25rem) * 5)",
  xl: "calc(var(--kf-spacing, 0.25rem) * 5)",
} as const;

type BoxColor = keyof typeof boxColors;

const BoxGlobalStyles = createGlobalStyle`
  .kf-box {
    font-family: var(--kf-font-sans);
    display: block;
    background-color: var(--kf-box-bg-light, transparent);
    color: var(--kf-box-text-light, inherit);
    ${responsiveBaseStyles}
  }

  .dark .kf-box {
    background-color: var(--kf-box-bg-dark, var(--kf-box-bg-light, transparent));
    color: var(--kf-box-text-dark, var(--kf-box-text-light, inherit));
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

const formatTokenValue = (value: string | number) => {
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
    styles[`--kf-box-${key}-base`] = formatter(value);
    return styles as React.CSSProperties;
  }

  if (value.base !== undefined) {
    styles[`--kf-box-${key}-base`] = formatter(value.base);
  }

  (Object.keys(breakpoints) as Breakpoint[]).forEach((bp) => {
    if (value[bp] !== undefined) {
      styles[`--kf-box-${key}-${bp}`] = formatter(value[bp] as T);
    }
  });

  return styles as React.CSSProperties;
};

type LengthValue = string | number;

type BoxProps<T extends React.ElementType = "div"> = {
  as?: T;
  asChild?: boolean;
  color?: BoxColor;
  margin?: ResponsiveValue<LengthValue>;
  marginInline?: ResponsiveValue<LengthValue>;
  marginBlock?: ResponsiveValue<LengthValue>;
  width?: ResponsiveValue<LengthValue>;
  minWidth?: ResponsiveValue<LengthValue>;
  maxWidth?: ResponsiveValue<LengthValue>;
  height?: ResponsiveValue<LengthValue>;
  minHeight?: ResponsiveValue<LengthValue>;
  maxHeight?: ResponsiveValue<LengthValue>;
  inset?: ResponsiveValue<LengthValue>;
  top?: ResponsiveValue<LengthValue>;
  right?: ResponsiveValue<LengthValue>;
  bottom?: ResponsiveValue<LengthValue>;
  left?: ResponsiveValue<LengthValue>;
  position?: ResponsiveValue<
    "static" | "relative" | "absolute" | "fixed" | "sticky"
  >;
  overflow?: ResponsiveValue<"auto" | "visible" | "hidden" | "clip" | "scroll">;
  overflowX?: ResponsiveValue<
    "auto" | "visible" | "hidden" | "clip" | "scroll"
  >;
  overflowY?: ResponsiveValue<
    "auto" | "visible" | "hidden" | "clip" | "scroll"
  >;
  flexBasis?: ResponsiveValue<LengthValue>;
  flexGrow?: ResponsiveValue<string | number>;
  flexShrink?: ResponsiveValue<string | number>;
  gridColumn?: ResponsiveValue<string>;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  | "as"
  | "style"
  | "children"
  | "className"
  | "padding"
  | "color"
  | "margin"
  | "width"
  | "height"
>;

function Box<T extends React.ElementType = "div">({
  as,
  asChild = false,
  color,
  margin,
  marginInline,
  marginBlock,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  inset,
  top,
  right,
  bottom,
  left,
  position,
  overflow,
  overflowX,
  overflowY,
  flexBasis,
  flexGrow,
  flexShrink,
  gridColumn,
  className,
  style,
  children,
  ...props
}: BoxProps<T>) {
  const Comp = asChild ? Slot : as ?? "div";

  const baseStyleVars: React.CSSProperties = {
    ...assignResponsiveVars(margin, formatSpacingValue, "margin"),
    ...assignResponsiveVars(marginInline, formatSpacingValue, "margin-inline"),
    ...assignResponsiveVars(marginBlock, formatSpacingValue, "margin-block"),
    ...assignResponsiveVars(width, formatLengthValue, "width"),
    ...assignResponsiveVars(minWidth, formatLengthValue, "min-width"),
    ...assignResponsiveVars(maxWidth, formatLengthValue, "max-width"),
    ...assignResponsiveVars(height, formatLengthValue, "height"),
    ...assignResponsiveVars(minHeight, formatLengthValue, "min-height"),
    ...assignResponsiveVars(maxHeight, formatLengthValue, "max-height"),
    ...assignResponsiveVars(inset, formatLengthValue, "inset"),
    ...assignResponsiveVars(top, formatLengthValue, "top"),
    ...assignResponsiveVars(right, formatLengthValue, "right"),
    ...assignResponsiveVars(bottom, formatLengthValue, "bottom"),
    ...assignResponsiveVars(left, formatLengthValue, "left"),
    ...assignResponsiveVars(position, formatTokenValue, "position"),
    ...assignResponsiveVars(overflow, formatTokenValue, "overflow"),
    ...assignResponsiveVars(overflowX, formatTokenValue, "overflow-x"),
    ...assignResponsiveVars(overflowY, formatTokenValue, "overflow-y"),
    ...assignResponsiveVars(flexBasis, formatLengthValue, "flex-basis"),
    ...assignResponsiveVars(flexGrow, formatTokenValue, "flex-grow"),
    ...assignResponsiveVars(flexShrink, formatTokenValue, "flex-shrink"),
    ...assignResponsiveVars(gridColumn, formatTokenValue, "grid-column"),
  };

  const colorScheme = color ? boxColors[color] : null;

  const colorVars: React.CSSProperties = colorScheme
    ? ({
        "--kf-box-bg-light": colorScheme.light.background,
        "--kf-box-text-light": colorScheme.light.text,
        "--kf-box-bg-dark": colorScheme.dark.background,
        "--kf-box-text-dark": colorScheme.dark.text,
      } as React.CSSProperties)
    : {};

  const paddingVars: React.CSSProperties = color
    ? ({
        "--kf-box-padding-base": colorPadding.base,
        "--kf-box-padding-sm": colorPadding.sm,
        "--kf-box-padding-md": colorPadding.md,
        "--kf-box-padding-lg": colorPadding.lg,
        "--kf-box-padding-xl": colorPadding.xl,
      } as React.CSSProperties)
    : {};

  const borderVars: React.CSSProperties = color
    ? ({
        borderRadius: "var(--kf-radius-xl)",
      } as React.CSSProperties)
    : {};

  const styleVars: React.CSSProperties = {
    ...baseStyleVars,
    ...colorVars,
    ...paddingVars,
    ...borderVars,
  };

  return (
    <>
      <BoxGlobalStyles />
      <Comp
        data-slot="box"
        className={cn("kf-box", className)}
        style={{ ...styleVars, ...style }}
        {...props}
      >
        {children}
      </Comp>
    </>
  );
}

export { Box };
