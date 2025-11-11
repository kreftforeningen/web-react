import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type ToggleGroupVariant = "default" | "outline";
type ToggleGroupSize = "default" | "sm" | "lg";

const ToggleGroupContext = React.createContext<{
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
}>({
  size: "default",
  variant: "default",
});

const ToggleGroupGlobalStyles = createGlobalStyle`
  .kf-toggle-group {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    width: fit-content;
    align-items: center;
    border-radius: var(--kf-radius-md, 0.375rem);
  }

  .kf-toggle-group[data-variant="outline"] {
    box-shadow: var(--kf-shadow-xs, 0 1px 2px 0 rgb(15 23 42 / 0.05));
  }

  .kf-toggle-group__item {
    min-width: 0;
    flex: 1 0 auto;
    box-shadow: none;
    border-radius: 0;
  }

  .kf-toggle-group__item:first-child {
    border-top-left-radius: var(--kf-radius-md, 0.375rem);
    border-bottom-left-radius: var(--kf-radius-md, 0.375rem);
  }

  .kf-toggle-group__item:last-child {
    border-top-right-radius: var(--kf-radius-md, 0.375rem);
    border-bottom-right-radius: var(--kf-radius-md, 0.375rem);
  }

  .kf-toggle-group__item[data-variant="outline"] {
    border-inline-end: 0;
  }

  .kf-toggle-group__item[data-variant="outline"]:first-child {
    border-inline-start: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-toggle-group__item:focus-visible {
    position: relative;
    z-index: 1;
  }
`;

function ToggleGroup({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
}) {
  return (
    <>
      <ToggleGroupGlobalStyles />
      <ToggleGroupPrimitive.Root
        data-slot="toggle-group"
        data-variant={variant}
        data-size={size}
        className={cn("kf-toggle-group", className)}
        {...props}
      >
        <ToggleGroupContext.Provider value={{ variant, size }}>
          {children}
        </ToggleGroupContext.Provider>
      </ToggleGroupPrimitive.Root>
    </>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
}) {
  const context = React.useContext(ToggleGroupContext);
  const resolvedVariant = context.variant || variant || "default";
  const resolvedSize = context.size || size || "default";

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      className={cn("kf-toggle kf-toggle-group__item", className)}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
