"use client";

import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { AspectRatio } from "../aspect-ratio";

const CardGlobalStyles = createGlobalStyle`
  .kf-card {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-2xl, 1rem);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 8);
    overflow: hidden;
    background: var(--kf-color-gray-100, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-card:has(> [data-radix-aspect-ratio-wrapper]:first-child > .kf-card__image) {
    padding-top: 0;
  }
  .kf-card:has(> .kf-card__image:first-child) {
    padding-top: 0;
  }

  .dark .kf-card {
    background: var(--kf-color-gray-900, #0f172a);
    color: var(--kf-color-gray-200, #ffffff);
  }

  .kf-card__header {
    display: grid;
    grid-auto-rows: min-content;
    grid-template-rows: auto auto;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    align-items: flex-start;
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-card__header:has([data-slot="card-action"]) {
    grid-template-columns: 1fr auto;
  }

  .kf-card__action {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: flex-start;
    justify-self: flex-end;
  }

  .kf-card__title {
    font-family: var(--kf-font-condensed);
    font-size: var(--kf-text-2xl, 1.5rem);
    line-height: var(--kf-text-2xl--line-height, 1.3333333333);
    font-weight: 600;
    margin: 0;
  }

  .kf-card__description {
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-gray-600, rgba(15, 23, 42, 0.6));
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 2);
  }
    
  .dark .kf-card__description {
    color: var(--kf-color-gray-400, rgba(15, 23, 42, 0.6));
  }

  .kf-card__content {
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-card__image {
    position: relative;
    overflow: hidden;
    border-radius: inherit;
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.2));
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-card__image picture {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  .kf-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: inherit;
  }

  .kf-card__footer {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 8);
  }
`;

type CardDivProps = React.ComponentPropsWithoutRef<"div">;

const Card = React.forwardRef<HTMLDivElement, CardDivProps>(
  ({ className, ...props }, ref) => (
    <>
      <CardGlobalStyles />
      <div
        ref={ref}
        data-slot="card"
        className={cn("kf-card", className)}
        {...props}
      />
    </>
  )
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, CardDivProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn("kf-card__header", className)}
      {...props}
    />
  )
);

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, CardDivProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-title"
      className={cn("kf-card__title", className)}
      {...props}
    />
  )
);

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, CardDivProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-description"
      className={cn("kf-card__description", className)}
      {...props}
    />
  )
);

CardDescription.displayName = "CardDescription";

const CardAction = React.forwardRef<HTMLDivElement, CardDivProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-action"
      className={cn("kf-card__action", className)}
      {...props}
    />
  )
);

CardAction.displayName = "CardAction";

const CardContent = React.forwardRef<HTMLDivElement, CardDivProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn("kf-card__content", className)}
      {...props}
    />
  )
);

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, CardDivProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn("kf-card__footer", className)}
      {...props}
    />
  )
);

CardFooter.displayName = "CardFooter";

type AspectRatioProps = React.ComponentProps<typeof AspectRatio>;

type CardImageProps = Omit<AspectRatioProps, "children" | "ratio"> & {
  ratio?: number;
  alt?: string;
  title?: string;
  sizes?: string;
  src300: string;
  src500: string;
  src780: string;
  srcWebp300?: string;
  srcWebp500?: string;
  srcWebp780?: string;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
};

function CardImage({
  ratio = 16 / 9,
  className,
  alt,
  title,
  sizes = "(min-width: 1024px) 310px, (min-width: 768px) 220px, (min-width: 640px) 290px, 100vw",
  src300,
  src500,
  src780,
  srcWebp300,
  srcWebp500,
  srcWebp780,
  imgProps,
  ...props
}: CardImageProps) {
  const fallbackSrc = src500 ?? src780 ?? src300;
  const buildSrcSet = (entries: Array<{ src?: string; width: number }>) =>
    entries
      .filter((entry): entry is { src: string; width: number } =>
        Boolean(entry.src)
      )
      .map(({ src, width }) => `${src} ${width}w`)
      .join(", ") || undefined;

  const jpgSrcSet = buildSrcSet([
    { src: src300, width: 300 },
    { src: src500, width: 500 },
    { src: src780, width: 780 },
  ]);

  const webpSrcSet = buildSrcSet([
    { src: srcWebp300, width: 300 },
    { src: srcWebp500, width: 500 },
    { src: srcWebp780, width: 780 },
  ]);

  return (
    <AspectRatio
      data-slot="card-image"
      ratio={ratio}
      className={cn("kf-card__image", className)}
      {...props}
    >
      <picture>
        {webpSrcSet ? (
          <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
        ) : null}
        {jpgSrcSet ? (
          <source type="image/jpeg" srcSet={jpgSrcSet} sizes={sizes} />
        ) : null}
        <img
          src={fallbackSrc}
          alt={alt ?? ""}
          title={title}
          loading="lazy"
          decoding="async"
          {...imgProps}
        />
      </picture>
    </AspectRatio>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardImage,
};
