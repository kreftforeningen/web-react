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
  columns: {
    css: "grid-template-columns",
    fallback: "minmax(0, 1fr)",
  },
  gap: {
    css: "gap",
    fallback: "calc(var(--kf-spacing, 0.25rem) * 2)",
  },
  padding: {
    css: "padding",
    fallback: "0",
  },
  "padding-inline": {
    css: "padding-inline",
    fallback: "var(--kf-hgrid-padding-base, 0)",
  },
  "padding-block": {
    css: "padding-block",
    fallback: "var(--kf-hgrid-padding-base, 0)",
  },
  margin: {
    css: "margin",
    fallback: "0",
  },
  "margin-inline": {
    css: "margin-inline",
    fallback: "var(--kf-hgrid-margin-base, 0)",
  },
  "margin-block": {
    css: "margin-block",
    fallback: "var(--kf-hgrid-margin-base, 0)",
  },
  width: {
    css: "width",
    fallback: "auto",
  },
  "min-width": {
    css: "min-width",
    fallback: "0",
  },
  "max-width": {
    css: "max-width",
    fallback: "none",
  },
  height: {
    css: "height",
    fallback: "auto",
  },
  "min-height": {
    css: "min-height",
    fallback: "0",
  },
  "max-height": {
    css: "max-height",
    fallback: "none",
  },
} as const;

const responsiveBaseStyles = Object.entries(propertyConfig)
  .map(
    ([key, value]) =>
      `    ${value.css}: var(--kf-hgrid-${key}-base, ${value.fallback});`
  )
  .join("\n");

const responsiveBreakpointStyles = (
  Object.entries(breakpoints) as [Breakpoint, string][]
)
  .map(
    ([bp, size]) => `
@media (min-width: ${size}) {
  .kf-hgrid {
${Object.entries(propertyConfig)
  .map(
    ([key, value]) =>
      `    ${value.css}: var(--kf-hgrid-${key}-${bp}, var(--kf-hgrid-${key}-base, ${value.fallback}));`
  )
  .join("\n")}
  }
}`
  )
  .join("\n");

const HGridGlobalStyles = createGlobalStyle`
  .kf-hgrid {
    font-family: var(--kf-font-sans);
    display: grid;
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

const formatColumnsValue = (value: string | number) => {
  if (typeof value === "number") {
    return `repeat(${Math.max(1, value)}, minmax(0, 1fr))`;
  }
  return value;
};

const assignResponsiveVars = <T,>(
  value: ResponsiveValue<T> | undefined,
  formatter: (val: T) => string,
  key: keyof typeof propertyConfig | "columns"
) => {
  if (value === undefined) {
    return {};
  }

  const styles: Record<string, string | number> = {};

  if (!isResponsiveObject(value)) {
    styles[`--kf-hgrid-${key}-base`] = formatter(value);
    return styles as React.CSSProperties;
  }

  if (value.base !== undefined) {
    styles[`--kf-hgrid-${key}-base`] = formatter(value.base);
  }

  (Object.keys(breakpoints) as Breakpoint[]).forEach((bp) => {
    if (value[bp] !== undefined) {
      styles[`--kf-hgrid-${key}-${bp}`] = formatter(value[bp] as T);
    }
  });

  return styles as React.CSSProperties;
};

type LengthValue = string | number;

type HGridProps<T extends React.ElementType = "div"> = {
  as?: T;
  asChild?: boolean;
  columns?: ResponsiveValue<string | number>;
  gap?: ResponsiveValue<LengthValue>;
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
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "stretch";
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "as" | "style" | "children" | "className"
>;

function HGrid<T extends React.ElementType = "div">({
  as,
  asChild = false,
  columns,
  gap,
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
  align,
  justify,
  className,
  children,
  style,
  ...props
}: HGridProps<T>) {
  const Comp = asChild ? Slot : as ?? "div";

  const styleVars: React.CSSProperties = {
    ...assignResponsiveVars(columns, formatColumnsValue, "columns"),
    ...assignResponsiveVars(gap, formatSpacingValue, "gap"),
    ...assignResponsiveVars(padding, formatSpacingValue, "padding"),
    ...assignResponsiveVars(
      paddingInline,
      formatSpacingValue,
      "padding-inline"
    ),
    ...assignResponsiveVars(paddingBlock, formatSpacingValue, "padding-block"),
    ...assignResponsiveVars(margin, formatSpacingValue, "margin"),
    ...assignResponsiveVars(marginInline, formatSpacingValue, "margin-inline"),
    ...assignResponsiveVars(marginBlock, formatSpacingValue, "margin-block"),
    ...assignResponsiveVars(width, formatLengthValue, "width"),
    ...assignResponsiveVars(minWidth, formatLengthValue, "min-width"),
    ...assignResponsiveVars(maxWidth, formatLengthValue, "max-width"),
    ...assignResponsiveVars(height, formatLengthValue, "height"),
    ...assignResponsiveVars(minHeight, formatLengthValue, "min-height"),
    ...assignResponsiveVars(maxHeight, formatLengthValue, "max-height"),
  };

  if (align) {
    styleVars.alignItems = align;
  }

  if (justify) {
    styleVars.justifyItems = justify;
  }

  return (
    <>
      <HGridGlobalStyles />
      <Comp
        data-slot="hgrid"
        className={cn("kf-hgrid", className)}
        style={{ ...styleVars, ...style }}
        {...props}
      >
        {children}
      </Comp>
    </>
  );
}

export { HGrid };
