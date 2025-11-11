import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { Separator } from "../separator";
import { ChevronRight } from "lucide-react";

const FooterGlobalStyles = createGlobalStyle`
  .kf-footer {
    font-family: var(--kf-font-sans);
    margin-top: calc(var(--kf-spacing, 0.25rem) * 4);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 6);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 10);
    background: var(--kf-color-gray-800, #1f2937);
    color: var(--kf-color-gray-100, #f3f4f6);
  }

  .kf-footer__section {
    width: min(var(--kf-container-7xl, 80rem), 100%);
    margin-inline: auto;
  }

  .kf-footer__actions,
  .kf-footer__social {
    display: flex;
    flex-direction: row;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    align-items: center;
  }

  .kf-footer__nav {
    display: grid;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    padding-block: calc(var(--kf-spacing, 0.25rem) * 10);
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-footer__nav {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-footer__nav {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  .kf-footer__nav-item {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-footer__link {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    color: var(--kf-color-blue-200, #bfdbfe);
    text-decoration: none;
  }

  .kf-footer__link:hover {
    color: var(--kf-color-blue-100, #dbeafe);
    text-decoration: underline;
  }

  .kf-footer__contact {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 10);
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-footer__contact {
      flex-direction: row;
      align-items: center;
      gap: calc(var(--kf-spacing, 0.25rem) * 10);
    }
  }

  .kf-footer__contact-link {
    display: inline-flex;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    align-items: center;
    color: var(--kf-color-blue-200, #bfdbfe);
    text-decoration: none;
  }

  .kf-footer__contact-link:hover {
    color: var(--kf-color-blue-100, #dbeafe);
    text-decoration: underline;
  }

  .kf-footer__copyright {
    color: var(--kf-color-gray-200, #e5e7eb);
    font-size: var(--kf-text-sm, 0.875rem);
  }

  .kf-footer__copyright a {
    color: var(--kf-color-blue-200, #bfdbfe);
    text-decoration: none;
  }

  .kf-footer__copyright a:hover {
    color: var(--kf-color-blue-100, #dbeafe);
    text-decoration: underline;
  }
`;

function FooterWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<"footer"> & { children?: React.ReactNode }) {
  return (
    <>
      <FooterGlobalStyles />
      <footer
        data-slot="footer"
        className={cn("kf-footer", className)}
        {...props}
      >
        {children}
      </footer>
    </>
  );
}

function FooterActions({ children }: { children?: React.ReactNode }) {
  return (
    <div className="kf-footer__section kf-footer__actions">{children}</div>
  );
}

function FooterSocial({ children }: { children?: React.ReactNode }) {
  return <div className="kf-footer__section kf-footer__social">{children}</div>;
}

function FooterNavigation({ children }: { children?: React.ReactNode }) {
  return <ul className="kf-footer__section kf-footer__nav">{children}</ul>;
}

function FooterNavigationItem({ children }: { children?: React.ReactNode }) {
  return <li className="kf-footer__nav-item">{children}</li>;
}

function FooterNavigationLink({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} className="kf-footer__link">
      <ChevronRight className="w-4 h-4" aria-hidden="true" focusable="false" />
      {children}
    </a>
  );
}

function FooterContact({ children }: { children?: React.ReactNode }) {
  return (
    <div className="kf-footer__section kf-footer__contact">{children}</div>
  );
}

function FooterContactItem({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} className="kf-footer__contact-link">
      {children}
    </a>
  );
}

function FooterCopyright({ children }: { children?: React.ReactNode }) {
  return (
    <div className="kf-footer__section kf-footer__copyright">
      <Separator className="my-10" />
      {children}
    </div>
  );
}

export {
  FooterWrapper,
  FooterSocial,
  FooterNavigation,
  FooterNavigationItem,
  FooterNavigationLink,
  FooterContact,
  FooterActions,
  FooterContactItem,
  FooterCopyright,
};
