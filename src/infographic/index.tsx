import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type InfographicVariant = "default" | "list";

const InfographicGlobalStyles = createGlobalStyle`
  .kf-infographic {
    font-family: var(--kf-font-sans);
    display: grid;
    gap: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-infographic--default {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-infographic--default {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .kf-infographic--list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .kf-infographic__item {
    padding: calc(var(--kf-spacing, 0.25rem) * 10);
    border-radius: var(--kf-radius-2xl, 1rem);
    background: color-mix(in srgb, var(--kf-color-gray-100, #f1f5f9) 95%, transparent);
    color: var(--kf-color-gray-950, #0f172a);
  }

  .dark .kf-infographic__item {
    background: color-mix(in srgb, var(--kf-color-gray-800, #1f2937) 95%, transparent);
    color: var(--kf-color-gray-100, #f3f4f6);
  }

  .kf-infographic__title {
    font-size: var(--kf-text-lg, 1.125rem);
    font-weight: 700;
    margin: 0;
  }

  .kf-infographic__number {
    display: block;
    margin-top: calc(var(--kf-spacing, 0.25rem) * 4);
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-2xl, 1.5rem);
    font-weight: 700;
  }

  .kf-infographic__text {
    display: block;
    font-size: var(--kf-text-lg, 1.125rem);
    font-weight: 700;
  }

  .kf-infographic__description {
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    margin: 0;
  }
`;

const variantClasses: Record<InfographicVariant, string> = {
  default: "kf-infographic--default",
  list: "kf-infographic--list",
};

function Infographic({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: InfographicVariant }) {
  return (
    <>
      <InfographicGlobalStyles />
      <div
        data-slot="infographic"
        className={cn("kf-infographic", variantClasses[variant], className)}
        {...props}
      />
    </>
  );
}

function InfographicItem({
  className,
  ...props
}: React.ComponentProps<"article">) {
  return (
    <article
      data-slot="infographic-item"
      className={cn("kf-infographic__item", className)}
      {...props}
    />
  );
}

function InfographicItemIcon({ ...props }: React.ComponentProps<"div">) {
  return <div data-slot="infographic-item-icon" {...props} />;
}

function InfographicItemTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="infographic-item-title"
      className={cn("kf-infographic__title", className)}
      {...props}
    />
  );
}

function InfographicItemTitleNumber({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="infographic-item-title-number"
      className={cn("kf-infographic__number", className)}
      {...props}
    />
  );
}

function InfographicItemTitleText({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="infographic-item-title-text"
      className={cn("kf-infographic__text", className)}
      {...props}
    />
  );
}

function InfographicItemDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="infographic-item-description"
      className={cn("kf-infographic__description", className)}
      {...props}
    />
  );
}

export {
  Infographic,
  InfographicItem,
  InfographicItemIcon,
  InfographicItemTitle,
  InfographicItemTitleNumber,
  InfographicItemTitleText,
  InfographicItemDescription,
};
