"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

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
  "margin-inline": { css: "margin-inline", fallback: "0" },
  "margin-block": { css: "margin-block", fallback: "0" },
  "padding-inline": { css: "padding-inline", fallback: "0" },
  "padding-block": { css: "padding-block", fallback: "0" },
} as const;

const responsiveBaseStyles = Object.entries(propertyConfig)
  .map(
    ([key, value]) =>
      `    ${value.css}: var(--kf-bleed-${key}-base, ${value.fallback});`
  )
  .join("\n");

const responsiveBreakpointStyles = (
  Object.entries(breakpoints) as [Breakpoint, string][]
)
  .map(
    ([bp, size]) => `
@media (min-width: ${size}) {
  .kf-bleed {
${Object.entries(propertyConfig)
  .map(
    ([key, value]) =>
      `    ${value.css}: var(--kf-bleed-${key}-${bp}, var(--kf-bleed-${key}-base, ${value.fallback}));`
  )
  .join("\n")}
  }
}`
  )
  .join("\n");

const BleedGlobalStyles = createGlobalStyle`
  .kf-bleed {
    display: block;
    ${responsiveBaseStyles}
  }

  ${responsiveBreakpointStyles}
`;

const isResponsiveObject = <T,>(
  value: ResponsiveValue<T>
): value is ResponsiveObject<T> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

type Axis = "inline" | "block";
type BleedSpacingValue = string | number;

const FULL_BLEED_EXPRESSION = "calc((100vw - 100%) / 2)";
const ONE_PX = "1px";

const toSpacingFallback = (token: string, magnitude: number) => {
  const multiplier = magnitude / 4;
  return `var(--kf-space-${token}, calc(var(--kf-spacing, 0.25rem) * ${Number(
    multiplier.toFixed(4)
  )}))`;
};

const parseSpaceToken = (value: string) => {
  const suffix = value.replace("space-", "");
  const altMatch = suffix.match(/^(\d+)-alt$/);
  if (altMatch) {
    return Number(altMatch[1]) + 0.5;
  }
  if (/^0\d+$/.test(suffix)) {
    return Number(suffix) / 10;
  }
  if (/^\d+(\.\d+)?$/.test(suffix)) {
    return Number(suffix);
  }
  return undefined;
};

const normalizeSpacingValue = (value: string | number, axis: Axis): string => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return `calc(var(--kf-spacing, 0.25rem) * ${value})`;
  }

  const raw = value.toString().trim();

  if (!raw || raw === "0") {
    return "0";
  }

  if (raw === "px") {
    return ONE_PX;
  }

  if (raw === "full") {
    return axis === "inline" ? FULL_BLEED_EXPRESSION : "0";
  }

  if (raw.startsWith("var(") || raw.startsWith("calc(")) {
    return raw;
  }

  if (raw.startsWith("--")) {
    return `var(${raw})`;
  }

  if (/^-?\d+(\.\d+)?(rem|px|vw|vh|%)$/.test(raw)) {
    return raw;
  }

  if (/^-?\d+(\.\d+)?$/.test(raw)) {
    return `calc(var(--kf-spacing, 0.25rem) * ${raw})`;
  }

  if (raw.startsWith("space-")) {
    const magnitude = parseSpaceToken(raw);
    if (magnitude !== undefined) {
      return toSpacingFallback(raw.replace("space-", ""), magnitude);
    }
  }

  return raw;
};

const applySign = (value: string, negate: boolean) => {
  if (!negate) {
    return value;
  }

  if (!value || value === "0" || value.startsWith("-")) {
    return value || "0";
  }

  return `calc(${value} * -1)`;
};

const formatBleedValue = (
  value: BleedSpacingValue,
  axis: Axis,
  negate: boolean
) => {
  if (typeof value === "string") {
    const parts = value
      .split(/\s+/)
      .map((part) => part.trim())
      .filter(Boolean);

    if (parts.length > 1) {
      return parts
        .map((part) => applySign(normalizeSpacingValue(part, axis), negate))
        .join(" ");
    }
  }

  return applySign(normalizeSpacingValue(value, axis), negate);
};

const assignBleedVars = (
  value: ResponsiveValue<BleedSpacingValue> | undefined,
  key: keyof typeof propertyConfig,
  axis: Axis,
  negate: boolean
) => {
  if (value === undefined) {
    return {};
  }

  const styles: Record<string, string> = {};

  const setValue = (val: BleedSpacingValue, suffix: string) => {
    styles[`--kf-bleed-${key}-${suffix}`] = formatBleedValue(val, axis, negate);
  };

  if (!isResponsiveObject(value)) {
    setValue(value, "base");
    return styles as React.CSSProperties;
  }

  if (value.base !== undefined) {
    setValue(value.base, "base");
  }

  (Object.keys(breakpoints) as Breakpoint[]).forEach((bp) => {
    if (value[bp] !== undefined) {
      setValue(value[bp] as BleedSpacingValue, bp);
    }
  });

  return styles as React.CSSProperties;
};

type BleedProps<T extends React.ElementType = "div"> = {
  as?: T;
  asChild?: boolean;
  marginInline?: ResponsiveValue<BleedSpacingValue>;
  marginBlock?: ResponsiveValue<BleedSpacingValue>;
  reflectivePadding?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  | "as"
  | "style"
  | "className"
  | "children"
  | "margin"
  | "marginInline"
  | "marginBlock"
  | "padding"
  | "paddingInline"
  | "paddingBlock"
>;

const Bleed = React.forwardRef<HTMLDivElement, BleedProps>(
  (
    {
      as,
      asChild = false,
      marginInline,
      marginBlock,
      reflectivePadding = false,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : as ?? "div";

    const styleVars: React.CSSProperties = {
      ...assignBleedVars(marginInline, "margin-inline", "inline", true),
      ...assignBleedVars(marginBlock, "margin-block", "block", true),
      ...assignBleedVars(
        reflectivePadding ? marginInline : undefined,
        "padding-inline",
        "inline",
        false
      ),
      ...assignBleedVars(
        reflectivePadding ? marginBlock : undefined,
        "padding-block",
        "block",
        false
      ),
    };

    return (
      <>
        <BleedGlobalStyles />
        <Comp
          ref={ref}
          data-slot="bleed"
          className={cn("kf-bleed", className)}
          style={{ ...styleVars, ...style }}
          {...props}
        >
          {children}
        </Comp>
      </>
    );
  }
);

Bleed.displayName = "Bleed";

export { Bleed };
