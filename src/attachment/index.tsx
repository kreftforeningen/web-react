"use client";

import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type AttachmentState = "idle" | "uploading" | "processing" | "error" | "done";
type AttachmentSize = "default" | "sm" | "xs";
type AttachmentOrientation = "horizontal" | "vertical";
type AttachmentMediaVariant = "icon" | "image";

const AttachmentGlobalStyles = createGlobalStyle`
  @keyframes kf-attachment-shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .kf-attachment {
    font-family: var(--kf-font-sans);
    position: relative;
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-200, rgba(15, 23, 42, 0.08));
    border-radius: var(--kf-radius-lg, 0.5rem);
    background: var(--kf-color-gray-100, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    padding: calc(var(--kf-spacing, 0.25rem) * 3);
    min-width: 0;
  }

  .kf-attachment--vertical {
    flex-direction: column;
    align-items: stretch;
  }

  .kf-attachment--sm {
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-attachment--xs {
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    padding: calc(var(--kf-spacing, 0.25rem) * 1.5);
  }

  .kf-attachment--error {
    border-color: var(--kf-color-red-300, #fca5a5);
    background: var(--kf-color-red-50, #fef2f2);
  }

  .kf-attachment__media {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .kf-attachment__media svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  .kf-attachment__media--icon {
    width: calc(var(--kf-spacing, 0.25rem) * 10);
    height: calc(var(--kf-spacing, 0.25rem) * 10);
    border-radius: var(--kf-radius-md, 0.375rem);
    background: var(--kf-color-gray-50, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }

  .kf-attachment--sm .kf-attachment__media--icon {
    width: calc(var(--kf-spacing, 0.25rem) * 8);
    height: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-attachment--xs .kf-attachment__media--icon {
    width: calc(var(--kf-spacing, 0.25rem) * 6);
    height: calc(var(--kf-spacing, 0.25rem) * 6);
  }

  .kf-attachment__media--icon svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 5);
    height: calc(var(--kf-spacing, 0.25rem) * 5);
  }

  .kf-attachment--sm .kf-attachment__media--icon svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-attachment__media--image {
    width: calc(var(--kf-spacing, 0.25rem) * 12);
    height: calc(var(--kf-spacing, 0.25rem) * 12);
    border-radius: var(--kf-radius-md, 0.375rem);
    overflow: hidden;
  }

  .kf-attachment__media--image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .kf-attachment--error .kf-attachment__media--icon {
    background: var(--kf-color-red-100, #fee2e2);
    color: var(--kf-color-red-600, #dc2626);
  }

  .kf-attachment__content {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 0.5);
    flex: 1 1 auto;
    min-width: 0;
  }

  .kf-attachment__title {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .kf-attachment__title--shimmer {
    background: linear-gradient(
      90deg,
      var(--kf-color-gray-200, rgba(15, 23, 42, 0.08)) 25%,
      var(--kf-color-gray-100, #ffffff) 50%,
      var(--kf-color-gray-200, rgba(15, 23, 42, 0.08)) 75%
    );
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: kf-attachment-shimmer 1.5s ease-in-out infinite;
  }

  .kf-attachment__description {
    font-size: var(--kf-text-xs, 0.75rem);
    line-height: var(--kf-text-xs--line-height, 1.5);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }

  .kf-attachment--error .kf-attachment__description {
    color: var(--kf-color-red-600, #dc2626);
  }

  .kf-attachment__actions {
    display: flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    flex-shrink: 0;
  }

  .kf-attachment__action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--kf-spacing, 0.25rem) * 7);
    height: calc(var(--kf-spacing, 0.25rem) * 7);
    border-radius: var(--kf-radius-md, 0.375rem);
    border: none;
    background: transparent;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
    cursor: pointer;
    padding: 0;
    transition: background 0.15s, color 0.15s;
  }

  .kf-attachment__action:hover {
    background: var(--kf-color-gray-50, rgba(148, 163, 184, 0.16));
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-attachment__action:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width, 2px) var(--kf-ring-offset-color, #ffffff),
      0 0 0 calc(var(--kf-ring-offset-width, 2px) + var(--kf-ring-width, 2px)) var(--kf-ring-color, #3b82f6);
  }

  .kf-attachment__action svg:not([class*="size-"]) {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-attachment__trigger {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    z-index: 0;
  }

  .kf-attachment__trigger:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width, 2px) var(--kf-ring-offset-color, #ffffff),
      0 0 0 calc(var(--kf-ring-offset-width, 2px) + var(--kf-ring-width, 2px)) var(--kf-ring-color, #3b82f6);
  }

  .kf-attachment:has(.kf-attachment__trigger):hover {
    background: var(--kf-color-gray-50, rgba(148, 163, 184, 0.16));
  }

  .kf-attachment__actions {
    position: relative;
    z-index: 1;
  }

  .kf-attachment-group {
    display: flex;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    mask-image: linear-gradient(
      to right,
      transparent,
      black calc(var(--kf-spacing, 0.25rem) * 2),
      black calc(100% - calc(var(--kf-spacing, 0.25rem) * 2)),
      transparent
    );
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-attachment-group > * {
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  .dark .kf-attachment {
    background: var(--kf-color-gray-900, #0f172a);
    border-color: var(--kf-color-gray-800, #1e293b);
    color: var(--kf-color-gray-200, #e2e8f0);
  }

  .dark .kf-attachment--error {
    border-color: var(--kf-color-red-800, #991b1b);
    background: color-mix(in srgb, var(--kf-color-red-950, #450a0a) 40%, var(--kf-color-gray-900, #0f172a));
  }

  .dark .kf-attachment__media--icon {
    background: var(--kf-color-gray-800, #1e293b);
    color: var(--kf-color-gray-400, #94a3b8);
  }

  .dark .kf-attachment--error .kf-attachment__media--icon {
    background: var(--kf-color-red-900, #7f1d1d);
    color: var(--kf-color-red-400, #f87171);
  }

  .dark .kf-attachment__title--shimmer {
    background: linear-gradient(
      90deg,
      var(--kf-color-gray-700, #334155) 25%,
      var(--kf-color-gray-800, #1e293b) 50%,
      var(--kf-color-gray-700, #334155) 75%
    );
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: kf-attachment-shimmer 1.5s ease-in-out infinite;
  }

  .dark .kf-attachment__description {
    color: var(--kf-color-gray-400, #94a3b8);
  }

  .dark .kf-attachment--error .kf-attachment__description {
    color: var(--kf-color-red-400, #f87171);
  }

  .dark .kf-attachment__action {
    color: var(--kf-color-gray-400, #94a3b8);
  }

  .dark .kf-attachment__action:hover {
    background: var(--kf-color-gray-800, #1e293b);
    color: var(--kf-color-gray-200, #e2e8f0);
  }

  .dark .kf-attachment:has(.kf-attachment__trigger):hover {
    background: var(--kf-color-gray-800, #1e293b);
  }
`;

const attachmentMediaVariantClasses: Record<AttachmentMediaVariant, string> = {
  icon: "kf-attachment__media kf-attachment__media--icon",
  image: "kf-attachment__media kf-attachment__media--image",
};

const attachmentSizeClasses: Record<AttachmentSize, string> = {
  default: "",
  sm: "kf-attachment--sm",
  xs: "kf-attachment--xs",
};

function Attachment({
  className,
  state = "done",
  size = "default",
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  state?: AttachmentState;
  size?: AttachmentSize;
  orientation?: AttachmentOrientation;
}) {
  return (
    <>
      <AttachmentGlobalStyles />
      <div
        data-slot="attachment"
        data-state={state}
        data-size={size}
        data-orientation={orientation}
        className={cn(
          "kf-attachment",
          attachmentSizeClasses[size],
          orientation === "vertical" && "kf-attachment--vertical",
          state === "error" && "kf-attachment--error",
          className,
        )}
        {...props}
      />
    </>
  );
}

function AttachmentMedia({
  className,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & { variant?: AttachmentMediaVariant }) {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={cn(attachmentMediaVariantClasses[variant], className)}
      {...props}
    />
  );
}

function AttachmentContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={cn("kf-attachment__content", className)}
      {...props}
    />
  );
}

function AttachmentTitle({
  className,
  shimmer = false,
  ...props
}: React.ComponentProps<"div"> & { shimmer?: boolean }) {
  return (
    <div
      data-slot="attachment-title"
      className={cn(
        "kf-attachment__title",
        shimmer && "kf-attachment__title--shimmer",
        className,
      )}
      {...props}
    />
  );
}

function AttachmentDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-description"
      className={cn("kf-attachment__description", className)}
      {...props}
    />
  );
}

function AttachmentActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn("kf-attachment__actions", className)}
      {...props}
    />
  );
}

function AttachmentAction({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="attachment-action"
      type="button"
      className={cn("kf-attachment__action", className)}
      {...props}
    />
  );
}

function AttachmentTrigger({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="attachment-trigger"
      type="button"
      className={cn("kf-attachment__trigger", className)}
      {...props}
    />
  );
}

function AttachmentGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-group"
      className={cn("kf-attachment-group", className)}
      {...props}
    />
  );
}

export {
  Attachment,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
  AttachmentGroup,
};
