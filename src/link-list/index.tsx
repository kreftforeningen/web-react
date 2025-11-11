import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type LinkListVariant = "default" | "list";

const LinkListGlobalStyles = createGlobalStyle`
  .kf-link-list {
    font-family: var(--kf-font-sans);
    display: grid;
    gap: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-link-list--default {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-link-list--default {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: var(--kf-breakpoint-lg, 64rem)) {
    .kf-link-list--default {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .kf-link-list--list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .kf-link-list__item {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-link-list__title {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    color: var(--kf-color-blue-800, #1d4ed8);
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
  }

  .kf-link-list__title:hover {
    color: var(--kf-color-blue-900, #1e3a8a);
    text-decoration: underline;
  }

  .dark .kf-link-list__title {
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .dark .kf-link-list__title:hover {
    color: var(--kf-color-blue-300, #93c5fd);
  }

  .kf-link-list__title h3 {
    margin: 0;
    font-size: var(--kf-text-lg, 1.125rem);
  }

  .kf-link-list__title svg {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-link-list__description {
    margin: 0;
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }
`;

const variantClasses: Record<LinkListVariant, string> = {
  default: "kf-link-list--default",
  list: "kf-link-list--list",
};

function LinkList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: LinkListVariant }) {
  return (
    <>
      <LinkListGlobalStyles />
      <div
        data-slot="linklist"
        className={cn("kf-link-list", variantClasses[variant], className)}
        {...props}
      />
    </>
  );
}

function LinkListItem({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="linklist-item"
      className={cn("kf-link-list__item", className)}
      {...props}
    />
  );
}

function LinkListTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("kf-link-list__title", className)}>
      <h3 {...props} />
      <ArrowRight aria-hidden="true" focusable="false" />
    </div>
  );
}

function LinkListDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("kf-link-list__description", className)} {...props} />
  );
}

export { LinkList, LinkListItem, LinkListTitle, LinkListDescription };
