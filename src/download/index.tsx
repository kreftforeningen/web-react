import { Download as DownloadIcon, ShoppingCart } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type DownloadVariant = "default" | "destructive";

const DownloadGlobalStyles = createGlobalStyle`
  .kf-download-container {
    container-type: inline-size;
    container-name: download-container;
  }

  .kf-download {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    margin-block: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: var(--kf-radius-2xl, 1rem);
    overflow: hidden;
    background: color-mix(in srgb, var(--kf-color-gray-100, #f1f5f9) 90%, transparent);
  }

  .dark .kf-download {
    background: color-mix(in srgb, var(--kf-color-gray-800, #1f2937) 95%, transparent);
  }

  @container download-container (min-width: 32rem) {
    .kf-download {
      flex-direction: row;
      align-items: stretch;
    }
  }

  .kf-download--destructive {
    background: color-mix(in srgb, var(--kf-color-red-100, #fee2e2) 85%, transparent);
  }

  .dark .kf-download--destructive {
    background: color-mix(in srgb, var(--kf-color-red-900, #7f1d1d) 85%, transparent);
  }

  .kf-download__image {
    width: 5rem;
    height: 8rem;
    object-fit: cover;
    object-position: center;
    border-radius: var(--kf-radius-md, 0.125rem);
  }

  .kf-download__content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    color: var(--kf-color-gray-950, #0f172a);
  }

  @container download-container (min-width: 32rem) {
    .kf-download__content {
      padding-inline-end: calc(var(--kf-spacing, 0.25rem) * 6);
      color: var(--kf-color-gray-950, #f8fafc);
    }
  }

  .kf-download__main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: var(--kf-spacing, 0.25rem);
  }

  .kf-download__title {
    font-family: var(--kf-font-condensed);
    margin: 0;
    padding-top: 0;
    font-size: var(--kf-text-2xl, 1.25rem);
    line-height: var(--kf-text-2xl--line-height, 1.3333333333);
    font-weight: 400;
  }

  .kf-download__description {
    margin: 0;
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  .kf-download__footer {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
  }

  @container download-container (min-width: 32rem) {
    .kf-download__footer {
      display: flex;
      flex-direction: column;
      min-width: 9.375rem;
      height: auto;
      justify-content: center;
      align-items: stretch;
    }
  }

  .kf-download__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    flex: 1 1 50%;
    min-height: calc(var(--kf-spacing, 0.25rem) * 10);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    font-weight: 500;
    text-decoration: none;
    transition:
      transform 120ms var(--kf-ease-in-out, ease),
      background-color 120ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease);
  }

  @container download-container (min-width: 40rem) {
    .kf-download__link {
      flex: 1 1 100%;
      width: 100%;
      min-height: calc(var(--kf-spacing, 0.25rem) * 12);
    }
  }

  .kf-download__link:hover {
    text-decoration: underline;
  }

  .kf-download__link:focus-visible {
    outline: none;
    --kf-ring-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .kf-download__download-link {
    background: var(--kf-color-gray-300, #d1d5db);
    color: var(--kf-color-gray-900, #111827);
  }

  .dark .kf-download__download-link {
    background: var(--kf-color-gray-700, #374151);
    color: var(--kf-color-gray-100, #f3f4f6);
  }

  .kf-download__order-link {
    background: var(--kf-color-gray-200, #e5e7eb);
    color: var(--kf-color-gray-900, #111827);
  }

  .dark .kf-download__order-link {
    background: var(--kf-color-gray-600, #4b5563);
    color: var(--kf-color-gray-100, #f3f4f6);
  }
`;

const downloadVariantClasses: Record<DownloadVariant, string> = {
  default: "kf-download--default",
  destructive: "kf-download--destructive",
};

function Download({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: DownloadVariant }) {
  return (
    <div className="kf-download-container">
      <DownloadGlobalStyles />
      <article
        data-slot="download"
        className={cn(
          "kf-download",
          downloadVariantClasses[variant],
          className
        )}
        {...props}
      />
    </div>
  );
}

function DownloadImage({
  className,
  src,
  ...props
}: React.ComponentProps<"img">) {
  if (!src) return null;
  return (
    <img
      data-slot="download-image"
      className={cn("kf-download__image", className)}
      src={src}
      {...props}
    />
  );
}

function DownloadContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="download-content"
      className={cn("kf-download__content", className)}
      {...props}
    />
  );
}

function DownloadMain({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="download-main"
      className={cn("kf-download__main", className)}
      {...props}
    />
  );
}

function DownloadTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"h3">) {
  if (!children) return null;
  return (
    <h3
      data-slot="download-title"
      className={cn("kf-download__title", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

function DownloadDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  if (!children) return null;
  return (
    <p
      data-slot="download-description"
      className={cn("kf-download__description", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function DownloadFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="download-footer"
      className={cn("kf-download__footer", className)}
      {...props}
    />
  );
}

function DownloadDownloadUrl({
  className,
  children,
  href,
  ...props
}: React.ComponentProps<"a">) {
  if (!href || !children) return null;
  return (
    <a
      data-slot="download-download-url"
      className={cn("kf-download__link kf-download__download-link", className)}
      href={href}
      {...props}
    >
      <DownloadIcon aria-hidden="true" focusable="false" />
      <span>{children}</span>
    </a>
  );
}

function DownloadOrderUrl({
  className,
  children,
  href,
  ...props
}: React.ComponentProps<"a">) {
  if (!href || !children) return null;
  return (
    <a
      data-slot="download-order-url"
      className={cn("kf-download__link kf-download__order-link", className)}
      href={href}
      {...props}
    >
      <ShoppingCart aria-hidden="true" focusable="false" />
      <span>{children}</span>
    </a>
  );
}

export {
  Download,
  DownloadContent,
  DownloadImage,
  DownloadMain,
  DownloadTitle,
  DownloadDescription,
  DownloadFooter,
  DownloadDownloadUrl,
  DownloadOrderUrl,
};
