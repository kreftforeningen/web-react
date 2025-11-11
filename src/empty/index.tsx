import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type EmptyMediaVariant = "default" | "icon";

const EmptyGlobalStyles = createGlobalStyle`
  .kf-empty {
    font-family: var(--kf-font-sans);
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 6);
    padding: calc(var(--kf-spacing, 0.25rem) * 6);
    text-align: center;
    border: var(--kf-border-1, 1px) dashed var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    border-radius: var(--kf-radius-lg, 0.5rem);
    color: var(--kf-color-gray-950, #0f172a);
    text-wrap: balance;
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-empty {
      padding: calc(var(--kf-spacing, 0.25rem) * 12);
    }
  }

  .kf-empty__header {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    max-width: 24rem;
    align-items: center;
    text-align: center;
  }

  .kf-empty__media {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-empty__media svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  .kf-empty__media--icon {
    width: calc(var(--kf-spacing, 0.25rem) * 10);
    height: calc(var(--kf-spacing, 0.25rem) * 10);
    border-radius: var(--kf-radius-lg, 0.5rem);
    background: var(--kf-color-gray-50, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-empty__media--icon svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 6);
    height: calc(var(--kf-spacing, 0.25rem) * 6);
  }

  .kf-empty__title {
    font-size: var(--kf-text-lg, 1.125rem);
    line-height: var(--kf-text-lg--line-height, 1.5555555556);
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .kf-empty__description {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }

  .kf-empty__description > a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .kf-empty__description > a:hover {
    color: var(--kf-color-blue-600, #0f172a);
  }

  .kf-empty__content {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    width: 100%;
    max-width: 24rem;
    min-width: 0;
    align-items: center;
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-gray-950, #0f172a);
    text-wrap: balance;
  }
`;

const emptyMediaVariantClasses: Record<EmptyMediaVariant, string> = {
  default: "kf-empty__media",
  icon: "kf-empty__media kf-empty__media--icon",
};

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <EmptyGlobalStyles />
      <div data-slot="empty" className={cn("kf-empty", className)} {...props} />
    </>
  );
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn("kf-empty__header", className)}
      {...props}
    />
  );
}

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: EmptyMediaVariant }) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariantClasses[variant], className)}
      {...props}
    />
  );
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("kf-empty__title", className)}
      {...props}
    />
  );
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn("kf-empty__description", className)}
      {...props}
    />
  );
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn("kf-empty__content", className)}
      {...props}
    />
  );
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};
