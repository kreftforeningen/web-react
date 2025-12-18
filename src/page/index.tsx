"use client";

import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { cn } from "@/lib/utils";

const blockWidths = {
  sm: "var(--kf-page-width-sm, 40rem)",
  md: "var(--kf-page-width-md, 56rem)",
  lg: "var(--kf-page-width-lg, 64rem)",
  xl: "var(--kf-page-width-xl, 72rem)",
  "2xl": "var(--kf-page-width-2xl, 80rem)",
  "3xl": "var(--kf-page-width-3xl, 88rem)",
  full: "100%",
} as const;

const widthStyles = Object.entries(blockWidths)
  .map(
    ([key, value]) => `
  .kf-page__block[data-width="${key}"] {
    max-width: ${value};
  }`
  )
  .join("\n");

const PageGlobalStyles = createGlobalStyle`
  .kf-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--kf-page-background, transparent);
  }

  .kf-page__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--kf-page-block-gap, calc(var(--kf-spacing, 0.25rem) * 6));
  }

  .kf-page__footer {
    margin-top: var(--kf-page-footer-gap, calc(var(--kf-spacing, 0.25rem) * 10));
  }

  .kf-page__block {
    width: 100%;
    margin-inline: auto;
  }

  .kf-page__block[data-gutters="true"] {
    padding-inline: var(--kf-page-gutter, calc(var(--kf-spacing, 0.25rem) * 6));
  }

  ${widthStyles}
`;

type PageProps = React.HTMLAttributes<HTMLDivElement> & {
  footer?: React.ReactNode;
};

type PageBlockWidth = keyof typeof blockWidths;

type PageBlockProps<T extends React.ElementType> = {
  as?: T;
  width?: PageBlockWidth;
  gutters?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "width">;

const PageBlock = <T extends React.ElementType = "section">({
  as,
  width = "lg",
  gutters = false,
  className,
  ...props
}: PageBlockProps<T>) => {
  const Comp = (as ?? "section") as React.ElementType;

  return (
    <Comp
      data-width={width}
      data-gutters={gutters ? "true" : "false"}
      className={cn("kf-page__block", className)}
      {...props}
    />
  );
};

const PageComponent = ({
  children,
  footer,
  className,
  ...props
}: PageProps) => {
  return (
    <>
      <PageGlobalStyles />
      <div className={cn("kf-page", className)} {...props}>
        <div className="kf-page__body">{children}</div>
        {footer ? <div className="kf-page__footer">{footer}</div> : null}
      </div>
    </>
  );
};

type PageComponentType = React.FC<PageProps> & {
  Block: typeof PageBlock;
};

const Page = PageComponent as PageComponentType;

Page.Block = PageBlock;

export { Page, PageBlock };
