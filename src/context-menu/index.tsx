import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type ContextMenuItemVariant = "default" | "destructive";

const ContextMenuGlobalStyles = createGlobalStyle`
  .kf-context-menu__content,
  .kf-context-menu__sub-content {
    font-family: var(--kf-font-sans);
    z-index: 50;
    min-width: 8rem;
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    border-radius: var(--kf-radius-md, 0.375rem);
    padding: calc(var(--kf-spacing, 0.25rem) * 1);
    box-shadow: var(--kf-shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1));
    overflow: hidden;
    transform-origin: var(--radix-context-menu-content-transform-origin, center);
  }

  .kf-context-menu__content {
    max-height: var(--radix-context-menu-content-available-height, 22rem);
    overflow-y: auto;
  }

  .kf-context-menu__content[data-state="open"],
  .kf-context-menu__sub-content[data-state="open"] {
    animation:
      kf-context-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-context-menu-scale-in 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-context-menu__content[data-state="closed"],
  .kf-context-menu__sub-content[data-state="closed"] {
    animation:
      kf-context-menu-fade-out 100ms var(--kf-ease-in, ease-in) forwards,
      kf-context-menu-scale-out 100ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-context-menu__content[data-side="top"],
  .kf-context-menu__sub-content[data-side="top"] {
    animation:
      kf-context-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-context-menu-slide-from-bottom 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-context-menu__content[data-side="bottom"],
  .kf-context-menu__sub-content[data-side="bottom"] {
    animation:
      kf-context-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-context-menu-slide-from-top 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-context-menu__content[data-side="left"],
  .kf-context-menu__sub-content[data-side="left"] {
    animation:
      kf-context-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-context-menu-slide-from-right 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-context-menu__content[data-side="right"],
  .kf-context-menu__sub-content[data-side="right"] {
    animation:
      kf-context-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-context-menu-slide-from-left 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-context-menu__item,
  .kf-context-menu__checkbox-item,
  .kf-context-menu__radio-item,
  .kf-context-menu__sub-trigger {
    position: relative;
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 1.5) calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-sm, 0.125rem);
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    cursor: pointer;
    user-select: none;
    outline: none;
    color: inherit;
    background: transparent;
    transition: background-color 120ms var(--kf-ease-in-out, ease), color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-context-menu__item svg,
  .kf-context-menu__checkbox-item svg,
  .kf-context-menu__radio-item svg,
  .kf-context-menu__sub-trigger svg {
    flex-shrink: 0;
    pointer-events: none;
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-context-menu__item svg:not([class*="text-"]),
  .kf-context-menu__checkbox-item svg:not([class*="text-"]),
  .kf-context-menu__radio-item svg:not([class*="text-"]),
  .kf-context-menu__sub-trigger svg:not([class*="text-"]) {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-context-menu__item[data-inset="true"],
  .kf-context-menu__checkbox-item[data-inset="true"],
  .kf-context-menu__radio-item[data-inset="true"],
  .kf-context-menu__sub-trigger[data-inset="true"],
  .kf-context-menu__label[data-inset="true"] {
    padding-left: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-context-menu__item[data-variant="destructive"] {
    color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-context-menu__item[data-variant="destructive"][data-disabled="true"] {
    color: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 70%, transparent);
  }

  .kf-context-menu__item[data-variant="destructive"][data-state="open"],
  .kf-context-menu__item[data-variant="destructive"]:focus-visible {
    color: var(--kf-color-red-700, #b91c1c);
    background: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 15%, transparent);
  }

  .kf-context-menu__item[data-state="open"],
  .kf-context-menu__item:focus-visible,
  .kf-context-menu__checkbox-item[data-state="open"],
  .kf-context-menu__checkbox-item:focus-visible,
  .kf-context-menu__radio-item[data-state="open"],
  .kf-context-menu__radio-item:focus-visible,
  .kf-context-menu__sub-trigger[data-state="open"],
  .kf-context-menu__sub-trigger:focus-visible {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-context-menu__item[data-disabled="true"],
  .kf-context-menu__checkbox-item[data-disabled="true"],
  .kf-context-menu__radio-item[data-disabled="true"],
  .kf-context-menu__sub-trigger[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  .kf-context-menu__checkbox-indicator,
  .kf-context-menu__radio-indicator {
    position: absolute;
    left: calc(var(--kf-spacing, 0.25rem) * 2);
    display: inline-flex;
    width: calc(var(--kf-spacing, 0.25rem) * 3.5);
    height: calc(var(--kf-spacing, 0.25rem) * 3.5);
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .kf-context-menu__label {
    display: block;
    padding: calc(var(--kf-spacing, 0.25rem) * 1.5) calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-sm, 0.875rem);
    font-weight: 500;
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-context-menu__separator {
    height: 1px;
    margin: calc(var(--kf-spacing, 0.25rem) * 1) calc(var(--kf-spacing, 0.25rem) * -1);
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-context-menu__shortcut {
    margin-left: auto;
    font-size: var(--kf-text-xs, 0.75rem);
    letter-spacing: 0.08em;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-context-menu__sub-trigger-icon {
    margin-left: auto;
  }

  @keyframes kf-context-menu-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes kf-context-menu-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes kf-context-menu-scale-in {
    from {
      transform: scale(0.96);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes kf-context-menu-scale-out {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.96);
    }
  }

  @keyframes kf-context-menu-slide-from-top {
    from {
      transform: translateY(calc(var(--kf-spacing, 0.25rem) * -2));
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes kf-context-menu-slide-from-bottom {
    from {
      transform: translateY(calc(var(--kf-spacing, 0.25rem) * 2));
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes kf-context-menu-slide-from-left {
    from {
      transform: translateX(calc(var(--kf-spacing, 0.25rem) * 2));
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes kf-context-menu-slide-from-right {
    from {
      transform: translateX(calc(var(--kf-spacing, 0.25rem) * -2));
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return (
    <>
      <ContextMenuGlobalStyles />
      <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
    </>
  );
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset ? "true" : undefined}
      className={cn("kf-context-menu__sub-trigger", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className="kf-context-menu__sub-trigger-icon"
        aria-hidden="true"
        focusable="false"
      />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn("kf-context-menu__sub-content", className)}
      {...props}
    />
  );
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn("kf-context-menu__content", className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: ContextMenuItemVariant;
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset ? "true" : undefined}
      data-variant={variant}
      className={cn("kf-context-menu__item", className)}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn("kf-context-menu__checkbox-item", className)}
      checked={checked}
      {...props}
    >
      <span className="kf-context-menu__checkbox-indicator">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon aria-hidden="true" focusable="false" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn("kf-context-menu__radio-item", className)}
      {...props}
    >
      <span className="kf-context-menu__radio-indicator">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon aria-hidden="true" focusable="false" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset ? "true" : undefined}
      className={cn("kf-context-menu__label", className)}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("kf-context-menu__separator", className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn("kf-context-menu__shortcut", className)}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
