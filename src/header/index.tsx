import { createGlobalStyle } from "styled-components";
import { cn } from "@/lib/utils";
import { useTheme } from "@/theme-provider";

import { Button } from "../button";
import { Input } from "../input";

import { Search as SearchIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../sheet";

const HeaderGlobalStyles = createGlobalStyle`
  .kf-header {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    margin-block: calc(var(--kf-spacing, 0.25rem) * 4);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 6);
    width: min(var(--kf-container-7xl, 80rem), 100%);
    margin-inline: auto;
  }

  .kf-header__logo,
  .kf-header__title {
    flex-grow: 1;
  }

  .kf-header__logo img {
    max-height: 100px;
    min-width: 150px;
    height: auto;
    width: auto;
  }

  .kf-header__title-span {
    font-size: var(--kf-text-xl, 1.25rem);
  }

  .kf-header__title-link {
    color: inherit;
    text-decoration: none;
  }

  .kf-header__title-link:hover {
    color: var(--kf-color-blue-600, #0f172a);
    text-decoration: underline;
  }

  .dark .kf-header__title-link:hover {
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .kf-header__navigation {
    display: flex;
    flex-direction: row;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    flex-grow: 1;
  }

  .kf-header__search {
    padding-block: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-header__search-field {
    position: relative;
    width: min(20rem, 100%);
  }

  .kf-header__search-icon {
    position: absolute;
    left: calc(var(--kf-spacing, 0.25rem) * 3);
    top: 50%;
    transform: translateY(-50%);
    color: var(--kf-color-gray-400, #9ca3af);
  }

  .kf-header__search-input {
    padding-left: calc(var(--kf-spacing, 0.25rem) * 10);
  }

  .kf-header__menu-content {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    padding: calc(var(--kf-spacing, 0.25rem) * 8);
    padding-top: calc(var(--kf-spacing, 0.25rem) * 14);
    width: min(33.75rem, 100%);
    background: var(--kf-color-gray-900, #111827);
    color: var(--kf-color-gray-50, #f9fafb);
    border: none;
    box-shadow: var(--kf-shadow-2xl, 0 25px 50px -12px rgb(0 0 0 / 0.25));
  }

  .kf-header__menu-footer {
    display: flex;
    justify-content: space-between;
  }

  .kf-header__menu-list {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-header__menu-link {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    color: inherit;
    text-decoration: none;
  }

  .kf-header__menu-link:hover {
    text-decoration: underline;
  }

  .kf-header__sr-only {
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

function HeaderWrapper({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <>
      <HeaderGlobalStyles />
      <header
        data-slot="header"
        className={cn("kf-header", className)}
        {...props}
      />
    </>
  );
}

function HeaderLogo({
  className,
  src,
  darkSrc,
  href,
  ...props
}: React.ComponentProps<"img"> & { darkSrc?: string; href?: string }) {
  const { theme } = useTheme();

  if (!src) return null;

  // Use darkSrc if provided and theme is dark, otherwise use the regular src
  const logoSrc = darkSrc && theme === "dark" ? darkSrc : src;

  const imgElement = <img className={cn(className)} src={logoSrc} {...props} />;

  return (
    <div data-slot="header-logo" className="kf-header__logo">
      {href ? (
        <a href={href} tabIndex={0} aria-label="Logo">
          {imgElement}
        </a>
      ) : (
        imgElement
      )}
    </div>
  );
}

function HeaderTitle({
  className,
  href,
  ...props
}: React.ComponentProps<"span"> & { href?: string }) {
  const content = (
    <span className={cn("kf-header__title-span", className)} {...props} />
  );
  return (
    <div data-slot="header-title" className="kf-header__title">
      {href ? (
        <a
          href={href}
          tabIndex={0}
          aria-label="Title"
          className="kf-header__title-link"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function HeaderNavigation({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="header-navigation"
      className={cn("kf-header__navigation", className)}
      {...props}
    />
  );
}

function HeaderSearch({ ...props }: React.ComponentProps<"input">) {
  return (
    <>
      <div className="kf-header__search">
        <div className="kf-header__search-field">
          <SearchIcon className="kf-header__search-icon" size={18} />
          <Input
            placeholder="Søk"
            className="kf-header__search-input"
            {...props}
          />
        </div>
      </div>
    </>
  );
}

function HeaderButton({
  href,
  children,
  className,
  variant = "default",
}: React.ComponentProps<"p"> & {
  href: string;
  variant?: "default" | "outline" | "destructive";
}) {
  if (!children) return null;
  return (
    <a href={href} className={className}>
      <Button
        variant={variant}
        data-slot="header-button"
        className="flex items-center gap-2"
      >
        {children}
      </Button>
    </a>
  );
}

function HeaderMenu({ children }: React.ComponentProps<"div">) {
  return <Sheet>{children}</Sheet>;
}

function HeaderMenuTrigger({ children }: React.ComponentProps<"div">) {
  if (!children) return null;
  return <SheetTrigger asChild>{children}</SheetTrigger>;
}

function HeaderMenuContent({ children }: React.ComponentProps<"div">) {
  return (
    <>
      <SheetContent className="kf-header__menu-content">
        <SheetHeader className="kf-header__sr-only">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Menu.</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </>
  );
}

function HeaderMenuFooter({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <SheetFooter className={cn("kf-header__menu-footer", className)}>
      {children}
    </SheetFooter>
  );
}

function HeaderMenuList({ children }: React.ComponentProps<"ul">) {
  return <ul className="kf-header__menu-list">{children}</ul>;
}

function HeaderMenuListItem({
  children,
  href,
  ...props
}: React.ComponentProps<"a"> & { href: string }) {
  return (
    <li>
      <a href={href} className="kf-header__menu-link" {...props}>
        {children}
      </a>
    </li>
  );
}

function HeaderMenuClose() {
  return <SheetClose>Close</SheetClose>;
}

export {
  HeaderWrapper,
  HeaderLogo,
  HeaderNavigation,
  HeaderButton,
  HeaderSearch,
  HeaderMenu,
  HeaderMenuTrigger,
  HeaderMenuContent,
  HeaderMenuList,
  HeaderMenuListItem,
  HeaderMenuFooter,
  HeaderMenuClose,
  HeaderTitle,
};
