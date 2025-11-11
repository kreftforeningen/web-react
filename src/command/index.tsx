import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/dialog";

const CommandGlobalStyles = createGlobalStyle`
  .kf-command {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--kf-radius-md, 0.375rem);
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-command-dialog__content {
    padding: 0;
    overflow: hidden;
  }

  .kf-command__sr-only {
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

  .kf-command__input-wrapper {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    height: calc(var(--kf-spacing, 0.25rem) * 12);
    border-bottom: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-command__input {
    flex: 1;
    display: flex;
    align-items: center;
    height: calc(var(--kf-spacing, 0.25rem) * 12);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 3);
    background: transparent;
    border: 0;
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    color: inherit;
    outline: none;
  }

  .kf-command__input::placeholder {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-command__input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .kf-command__search-icon {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    opacity: 0.5;
    flex-shrink: 0;
  }

  .kf-command__list {
    max-height: 18.75rem;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-padding-block: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-command__empty {
    padding-block: calc(var(--kf-spacing, 0.25rem) * 6);
    text-align: center;
    font-size: var(--kf-text-base, 1rem);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-command__group {
    padding: calc(var(--kf-spacing, 0.25rem) * 1);
    overflow: hidden;
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-command__group [cmdk-group-heading] {
    display: block;
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1.5);
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    font-weight: 500;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-command__group [cmdk-group]:not([hidden]) + [cmdk-group] {
    padding-top: 0;
  }

  .kf-command__separator {
    height: 1px;
    margin-inline: calc(var(--kf-spacing, 0.25rem) * -1);
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-command__item {
    position: relative;
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 3) calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-sm, 0.125rem);
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: background-color 120ms var(--kf-ease-in-out, ease), color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-command__item svg {
    flex-shrink: 0;
    pointer-events: none;
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-command__item svg:not([class*="text-"]) {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-command__item[data-selected="true"] {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-command__item[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  .kf-command__shortcut {
    margin-left: auto;
    font-size: var(--kf-text-xs, 0.75rem);
    line-height: var(--kf-text-xs--line-height, 1.3333333333);
    letter-spacing: 0.08em;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }
`;

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <>
      <CommandGlobalStyles />
      <CommandPrimitive
        data-slot="command"
        className={cn("kf-command", className)}
        {...props}
      />
    </>
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="kf-command__sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("kf-command-dialog__content", className)}
        showCloseButton={showCloseButton}
      >
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="kf-command__input-wrapper"
    >
      <SearchIcon
        className="kf-command__search-icon"
        aria-hidden="true"
        focusable="false"
      />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn("kf-command__input", className)}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn("kf-command__list", className)}
      {...props}
    />
  );
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="kf-command__empty"
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn("kf-command__group", className)}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("kf-command__separator", className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn("kf-command__item", className)}
      {...props}
    />
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("kf-command__shortcut", className)}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
