import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const MenubarGlobalStyles = createGlobalStyle`
  .kf-menubar {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    height: calc(var(--kf-spacing, 0.25rem) * 11);
    padding: calc(var(--kf-spacing, 0.25rem) * 1);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, #ffffff);
    box-shadow: var(--kf-shadow-xs, 0 1px 2px 0 rgb(15 23 42 / 0.04));
  }

  .kf-menubar__trigger,
  .kf-menubar__sub-trigger {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1.5);
    border-radius: var(--kf-radius-sm, 0.25rem);
    background: transparent;
    color: var(--kf-color-gray-950, #0f172a);
    font-size: var(--kf-text-base, 1rem);
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition:
      background 120ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease),
      box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .kf-menubar__trigger[data-state="open"],
  .kf-menubar__trigger:hover,
  .kf-menubar__trigger:focus-visible,
  .kf-menubar__sub-trigger[data-state="open"],
  .kf-menubar__sub-trigger:hover,
  .kf-menubar__sub-trigger:focus-visible {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-menubar__trigger:focus-visible,
  .kf-menubar__sub-trigger:focus-visible {
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-menubar__trigger[data-disabled="true"],
  .kf-menubar__sub-trigger[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }

  .kf-menubar__content,
  .kf-menubar__sub-content {
    min-width: 12rem;
    padding: calc(var(--kf-spacing, 0.25rem) * 1);
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    box-shadow: var(--kf-shadow-md, 0 4px 6px -1px rgb(15 23 42 / 0.1), 0 2px 4px -2px rgb(15 23 42 / 0.08));
    outline: none;
    z-index: 50;
  }

  .kf-menubar__sub-content {
    min-width: 8rem;
  }

  .kf-menubar__content[data-state="open"],
  .kf-menubar__sub-content[data-state="open"] {
    animation:
      kf-menubar-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-menubar-scale-in 150ms var(--kf-ease-out, ease-out);
  }

  .kf-menubar__content[data-state="closed"],
  .kf-menubar__sub-content[data-state="closed"] {
    animation:
      kf-menubar-fade-out 120ms var(--kf-ease-in, ease-in),
      kf-menubar-scale-out 120ms var(--kf-ease-in, ease-in);
  }

  .kf-menubar__content[data-side="top"],
  .kf-menubar__sub-content[data-side="top"] {
    animation:
      kf-menubar-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-menubar-slide-up 150ms var(--kf-ease-out, ease-out);
  }

  .kf-menubar__content[data-side="bottom"],
  .kf-menubar__sub-content[data-side="bottom"] {
    animation:
      kf-menubar-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-menubar-slide-down 150ms var(--kf-ease-out, ease-out);
  }

  .kf-menubar__content[data-side="left"],
  .kf-menubar__sub-content[data-side="left"] {
    animation:
      kf-menubar-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-menubar-slide-left 150ms var(--kf-ease-out, ease-out);
  }

  .kf-menubar__content[data-side="right"],
  .kf-menubar__sub-content[data-side="right"] {
    animation:
      kf-menubar-fade-in 150ms var(--kf-ease-out, ease-out),
      kf-menubar-slide-right 150ms var(--kf-ease-out, ease-out);
  }

  .kf-menubar__item,
  .kf-menubar__checkbox-item,
  .kf-menubar__radio-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1.5);
    border-radius: var(--kf-radius-sm, 0.25rem);
    font-size: var(--kf-text-base, 1rem);
    outline: none;
    cursor: pointer;
    color: inherit;
    transition:
      background 120ms var(--kf-ease-in-out, ease),
      color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-menubar__item[data-inset="true"],
  .kf-menubar__sub-trigger[data-inset="true"] {
    padding-left: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-menubar__checkbox-item,
  .kf-menubar__radio-item {
    padding-left: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-menubar__item[data-variant="destructive"] {
    color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-menubar__item[data-variant="destructive"]:hover,
  .kf-menubar__item[data-variant="destructive"]:focus-visible {
    background: color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 16%, transparent);
    color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-menubar__item:hover,
  .kf-menubar__item:focus-visible,
  .kf-menubar__checkbox-item:hover,
  .kf-menubar__checkbox-item:focus-visible,
  .kf-menubar__radio-item:hover,
  .kf-menubar__radio-item:focus-visible,
  .kf-menubar__sub-trigger[data-state="open"] {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-menubar__item[data-disabled="true"],
  .kf-menubar__checkbox-item[data-disabled="true"],
  .kf-menubar__radio-item[data-disabled="true"],
  .kf-menubar__sub-trigger[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }

  .kf-menubar__indicator {
    position: absolute;
    left: calc(var(--kf-spacing, 0.25rem) * 2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--kf-spacing, 0.25rem) * 3.5);
    height: calc(var(--kf-spacing, 0.25rem) * 3.5);
    pointer-events: none;
  }

  .kf-menubar__label {
    display: block;
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1.5);
    font-size: var(--kf-text-base, 1rem);
    font-weight: 500;
  }

  .kf-menubar__label[data-inset="true"] {
    padding-left: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-menubar__separator {
    height: 1px;
    margin-inline: calc(var(--kf-spacing, 0.25rem) * -1);
    margin-block: calc(var(--kf-spacing, 0.25rem) * 1);
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-menubar__shortcut {
    margin-left: auto;
    font-size: var(--kf-text-xs, 0.75rem);
    letter-spacing: 0.08em;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-menubar__sub-trigger-icon {
    margin-left: auto;
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  @keyframes kf-menubar-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes kf-menubar-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes kf-menubar-scale-in {
    from { transform: scale(0.97); }
    to { transform: scale(1); }
  }

  @keyframes kf-menubar-scale-out {
    from { transform: scale(1); }
    to { transform: scale(0.97); }
  }

  @keyframes kf-menubar-slide-up {
    from { transform: translateY(calc(var(--kf-spacing, 0.25rem) * 2)); }
    to { transform: translateY(0); }
  }

  @keyframes kf-menubar-slide-down {
    from { transform: translateY(calc(var(--kf-spacing, 0.25rem) * -2)); }
    to { transform: translateY(0); }
  }

  @keyframes kf-menubar-slide-left {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * 2)); }
    to { transform: translateX(0); }
  }

  @keyframes kf-menubar-slide-right {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * -2)); }
    to { transform: translateX(0); }
  }
`;

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <>
      <MenubarGlobalStyles />
      <MenubarPrimitive.Root
        data-slot="menubar"
        className={cn("kf-menubar", className)}
        {...props}
      />
    </>
  );
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn("kf-menubar__trigger", className)}
      {...props}
    />
  );
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn("kf-menubar__content", className)}
        {...props}
      />
    </MenubarPortal>
  );
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn("kf-menubar__item", className)}
      {...props}
    />
  );
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn("kf-menubar__checkbox-item", className)}
      checked={checked}
      {...props}
    >
      <span className="kf-menubar__indicator">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" aria-hidden="true" focusable="false" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn("kf-menubar__radio-item", className)}
      {...props}
    >
      <span className="kf-menubar__indicator">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon
            className="size-2 fill-current"
            aria-hidden="true"
            focusable="false"
          />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn("kf-menubar__label", className)}
      {...props}
    />
  );
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("kf-menubar__separator", className)}
      {...props}
    />
  );
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn("kf-menubar__shortcut", className)}
      {...props}
    />
  );
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn("kf-menubar__sub-trigger", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className="kf-menubar__sub-trigger-icon"
        aria-hidden="true"
        focusable="false"
      />
    </MenubarPrimitive.SubTrigger>
  );
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn("kf-menubar__sub-content", className)}
      {...props}
    />
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
};
