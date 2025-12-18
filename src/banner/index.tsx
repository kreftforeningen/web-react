"use client";

import * as React from "react";
import { forwardRef } from "react";
import { createGlobalStyle } from "styled-components";

import { Button } from "@/button";

import { cn } from "@/lib/utils";

type BannerVariant = "default" | "right" | "full";
type BannerColor = "default";

const BannerGlobalStyles = createGlobalStyle`
  .kf-banner {
    display: grid;
    grid-template-columns: 1fr;
    border-radius: var(--kf-radius-2xl, 1rem);
    overflow: hidden;
    min-height: auto;
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-banner {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      min-height: 25rem;
    }
  }

  .kf-banner[data-color="default"] {
    background: var(--kf-color-blue-100, #dbeafe);
  }

  .dark .kf-banner[data-color="default"] {
    background: var(--kf-color-blue-900, #1d4ed8);
  }

  .kf-banner__image {
    order: 1;
    width: 100%;
    height: 100%;
    max-height: 18.75rem;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-banner__image {
      max-height: none;
    }
  }

  .kf-banner[data-variant="right"] .kf-banner__image {
    order: 1;
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-banner[data-variant="right"] .kf-banner__image {
      order: 2;
    }
  }

  .kf-banner[data-variant="full"] .kf-banner__image {
    grid-column: 1 / -1;
  }

  .kf-banner__content {
    order: 2;
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-banner[data-variant="right"] .kf-banner__content {
      order: 1;
    }
  }

  .kf-banner__title {
    margin: 0;
    font-size: var(--kf-text-2xl, 1.5rem);
    line-height: var(--kf-text-2xl--line-height, 1.3333333333);
    font-weight: 700;
  }

  .kf-banner__description {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-banner__actions {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    align-items: center;
  }
`;

type BannerProps = React.ComponentPropsWithoutRef<"div"> & {
  variant?: BannerVariant;
  color?: BannerColor;
};

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    { variant = "default", color = "default", className, children, ...props },
    ref
  ) => (
    <>
      <BannerGlobalStyles />
      <div
        ref={ref}
        data-slot="banner"
        data-variant={variant}
        data-color={color}
        className={cn("kf-banner", className)}
        {...props}
      >
        {children}
      </div>
    </>
  )
);

Banner.displayName = "Banner";

const BannerImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, style, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("kf-banner__image", className)}
    style={style}
    {...props}
  />
));

BannerImage.displayName = "BannerImage";

const BannerContent = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("kf-banner__content", className)}
        {...props}
      />
    );
  }
);
BannerContent.displayName = "BannerContent";

const BannerTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("kf-banner__title", className)} {...props} />
));

BannerTitle.displayName = "BannerTitle";

const BannerDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("kf-banner__description", className)}
    {...props}
  />
));

BannerDescription.displayName = "BannerDescription";

const BannerButtons = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("kf-banner__actions", className)} {...props} />
));

BannerButtons.displayName = "BannerButtons";

function BannerButtonPrimary({
  className,
  href,
  ...props
}: React.ComponentProps<"button"> & { href: string }) {
  if (!props.children || props.children === "" || !href || href === "") {
    return null;
  }
  return (
    <a href={href}>
      <Button className={className} variant="default" {...props} />
    </a>
  );
}

function BannerButtonSecondary({
  className,
  href,
  ...props
}: React.ComponentProps<"button"> & { href: string }) {
  if (!props.children || props.children === "" || !href || href === "") {
    return null;
  }
  return (
    <a href={href}>
      <Button className={className} variant="outline" {...props} />
    </a>
  );
}

export {
  Banner,
  BannerTitle,
  BannerContent,
  BannerDescription,
  BannerButtons,
  BannerImage,
  BannerButtonPrimary,
  BannerButtonSecondary,
};
