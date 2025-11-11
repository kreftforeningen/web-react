import { createGlobalStyle } from "styled-components";

import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

import { cn } from "@/lib/utils";

type PersonVariant = "default" | "list";
type PersonItemColor = "default" | "blue";

const PersonGlobalStyles = createGlobalStyle`
  .kf-person {
    font-family: var(--kf-font-sans);
    display: grid;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-person--default {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-person--default {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: var(--kf-breakpoint-lg, 64rem)) {
    .kf-person--default {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .kf-person--list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .kf-person__item {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: var(--kf-radius-xl, 0.75rem);
    background: color-mix(in srgb, var(--kf-color-surface, rgba(15, 23, 42, 0.04)) 60%, transparent);
  }

  .kf-person__item[data-color="blue"] {
    background: color-mix(in srgb, var(--kf-color-blue-100, #dbeafe) 80%, transparent);
  }

  .dark .kf-person__item {
    background: color-mix(in srgb, var(--kf-color-surface-dark, rgba(148, 163, 184, 0.16)) 70%, transparent);
  }

  .dark .kf-person__item[data-color="blue"] {
    background: color-mix(in srgb, var(--kf-color-blue-950, #0b1120) 80%, transparent);
  }

  .kf-person__image {
    width: 60px;
    height: 60px;
    border-radius: 9999px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .kf-person__image-fallback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: var(--kf-color-gray-700, #374151);
    color: var(--kf-color-gray-100, #f3f4f6);
    font-weight: 600;
  }

  .dark .kf-person__image-fallback {
    background: var(--kf-color-gray-100, #f3f4f6);
    color: var(--kf-color-gray-700, #374151);
  }

  .kf-person__content {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    overflow: hidden;
  }

  .kf-person__name {
    margin: 0;
    font-size: var(--kf-text-base, 1rem);
    font-weight: 600;
  }

  .kf-person__title {
    margin: 0;
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }

  .dark .kf-person__title {
    color: color-mix(in srgb, var(--kf-color-gray-200, #e5e7eb) 80%, transparent);
  }

  .kf-person__link {
    display: block;
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-blue-800, #1d4ed8);
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .kf-person__link:hover,
  .kf-person__link:focus-visible {
    color: var(--kf-color-blue-900, #1e3a8a);
    text-decoration: underline;
  }

  .dark .kf-person__link {
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .dark .kf-person__link:hover,
  .dark .kf-person__link:focus-visible {
    color: var(--kf-color-blue-300, #93c5fd);
  }

  .kf-person__description-trigger {
    display: block;
    text-align: left;
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-blue-800, #1d4ed8);
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .kf-person__description-trigger:hover,
  .kf-person__description-trigger:focus-visible {
    color: var(--kf-color-blue-900, #1e3a8a);
    text-decoration: underline;
  }

  .dark .kf-person__description-trigger {
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .dark .kf-person__description-trigger:hover,
  .dark .kf-person__description-trigger:focus-visible {
    color: var(--kf-color-blue-300, #93c5fd);
  }
`;

function Person({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: PersonVariant }) {
  return (
    <>
      <PersonGlobalStyles />
      <div
        data-slot="person"
        className={cn("kf-person", `kf-person--${variant}`, className)}
        {...props}
      />
    </>
  );
}

function PersonItem({
  className,
  color = "default",
  ...props
}: React.ComponentProps<"article"> & { color?: PersonItemColor }) {
  return (
    <article
      data-slot="person-item"
      data-color={color}
      className={cn("kf-person__item", className)}
      {...props}
    />
  );
}

function PersonItemImage({
  className,
  fallback,
  ...props
}: React.ComponentProps<"img"> & { fallback?: string }) {
  return (
    <Avatar
      data-slot="person-item-image"
      className={cn("kf-person__image", className)}
    >
      <AvatarImage {...props} />
      <AvatarFallback className="kf-person__image-fallback">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}

function PersonItemContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="person-item-content"
      className={cn("kf-person__content", className)}
      {...props}
    />
  );
}

function PersonItemName({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="person-item-name"
      className={cn("kf-person__name", className)}
      {...props}
    />
  );
}

function PersonItemTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="person-item-title"
      className={cn("kf-person__title", className)}
      {...props}
    />
  );
}

function PersonItemEmail({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="person-item-email"
      className={cn("kf-person__link", className)}
      aria-label={`Email ${props.href}`}
      {...props}
    />
  );
}

function PersonItemPhone({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="person-item-phone"
      className={cn("kf-person__link", className)}
      aria-label={`Phone ${props.href}`}
      {...props}
    />
  );
}

function PersonItemDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Popover data-slot="person-item-description">
      <PopoverTrigger
        data-slot="person-item-description-trigger"
        className={cn("kf-person__description-trigger", className)}
        {...props}
      >
        Les mer
      </PopoverTrigger>
      <PopoverContent data-slot="person-item-description-content">
        {children}
      </PopoverContent>
    </Popover>
  );
}

export {
  Person,
  PersonItem,
  PersonItemImage,
  PersonItemContent,
  PersonItemName,
  PersonItemTitle,
  PersonItemEmail,
  PersonItemPhone,
  PersonItemDescription,
};
