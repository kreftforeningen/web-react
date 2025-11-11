import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type DropdownMenuItemVariant = "default" | "destructive";

const DropdownMenuGlobalStyles = createGlobalStyle`
  .kf-dropdown-menu__content,
  .kf-dropdown-menu__sub-content {
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
    transform-origin: var(--radix-dropdown-menu-content-transform-origin, center);
  }

  .kf-dropdown-menu__content {
    max-height: var(--radix-dropdown-menu-content-available-height, 22rem);
    overflow-y: auto;
  }

  .kf-dropdown-menu__content[data-state="open"],
  .kf-dropdown-menu__sub-content[data-state="open"] {
    animation:
      kf-dropdown-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-dropdown-menu-scale-in 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-dropdown-menu__content[data-state="closed"],
  .kf-dropdown-menu__sub-content[data-state="closed"] {
    animation:
      kf-dropdown-menu-fade-out 100ms var(--kf-ease-in, ease-in) forwards,
      kf-dropdown-menu-scale-out 100ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-dropdown-menu__content[data-side="top"],
  .kf-dropdown-menu__sub-content[data-side="top"] {
    animation:
      kf-dropdown-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-dropdown-menu-slide-from-bottom 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-dropdown-menu__content[data-side="bottom"],
  .kf-dropdown-menu__sub-content[data-side="bottom"] {
    animation:
      kf-dropdown-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-dropdown-menu-slide-from-top 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-dropdown-menu__content[data-side="left"],
  .kf-dropdown-menu__sub-content[data-side="left"] {
    animation:
      kf-dropdown-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-dropdown-menu-slide-from-right 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-dropdown-menu__content[data-side="right"],
  .kf-dropdown-menu__sub-content[data-side="right"] {
    animation:
      kf-dropdown-menu-fade-in 120ms var(--kf-ease-out, ease-out) forwards,
      kf-dropdown-menu-slide-from-left 120ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-dropdown-menu__item,
  .kf-dropdown-menu__checkbox-item,
  .kf-dropdown-menu__radio-item,
  .kf-dropdown-menu__sub-trigger {
    position: relative;
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 1.5) calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-sm, 0.125rem);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    cursor: pointer;
    user-select: none;
    outline: none;
    color: inherit;
    background: transparent;
    transition: background-color 120ms var(--kf-ease-in-out, ease), color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-dropdown-menu__item svg,
  .kf-dropdown-menu__checkbox-item svg,
  .kf-dropdown-menu__radio-item svg,
  .kf-dropdown-menu__sub-trigger svg {
    flex-shrink: 0;
    pointer-events: none;
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-dropdown-menu__item svg:not([class*="text-"]),
  .kf-dropdown-menu__checkbox-item svg:not([class*="text-"]),
  .kf-dropdown-menu__radio-item svg:not([class*="text-"]),
  .kf-dropdown-menu__sub-trigger svg:not([class*="text-"]) {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-dropdown-menu__item[data-inset="true"],
  .kf-dropdown-menu__checkbox-item[data-inset="true"],
  .kf-dropdown-menu__radio-item[data-inset="true"],
  .kf-dropdown-menu__sub-trigger[data-inset="true"],
  .kf-dropdown-menu__label[data-inset="true"] {
    padding-left: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-dropdown-menu__item[data-variant="destructive"] {
    color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-dropdown-menu__item[data-variant="destructive"][data-state="open"],
  .kf-dropdown-menu__item[data-variant="destructive"]:focus-visible {
    background: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 15%, transparent);
    color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-dropdown-menu__item[data-state="open"],
  .kf-dropdown-menu__item:focus-visible,
  .kf-dropdown-menu__checkbox-item[data-state="open"],
  .kf-dropdown-menu__checkbox-item:focus-visible,
  .kf-dropdown-menu__radio-item[data-state="open"],
  .kf-dropdown-menu__radio-item:focus-visible,
  .kf-dropdown-menu__sub-trigger[data-state="open"],
  .kf-dropdown-menu__sub-trigger:focus-visible {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-dropdown-menu__item[data-disabled="true"],
  .kf-dropdown-menu__checkbox-item[data-disabled="true"],
  .kf-dropdown-menu__radio-item[data-disabled="true"],
  .kf-dropdown-menu__sub-trigger[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  .kf-dropdown-menu__checkbox-indicator,
  .kf-dropdown-menu__radio-indicator {
    position: absolute;
    left: calc(var(--kf-spacing, 0.25rem) * 2);
    display: inline-flex;
    width: calc(var(--kf-spacing, 0.25rem) * 3.5);
    height: calc(var(--kf-spacing, 0.25rem) * 3.5);
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .kf-dropdown-menu__label {
    display: block;
    padding: calc(var(--kf-spacing, 0.25rem) * 1.5) calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-base, 1rem);
    font-weight: 500;
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-dropdown-menu__separator {
    height: 1px;
    margin: calc(var(--kf-spacing, 0.25rem) * 1) calc(var(--kf-spacing, 0.25rem) * -1);
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-dropdown-menu__shortcut {
    margin-left: auto;
    font-size: var(--kf-text-xs, 0.75rem);
    letter-spacing: 0.08em;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-dropdown-menu__sub-trigger-icon {
    margin-left: auto;
  }

  @keyframes kf-dropdown-menu-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes kf-dropdown-menu-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes kf-dropdown-menu-scale-in {
    from {
      transform: scale(0.96);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes kf-dropdown-menu-scale-out {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.96);
    }
  }

  @keyframes kf-dropdown-menu-slide-from-top {
    from {
      transform: translateY(calc(var(--kf-spacing, 0.25rem) * -2));
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes kf-dropdown-menu-slide-from-bottom {
    from {
      transform: translateY(calc(var(--kf-spacing, 0.25rem) * 2));
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes kf-dropdown-menu-slide-from-left {
    from {
      transform: translateX(calc(var(--kf-spacing, 0.25rem) * 2));
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes kf-dropdown-menu-slide-from-right {
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

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return (
    <>
      <DropdownMenuGlobalStyles />
      <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
    </>
  );
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn("kf-dropdown-menu__content", className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: DropdownMenuItemVariant;
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset ? "true" : undefined}
      data-variant={variant}
      className={cn("kf-dropdown-menu__item", className)}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn("kf-dropdown-menu__checkbox-item", className)}
      checked={checked}
      {...props}
    >
      <span className="kf-dropdown-menu__checkbox-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon aria-hidden="true" focusable="false" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn("kf-dropdown-menu__radio-item", className)}
      {...props}
    >
      <span className="kf-dropdown-menu__radio-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon aria-hidden="true" focusable="false" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset ? "true" : undefined}
      className={cn("kf-dropdown-menu__label", className)}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("kf-dropdown-menu__separator", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("kf-dropdown-menu__shortcut", className)}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset ? "true" : undefined}
      className={cn("kf-dropdown-menu__sub-trigger", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className="kf-dropdown-menu__sub-trigger-icon"
        aria-hidden="true"
        focusable="false"
      />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn("kf-dropdown-menu__sub-content", className)}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
