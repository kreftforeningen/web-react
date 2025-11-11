import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const PaginationGlobalStyles = createGlobalStyle`
  .kf-pagination {
    font-family: var(--kf-font-sans);
    display: flex;
    justify-content: center;
    width: 100%;
    margin-inline: auto;
  }

  .kf-pagination__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .kf-pagination__item {
    display: contents;
  }

  .kf-pagination__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid transparent;
    color: var(--kf-color-gray-950, #0f172a);
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    transition:
      background 120ms var(--kf-ease-in-out, ease),
      border-color 120ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease),
      box-shadow 120ms var(--kf-ease-in-out, ease);
    outline: none;
  }

  .kf-pagination__link[data-size="icon"] {
    width: calc(var(--kf-spacing, 0.25rem) * 9);
    height: calc(var(--kf-spacing, 0.25rem) * 9);
    padding: 0;
  }

  .kf-pagination__link[data-size="default"] {
    height: calc(var(--kf-spacing, 0.25rem) * 9);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-pagination__link[data-active="true"] {
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    background: color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 20%, transparent);
  }

  .kf-pagination__link:hover {
    background: color-mix(in srgb, var(--kf-color-gray-200, rgba(148, 163, 184, 0.16)) 60%, transparent);
  }

  .kf-pagination__link:focus-visible {
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 65%, transparent);
  }

  .kf-pagination__link[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  .kf-pagination__icon {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-pagination__label {
    display: none;
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-pagination__label {
      display: inline;
    }
  }

  .kf-pagination__ellipsis {
    display: inline-flex;
    width: calc(var(--kf-spacing, 0.25rem) * 9);
    height: calc(var(--kf-spacing, 0.25rem) * 9);
    align-items: center;
    justify-content: center;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-pagination__ellipsis-icon {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }
`;

type PaginationLinkSize = "icon" | "default";

type PaginationLinkProps = {
  isActive?: boolean;
  size?: PaginationLinkSize;
} & React.ComponentProps<"a">;

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <>
      <PaginationGlobalStyles />
      <nav
        role="navigation"
        aria-label="pagination"
        data-slot="pagination"
        className={cn("kf-pagination", className)}
        {...props}
      />
    </>
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("kf-pagination__content", className)}
      {...props}
    />
  );
}

function PaginationItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="pagination-item"
      className={cn("kf-pagination__item", className)}
      {...props}
    />
  );
}

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      data-size={size}
      className={cn("kf-pagination__link", className)}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={className}
      {...props}
    >
      <ChevronLeftIcon
        className="kf-pagination__icon"
        aria-hidden="true"
        focusable="false"
      />
      <span className="kf-pagination__label">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={className}
      {...props}
    >
      <span className="kf-pagination__label">Next</span>
      <ChevronRightIcon
        className="kf-pagination__icon"
        aria-hidden="true"
        focusable="false"
      />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("kf-pagination__ellipsis", className)}
      {...props}
    >
      <MoreHorizontalIcon
        className="kf-pagination__ellipsis-icon"
        aria-hidden="true"
        focusable="false"
      />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
