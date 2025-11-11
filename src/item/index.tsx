import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { Separator } from "../separator";

type ItemVariant = "default" | "outline" | "muted";
type ItemSize = "default" | "sm";
type ItemMediaVariant = "default" | "icon" | "image";

const ItemGlobalStyles = createGlobalStyle`
  .kf-item-group {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: column;
  }

  .kf-item {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid transparent;
    transition: color 120ms var(--kf-ease-in-out, ease), box-shadow 120ms var(--kf-ease-in-out, ease);
    outline: none;
    text-decoration: none;
    flex-wrap: wrap;
  }

  .kf-item[data-variant="outline"] {
    border-color: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-item[data-variant="muted"] {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 50%, transparent);
  }

  .kf-item[data-size="default"] {
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-item[data-size="sm"] {
    padding-block: calc(var(--kf-spacing, 0.25rem) * 3);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 4);
    gap: calc(var(--kf-spacing, 0.25rem) * 2.5);
  }

  .kf-item:focus-visible {
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 65%, transparent);
  }

  .kf-item a:hover {
    background: color-mix(in srgb, var(--kf-color-gray-200, rgba(148, 163, 184, 0.16)) 50%, transparent);
    transition: color 100ms var(--kf-ease-in-out, ease);
  }

  .kf-item-media {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-item-media[data-variant="icon"] {
    width: calc(var(--kf-spacing, 0.25rem) * 8);
    height: calc(var(--kf-spacing, 0.25rem) * 8);
    border-radius: var(--kf-radius-sm, 0.125rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 70%, transparent);
  }

  .kf-item-media[data-variant="icon"] svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-item-media[data-variant="image"] {
    width: calc(var(--kf-spacing, 0.25rem) * 10);
    height: calc(var(--kf-spacing, 0.25rem) * 10);
    border-radius: var(--kf-radius-sm, 0.125rem);
    overflow: hidden;
  }

  .kf-item-media[data-variant="image"] img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .kf-item-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-item-content + [data-slot="item-content"] {
    flex: none;
  }

  .kf-item-title {
    display: inline-flex;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    align-items: center;
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    font-weight: 500;
  }

  .kf-item-description {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-wrap: balance;
  }

  .kf-item-description a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .kf-item-description a:hover {
    color: var(--kf-color-blue-600, #0f172a);
  }

  .kf-item-actions {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-item-header,
  .kf-item-footer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }
`;

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <ItemGlobalStyles />
      <div
        role="list"
        data-slot="item-group"
        className={cn("kf-item-group", className)}
        {...props}
      />
    </>
  );
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props}
    />
  );
}

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: ItemVariant;
  size?: ItemSize;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";
  return (
    <>
      <ItemGlobalStyles />
      <Comp
        data-slot="item"
        data-variant={variant}
        data-size={size}
        className={cn("kf-item", className)}
        {...props}
      />
    </>
  );
}

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: ItemMediaVariant;
}) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn("kf-item-media", className)}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn("kf-item-content", className)}
      {...props}
    />
  );
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn("kf-item-title", className)}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn("kf-item-description", className)}
      {...props}
    />
  );
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("kf-item-actions", className)}
      {...props}
    />
  );
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn("kf-item-header", className)}
      {...props}
    />
  );
}

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn("kf-item-footer", className)}
      {...props}
    />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
};
