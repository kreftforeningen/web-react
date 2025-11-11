import { Slot } from "@radix-ui/react-slot";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { Separator } from "../separator";

type ButtonGroupOrientation = "horizontal" | "vertical";

const ButtonGroupGlobalStyles = createGlobalStyle`
  .kf-button-group {
    font-family: var(--kf-font-sans);
    display: flex;
    width: fit-content;
    align-items: stretch;
  }

  .kf-button-group:has(> [data-slot="button-group"]) {
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-button-group > *:focus-visible {
    position: relative;
    z-index: 10;
  }

  .kf-button-group > [data-slot="select-trigger"]:not([class*="w-"]) {
    width: fit-content;
  }

  .kf-button-group > input {
    flex: 1;
  }

  .kf-button-group[data-orientation="horizontal"] {
    flex-direction: row;
  }

  .kf-button-group[data-orientation="horizontal"] > *:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .kf-button-group[data-orientation="horizontal"] > *:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .kf-button-group[data-orientation="horizontal"] > *:not(:first-child) {
    border-left-width: 0;
  }

  .kf-button-group[data-orientation="vertical"] {
    flex-direction: column;
  }

  .kf-button-group[data-orientation="vertical"] > *:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top-width: 0;
  }

  .kf-button-group[data-orientation="vertical"] > *:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .kf-button-group__text {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    background: var(--kf-color-gray-50, rgba(148, 163, 184, 0.16));
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    border-radius: var(--kf-radius-md, 0.375rem);
    padding: 0 calc(var(--kf-spacing, 0.25rem) * 4);
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    font-weight: 500;
    min-height: calc(var(--kf-btn-height-md, 44px));
    box-shadow: var(--kf-shadow-xs, 0 1px 2px 0 rgb(0 0 0 / 0.05));
  }

  .kf-button-group__text svg {
    pointer-events: none;
  }

  .kf-button-group__text svg:not([class*="size-"]) {
    width: 1rem;
    height: 1rem;
  }

  .kf-button-group__separator {
    position: relative;
    margin: 0 !important;
    align-self: stretch;
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.1));
  }

  .kf-button-group__separator[data-orientation="horizontal"] {
    width: 1px;
  }

  .kf-button-group__separator[data-orientation="vertical"] {
    height: auto;
    width: auto;
  }
`;

function ButtonGroup({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & { orientation?: ButtonGroupOrientation }) {
  return (
    <>
      <ButtonGroupGlobalStyles />
      <div
        role="group"
        data-slot="button-group"
        data-orientation={orientation}
        className={cn("kf-button-group", className)}
        {...props}
      />
    </>
  );
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return <Comp className={cn("kf-button-group__text", className)} {...props} />;
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn("kf-button-group__separator", className)}
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
