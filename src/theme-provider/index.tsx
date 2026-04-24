"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { StyleSheetManager } from "styled-components";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const WEB_REACT_SCOPE = "[data-kreftforeningen-web-react]";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function scopeSelector(selector: string) {
  if (selector.includes(WEB_REACT_SCOPE)) return selector;

  const trimmedSelector = selector.trim();

  if (trimmedSelector === "html" || trimmedSelector === "body")
    return WEB_REACT_SCOPE;

  if (trimmedSelector.startsWith("html ") || trimmedSelector.startsWith("body ")) {
    return `${WEB_REACT_SCOPE} ${trimmedSelector.slice(trimmedSelector.indexOf(" ") + 1)}`;
  }

  if (selector.includes(":root")) {
    return selector.replace(/:root/g, WEB_REACT_SCOPE);
  }

  return `${WEB_REACT_SCOPE} ${selector}`;
}

function namespacePlugin(element: {
  type?: string;
  props?: string[];
  parent?: { value?: string };
}) {
  if (element.type !== "rule" || !Array.isArray(element.props)) return;
  if (typeof element.parent?.value === "string" && element.parent.value.includes("@keyframes")) return;
  element.props = element.props.map(scopeSelector);
}

function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(
    defaultTheme === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (storedTheme) setTheme(storedTheme);
  }, [storageKey]);

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setResolvedTheme(mediaQuery.matches ? "dark" : "light");

      const updateTheme = (event: MediaQueryListEvent) => {
        setResolvedTheme(event.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }

    setResolvedTheme(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (nextTheme: Theme) => {
      localStorage.setItem(storageKey, nextTheme);
      setTheme(nextTheme);
    },
  };

  return (
    <StyleSheetManager stylisPlugins={[namespacePlugin]}>
      <div data-kreftforeningen-web-react className={resolvedTheme}>
        <ThemeProviderContext.Provider value={value}>
          {children}
        </ThemeProviderContext.Provider>
      </div>
    </StyleSheetManager>
  );
}

const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export { ThemeProvider, useTheme };
