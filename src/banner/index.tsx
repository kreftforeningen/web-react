"use client";

import * as React from "react";
import { forwardRef } from "react";
import { createGlobalStyle } from "styled-components";

import { Button } from "@/button";

import { cn } from "@/lib/utils";

type BannerVariant = "default" | "right" | "full";
type BannerColor = "default";

const BannerGlobalStyles = createGlobalStyle`
  .kf-banner-container {
    container-type: inline-size;
    container-name: banner-container;
  }

  .kf-banner {
    display: grid;
    grid-template-columns: 1fr;
    border-radius: var(--kf-radius-2xl, 1rem);
    overflow: hidden;
    min-height: auto;
    position: relative;
  }

  .kf-banner__image {
    order: 1;
    width: 100%;
    height: 100%;
    max-height: 18.75rem;
    object-fit: cover;
    object-position: center;
  }

  @container banner-container (min-width: 40rem) {
    .kf-banner {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .kf-banner:has(.kf-banner__image) {
      min-height: 25rem;
    }

    .kf-banner__image {
      max-height: none;
    }

    .kf-banner[data-variant="full"] {
      grid-template-columns: 1fr;
    }
  }

  .kf-banner[data-color="default"] {
    background: var(--kf-color-blue-100, #dbeafe);
  }

  .dark .kf-banner[data-color="default"] {
    background: var(--kf-color-blue-900, #1d4ed8);
  }

  .kf-banner[data-variant="right"] .kf-banner__image {
    order: 1;
  }

  @container banner-container (min-width: 40rem) {
    .kf-banner[data-variant="right"] .kf-banner__image {
      order: 2;
    }
  }

  .kf-banner[data-variant="full"] .kf-banner__image {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index: 0;
    object-fit: cover;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }


  .kf-banner__content {
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 6);
    padding: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-banner[data-variant="full"] .kf-banner__content {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    align-self: center;
    justify-self: flex-start;
    max-width: 26rem;
    color: var(--kf-color-white, #ffffff);
    position: relative;
    z-index: 2;
  }

  .kf-banner[data-variant="full"]::before {
    content: "";
    position: absolute;
    inset: 0;
    background: color-mix(
      in srgb,
      var(--kf-color-gray-900, #1d4ed8) 75%,
      transparent
    );
    z-index: 1;
    pointer-events: none;
  }

  @container banner-container (min-width: 40rem) {
    .kf-banner[data-variant="right"] .kf-banner__content {
      order: 1;
    }
  }

  .kf-banner__title {
    margin: 0;
    font-size: var(--kf-text-3xl, 2rem);
    line-height: var(--kf-text-3xl--line-height, 1.3333333333);
    font-weight: 700;
  }

  .kf-banner__description {
    line-height: var(--kf-text-base--line-height, 1.4285714286);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;

    & > p:first-child {
      margin-block-start: 0;
    }

    & > p:last-child {
      margin-block-end: 0;
    }
  }

  .kf-banner[data-variant="full"] .kf-banner__description {
    -webkit-line-clamp: 3;
  }

  @container banner-container (min-width: 40rem) {
    .kf-banner[data-variant="full"] .kf-banner__description {
      -webkit-line-clamp: 4;
    }
  }
  

  .kf-banner__actions {
    margin-block-start: calc(var(--kf-spacing, 0.25rem) * 2);
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
    <div className="kf-banner-container">
      <BannerGlobalStyles />
      <div
        ref={ref}
        data-slot="banner"
        data-variant={variant}
        data-color={color}
        className={cn("kf-banner", variant === "full" && "dark", className)}
        {...props}
      >
        {children}
      </div>
    </div>
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
