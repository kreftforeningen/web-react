import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const BreadcrumbGlobalStyles = createGlobalStyle`
  .kf-breadcrumb__list {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    margin: 0;
    padding: 0;
    list-style: none;
    word-break: break-word;
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-breadcrumb__list {
      gap: calc(var(--kf-spacing, 0.25rem) * 2.5);
    }
  }

  .kf-breadcrumb__item {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
  }

  .kf-breadcrumb__link {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    color: inherit;
    text-decoration: none;
    transition: color 150ms var(--kf-ease-in-out, ease);
  }

  .kf-breadcrumb__link:hover,
  .kf-breadcrumb__link:focus-visible {
    color: var(--kf-color-gray-950, #0f172a);
    outline: none;
  }

  .kf-breadcrumb__page {
    color: var(--kf-color-gray-950, #0f172a);
    font-weight: 500;
  }

  .kf-breadcrumb__separator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .kf-breadcrumb__separator > svg {
    width: 0.875rem;
    height: 0.875rem;
  }

  .kf-breadcrumb__ellipsis {
    display: inline-flex;
    width: 2.25rem;
    height: 2.25rem;
    align-items: center;
    justify-content: center;
  }

  .kf-breadcrumb__ellipsis > svg {
    width: 1rem;
    height: 1rem;
  }

  .kf-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return (
    <>
      <BreadcrumbGlobalStyles />
      <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
    </>
  );
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn("kf-breadcrumb__list", className)}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("kf-breadcrumb__item", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("kf-breadcrumb__link", className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("kf-breadcrumb__page", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("kf-breadcrumb__separator", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("kf-breadcrumb__ellipsis", className)}
      {...props}
    >
      <MoreHorizontal />
      <span className="kf-sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
