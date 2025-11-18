import { ExternalLink } from "lucide-react";
import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const AccentuatedLinkGlobalStyles = createGlobalStyle`
  .kf-accentuated-link {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    border-left-width: var(--kf-border-2, var(--kf-border-width, 2px));
    border-left-style: solid;
    border-left-color: var(--kf-color-blue-600, oklch(0.205 0 0));
    padding-left: calc(var(--kf-spacing, 0.25rem) * 6);
    padding-top: calc(var(--kf-spacing, 0.25rem));
    padding-bottom: calc(var(--kf-spacing, 0.25rem));
  }

  .dark .kf-accentuated-link {
    border-left-color: var(--kf-color-gray-50, #bfdbfe);
  }

  .kf-accentuated-link__title {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    color: var(--kf-color-blue-800, #1e40af);
    text-decoration: none;
    transition: color 150ms var(--kf-ease-in-out, ease), text-decoration-color 150ms var(--kf-ease-in-out, ease);
  }

  .kf-accentuated-link__title:hover,
  .kf-accentuated-link__title:focus-visible {
    color: var(--kf-color-blue-900, #1e3a8a);
    text-decoration: underline;
  }

  .dark .kf-accentuated-link__title {
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .dark .kf-accentuated-link__title:hover,
  .dark .kf-accentuated-link__title:focus-visible {
    color: var(--kf-color-blue-300, #93c5fd);
  }

  .kf-accentuated-link__headline {
    font-size: var(--kf-text-lg, 1.125rem);
    line-height: var(--kf-text-lg--line-height, 1.5555555556);
    
  }

  .kf-accentuated-link__meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-600, #4b5563);
  }

  .dark .kf-accentuated-link__meta {
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .kf-accentuated-link__icon {
    width: 1rem;
    height: 1rem;
  }

  .kf-accentuated-link__subtitle {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-600, #4b5563);
    margin: 0;
  }

  .dark .kf-accentuated-link__subtitle {
    color: var(--kf-color-gray-100, #f3f4f6);
  }
`;

function extractDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

const AccentuatedLinkContext = React.createContext<{ href?: string }>({});

type AccentuatedLinkProps = React.ComponentPropsWithoutRef<"article"> & {
  href?: string;
};

const AccentuatedLink = React.forwardRef<HTMLElement, AccentuatedLinkProps>(
  ({ className, href, children, ...props }, ref) => {
    return (
      <AccentuatedLinkContext.Provider value={{ href }}>
        <>
          <AccentuatedLinkGlobalStyles />
          <article
            ref={ref}
            className={cn("kf-accentuated-link", className)}
            {...props}
          >
            {children}
          </article>
        </>
      </AccentuatedLinkContext.Provider>
    );
  }
);

AccentuatedLink.displayName = "AccentuatedLink";

type AccentuatedLinkTitleProps = React.ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

const AccentuatedLinkTitle = React.forwardRef<
  HTMLAnchorElement,
  AccentuatedLinkTitleProps
>(({ className, children, href: propHref, ...props }, ref) => {
  const context = React.useContext(AccentuatedLinkContext);
  const href = propHref ?? context.href;

  return (
    <a
      ref={ref}
      className={cn("kf-accentuated-link__title", className)}
      href={href}
      {...props}
    >
      <div className="kf-accentuated-link__headline">{children}</div>
      <div className="kf-accentuated-link__meta">
        <ExternalLink
          className="kf-accentuated-link__icon"
          aria-hidden="true"
          focusable="false"
        />
        <span>{extractDomain(href ?? "")}</span>
      </div>
    </a>
  );
});

AccentuatedLinkTitle.displayName = "AccentuatedLinkTitle";

type AccentuatedLinkSubtitleProps = React.ComponentPropsWithoutRef<"p">;

const AccentuatedLinkSubtitle = React.forwardRef<
  HTMLParagraphElement,
  AccentuatedLinkSubtitleProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("kf-accentuated-link__subtitle", className)}
      {...props}
    />
  );
});

AccentuatedLinkSubtitle.displayName = "AccentuatedLinkSubtitle";

export { AccentuatedLink, AccentuatedLinkSubtitle, AccentuatedLinkTitle };
