import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";

type InputGroupAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

type InputGroupButtonSize = "xs" | "sm" | "icon-xs" | "icon-sm";

const InputGroupGlobalStyles = createGlobalStyle`
  .kf-input-group {
    font-family: var(--kf-font-sans);
    position: relative;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    background: var(--kf-color-gray-50, rgba(15, 23, 42, 0.08));
    transition: box-shadow 120ms var(--kf-ease-in-out, ease);
  }

  .dark .kf-input-group {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.1)) 90%, transparent);
  }

  .kf-input-group[data-disabled="true"] {
    opacity: 0.5;
  }

  .kf-input-group:has([data-slot="input-group-control"]:focus-visible) {
    border-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 65%, transparent);
  }

  .kf-input-group[data-invalid="true"] {
    border-color: var(--kf-color-red-700, #b91c1c);
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--kf-color-red-700, #b91c1c) 20%, transparent);
  }

  .kf-input-group--inline-start input {
    padding-left: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-input-group--inline-end input {
    padding-right: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-input-group--block-start {
    flex-direction: column;
    align-items: stretch;
    height: auto;
  }

  .kf-input-group--block-start input {
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-input-group--block-end {
    flex-direction: column;
    align-items: stretch;
    height: auto;
  }

  .kf-input-group--block-end input {
    padding-top: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-input-group-addon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-sm, 0.875rem);
    font-weight: 500;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1.5);
    cursor: text;
    user-select: none;
  }

  .kf-input-group[data-disabled="true"] .kf-input-group-addon {
    opacity: 0.5;
  }

  .kf-input-group-addon > svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-input-group-addon > kbd {
    border-radius: calc(var(--kf-radius-md, 0.375rem) - 5px);
  }

  .kf-input-group-addon--inline-start {
    order: -1;
    padding-left: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-input-group-addon--inline-start:has(> button) {
    margin-left: calc(var(--kf-spacing, 0.25rem) * -1.8);
  }

  .kf-input-group-addon--inline-start:has(> kbd) {
    margin-left: calc(var(--kf-spacing, 0.25rem) * -1.4);
  }

  .kf-input-group-addon--inline-end {
    order: 1;
    padding-right: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-input-group-addon--inline-end:has(> button) {
    margin-right: calc(var(--kf-spacing, 0.25rem) * -1.8);
  }

  .kf-input-group-addon--inline-end:has(> kbd) {
    margin-right: calc(var(--kf-spacing, 0.25rem) * -1.4);
  }

  .kf-input-group-addon--block-start {
    order: -1;
    width: 100%;
    justify-content: flex-start;
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
    padding-top: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-input-group-addon--block-end {
    order: 1;
    width: 100%;
    justify-content: flex-start;
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 3);
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-input-group-button {
    display: inline-flex;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    align-items: center;
    box-shadow: none;
    font-size: var(--kf-text-sm, 0.875rem);
  }

  .kf-input-group-button[data-size="xs"] {
    height: calc(var(--kf-spacing, 0.25rem) * 6);
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: calc(var(--kf-radius-md, 0.375rem) - 5px);
  }

  .kf-input-group-button[data-size="xs"]:has(> svg) {
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-input-group-button[data-size="sm"] {
    height: calc(var(--kf-spacing, 0.25rem) * 8);
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2.5);
    border-radius: var(--kf-radius-md, 0.375rem);
  }

  .kf-input-group-button[data-size="icon-xs"] {
    width: calc(var(--kf-spacing, 0.25rem) * 6);
    height: calc(var(--kf-spacing, 0.25rem) * 6);
    padding: 0;
    border-radius: calc(var(--kf-radius-md, 0.375rem) - 5px);
  }

  .kf-input-group-button[data-size="icon-sm"] {
    width: calc(var(--kf-spacing, 0.25rem) * 8);
    height: calc(var(--kf-spacing, 0.25rem) * 8);
    padding: 0;
    border-radius: var(--kf-radius-md, 0.375rem);
  }

  .kf-input-group-text {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-input-group-text svg {
    pointer-events: none;
  }

  .kf-input-group-text svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-input-group-control {
    flex: 1 1 auto;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }

  .kf-input-group-control:focus-visible {
    box-shadow: none;
  }

  .kf-input-group textarea.kf-input-group-control {
    resize: none;
    padding-block: calc(var(--kf-spacing, 0.25rem) * 3);
  }
`;

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <InputGroupGlobalStyles />
      <div
        data-slot="input-group"
        role="group"
        className={cn("kf-input-group", className)}
        {...props}
      />
    </>
  );
}

const alignClassMap: Record<InputGroupAlign, string> = {
  "inline-start": "kf-input-group-addon--inline-start",
  "inline-end": "kf-input-group-addon--inline-end",
  "block-start": "kf-input-group-addon--block-start",
  "block-end": "kf-input-group-addon--block-end",
};

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & { align?: InputGroupAlign }) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn("kf-input-group-addon", alignClassMap[align], className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

const sizeClassMap: Record<InputGroupButtonSize, string> = {
  xs: "kf-input-group-button",
  sm: "kf-input-group-button",
  "icon-xs": "kf-input-group-button",
  "icon-sm": "kf-input-group-button",
};

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> & {
  size?: InputGroupButtonSize;
}) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(sizeClassMap[size], className)}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("kf-input-group-text", className)} {...props} />;
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn("kf-input-group-control", className)}
      {...props}
    />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn("kf-input-group-control", className)}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
