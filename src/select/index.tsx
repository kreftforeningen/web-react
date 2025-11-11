import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const SelectGlobalStyles = createGlobalStyle`
  .kf-select__trigger {
    font-family: var(--kf-font-sans);
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.08));
    color: var(--kf-color-gray-950, #0f172a);
    font-size: var(--kf-text-md, 1.0625rem);
    white-space: nowrap;
    box-shadow: var(--kf-shadow-xs, 0 1px 2px 0 rgb(15 23 42 / 0.05));
    outline: none;
    transition:
      color 120ms var(--kf-ease-in-out, ease),
      background 120ms var(--kf-ease-in-out, ease),
      box-shadow 120ms var(--kf-ease-in-out, ease),
      border-color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-select__trigger[data-placeholder] {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-select__trigger[data-size="default"] {
    height: calc(var(--kf-spacing, 0.25rem) * 11);
  }

  .kf-select__trigger[data-size="sm"] {
    height: calc(var(--kf-spacing, 0.25rem) * 9);
    font-size: var(--kf-text-sm, 0.875rem);
  }

  .kf-select__trigger svg:not([class*="text-"]) {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-select__trigger svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  .kf-select__trigger:focus-visible {
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-select__trigger[aria-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-select__trigger[aria-invalid="true"]:focus-visible {
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 25%, transparent);
  }

  .kf-select__trigger:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .dark .kf-select__trigger {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 80%, transparent);
  }

  .kf-select__icon {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    opacity: 0.5;
  }

  .kf-select__value {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .kf-select__content {
    position: relative;
    z-index: 50;
    min-width: 8rem;
    max-height: var(--radix-select-content-available-height);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    box-shadow: var(--kf-shadow-md, 0 4px 6px -1px rgb(15 23 42 / 0.1), 0 2px 4px -2px rgb(15 23 42 / 0.08));
    overflow-x: hidden;
    overflow-y: auto;
  }

  .kf-select__content[data-state="open"] {
    animation:
      kf-select-fade-in 140ms var(--kf-ease-out, ease-out),
      kf-select-scale-in 140ms var(--kf-ease-out, ease-out);
  }

  .kf-select__content[data-state="closed"] {
    animation:
      kf-select-fade-out 110ms var(--kf-ease-in, ease-in),
      kf-select-scale-out 110ms var(--kf-ease-in, ease-in);
  }

  .kf-select__content[data-side="top"] {
    animation:
      kf-select-fade-in 140ms var(--kf-ease-out, ease-out),
      kf-select-slide-up 140ms var(--kf-ease-out, ease-out);
  }

  .kf-select__content[data-side="bottom"] {
    animation:
      kf-select-fade-in 140ms var(--kf-ease-out, ease-out),
      kf-select-slide-down 140ms var(--kf-ease-out, ease-out);
  }

  .kf-select__content[data-side="left"] {
    animation:
      kf-select-fade-in 140ms var(--kf-ease-out, ease-out),
      kf-select-slide-left 140ms var(--kf-ease-out, ease-out);
  }

  .kf-select__content[data-side="right"] {
    animation:
      kf-select-fade-in 140ms var(--kf-ease-out, ease-out),
      kf-select-slide-right 140ms var(--kf-ease-out, ease-out);
  }

  .kf-select__content[data-position="popper"][data-side="bottom"] {
    margin-top: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-select__content[data-position="popper"][data-side="top"] {
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-select__content[data-position="popper"][data-side="left"] {
    margin-right: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-select__content[data-position="popper"][data-side="right"] {
    margin-left: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-select__viewport {
    padding: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-select__content[data-position="popper"] .kf-select__viewport {
    height: var(--radix-select-trigger-height);
    min-width: var(--radix-select-trigger-width);
    width: 100%;
  }

  .kf-select__label {
    font-size: var(--kf-text-xs, 0.75rem);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1.5);
  }

  .kf-select__item {
    position: relative;
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    width: 100%;
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1.5);
    padding-inline-start: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-inline-end: calc(var(--kf-spacing, 0.25rem) * 8);
    border-radius: var(--kf-radius-sm, 0.25rem);
    font-size: var(--kf-text-sm, 0.875rem);
    cursor: pointer;
    outline: none;
  }

  .kf-select__item svg:not([class*="text-"]) {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-select__item:hover,
  .kf-select__item:focus-visible {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-select__item[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }

  .kf-select__item-indicator {
    position: absolute;
    right: calc(var(--kf-spacing, 0.25rem) * 2);
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--kf-spacing, 0.25rem) * 3.5);
    height: calc(var(--kf-spacing, 0.25rem) * 3.5);
  }

  .kf-select__separator {
    height: 1px;
    margin-inline: calc(var(--kf-spacing, 0.25rem) * -1);
    margin-block: calc(var(--kf-spacing, 0.25rem) * 1);
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-select__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-select__scroll-button-icon {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  @keyframes kf-select-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes kf-select-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes kf-select-scale-in {
    from { transform: scale(0.97); }
    to { transform: scale(1); }
  }

  @keyframes kf-select-scale-out {
    from { transform: scale(1); }
    to { transform: scale(0.97); }
  }

  @keyframes kf-select-slide-up {
    from { transform: translateY(calc(var(--kf-spacing, 0.25rem) * 2)); }
    to { transform: translateY(0); }
  }

  @keyframes kf-select-slide-down {
    from { transform: translateY(calc(var(--kf-spacing, 0.25rem) * -2)); }
    to { transform: translateY(0); }
  }

  @keyframes kf-select-slide-left {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * 2)); }
    to { transform: translateX(0); }
  }

  @keyframes kf-select-slide-right {
    from { transform: translateX(calc(var(--kf-spacing, 0.25rem) * -2)); }
    to { transform: translateX(0); }
  }
`;

type SelectTriggerSize = "sm" | "default";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return (
    <>
      <SelectGlobalStyles />
      <SelectPrimitive.Root data-slot="select" {...props} />
    </>
  );
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: SelectTriggerSize;
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn("kf-select__trigger", className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon
          className="kf-select__icon"
          aria-hidden="true"
          focusable="false"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn("kf-select__content", className)}
        position={position}
        data-position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={cn("kf-select__viewport")}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("kf-select__label", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn("kf-select__item", className)}
      {...props}
    >
      <span className="kf-select__item-indicator">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" aria-hidden="true" focusable="false" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("kf-select__separator", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("kf-select__scroll-button", className)}
      {...props}
    >
      <ChevronUpIcon
        className="kf-select__scroll-button-icon"
        aria-hidden="true"
        focusable="false"
      />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("kf-select__scroll-button", className)}
      {...props}
    >
      <ChevronDownIcon
        className="kf-select__scroll-button-icon"
        aria-hidden="true"
        focusable="false"
      />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
