import { Moon, Sun } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";

import { useTheme } from "@/theme-provider";

const ModeToggleGlobalStyles = createGlobalStyle`
  .kf-mode-toggle {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-base, 1rem);
  }

  .kf-mode-toggle__icon-wrapper {
    position: relative;
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kf-mode-toggle__sun,
  .kf-mode-toggle__moon {
    width: 1.2rem;
    height: 1.2rem;
    transition:
      transform 180ms var(--kf-ease-in-out, ease),
      opacity 180ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease);
    color: var(--kf-color-blue-700, #1d4ed8);
  }

  .kf-mode-toggle__moon {
    position: absolute;
    inset: 0;
    transform: rotate(90deg) scale(0);
    opacity: 0;
  }

  .kf-mode-toggle:hover .kf-mode-toggle__sun,
  .kf-mode-toggle:focus-visible .kf-mode-toggle__sun,
  .kf-mode-toggle:hover .kf-mode-toggle__moon,
  .kf-mode-toggle:focus-visible .kf-mode-toggle__moon {
    color: currentColor;
  }

  .dark .kf-mode-toggle__sun {
    transform: rotate(-90deg) scale(0);
    opacity: 0;
    color: var(--kf-color-blue-300, #93c5fd);
  }

  .dark .kf-mode-toggle__moon {
    transform: rotate(0deg) scale(1);
    opacity: 1;
    color: var(--kf-color-blue-300, #93c5fd);
  }

  .kf-mode-toggle[data-size="icon"] .kf-mode-toggle__label {
    display: none;
  }

  .kf-mode-toggle__label {
    font-weight: 500;
  }

  .kf-mode-toggle_sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`;

function ModeToggle({
  variant = "outline",
  align = "end",
  children,
  size = "icon",
}: {
  variant?:
    | "outline"
    | "default"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  align?: "start" | "end";
  size?: "icon" | "default";
  children?: React.ReactNode;
}) {
  const { setTheme } = useTheme();

  const renderLabel =
    children ??
    (size !== "icon" ? (
      <span className="kf-mode-toggle__label">Toggle theme</span>
    ) : null);

  return (
    <>
      <ModeToggleGlobalStyles />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            shape="square"
            size={size}
            data-size={size}
            className="kf-mode-toggle"
          >
            <div className="kf-mode-toggle__icon-wrapper">
              <Sun
                className="kf-mode-toggle__sun"
                aria-hidden="true"
                focusable="false"
              />
              <Moon
                className="kf-mode-toggle__moon"
                aria-hidden="true"
                focusable="false"
              />
              {size === "icon" && (
                <span className="kf-mode-toggle__sr-only">Toggle theme</span>
              )}
            </div>
            {renderLabel}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={align}>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export { ModeToggle };
