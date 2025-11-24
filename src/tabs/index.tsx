import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const TabsGlobalStyles = createGlobalStyle`
  .kf-tabs {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-tabs__list {
    background: var(--kf-color-gray-100, oklch(0.95 0.01 240));
    color: var(--kf-color-gray-600, oklch(0.45 0.01 240));
    display: inline-flex;
    height: calc(var(--kf-spacing, 0.25rem) * 9);
    width: fit-content;
    align-items: center;
    justify-content: center;
    border-radius: var(--kf-radius-lg, 0.5rem);
    padding: 3px;
  }

  .dark .kf-tabs__list {
      background: var(--kf-color-gray-800, oklch(0.3 0.01 240));
      color: var(--kf-color-gray-400, oklch(0.55 0.01 240));
    }
  

  .kf-tabs__trigger {
    display: inline-flex;
    height: calc(100% - 1px);
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: 1px solid transparent;
    padding: calc(var(--kf-spacing, 0.25rem) * 1) calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-sm, 0.875rem);
    font-weight: 500;
    white-space: nowrap;
    transition: color 150ms var(--kf-ease-in-out, ease), box-shadow 150ms var(--kf-ease-in-out, ease);
    outline: none;
    background: transparent;
    color: var(--kf-color-gray-950, oklch(0.18 0 0));
    cursor: pointer;
  }

  .kf-tabs__trigger svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  .kf-tabs__trigger svg:not([class*='size-']) {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-tabs__trigger[data-state="active"] {
    background: var(--kf-color-white, oklch(0.97 0 0));
    color: var(--kf-color-gray-950, oklch(0.18 0 0));
    box-shadow: var(--kf-shadow-xs, 0 1px 2px 0 rgb(15 23 42 / 0.05));
  }

  .kf-tabs__trigger:focus-visible {
    --kf-ring-color: var(--kf-color-blue-400, oklch(0.65 0.15 250));
    --kf-ring-offset-color: var(--kf-color-white, oklch(0.97 0 0));
    --kf-ring-width: 3px;
    box-shadow:
      0 0 0 1px var(--kf-ring-color),
      0 0 0 var(--kf-ring-width) color-mix(in srgb, var(--kf-ring-color) 50%, transparent);
    border-color: var(--kf-ring-color);
    outline: 1px solid var(--kf-ring-color);
    outline-offset: -1px;
  }

  .kf-tabs__trigger:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .dark .kf-tabs__trigger {
    color: var(--kf-color-gray-400, oklch(0.55 0.01 240));
  }

  .dark .kf-tabs__trigger[data-state="active"] {
    background: color-mix(in srgb, var(--kf-color-gray-800, oklch(0.3 0.01 240)) 30%, transparent);
    color: var(--kf-color-gray-100, oklch(0.95 0.01 240));
    border-color: var(--kf-color-gray-700, oklch(0.4 0.01 240));
  }

  .kf-tabs__content {
    flex: 1;
    outline: none;
  }
`;

function Tabs({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>) {
  return (
    <>
      <TabsGlobalStyles />
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn("kf-tabs", className)}
        {...props}
      />
    </>
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("kf-tabs__list", className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn("kf-tabs__trigger", className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("kf-tabs__content", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
