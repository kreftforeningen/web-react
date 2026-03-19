"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/button";

const AlertDialogGlobalStyles = createGlobalStyle`
  .kf-alert-dialog__overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(
      in srgb,
      var(--kf-color-gray-950, #020617) 50%,
      transparent
    );
    backdrop-filter: blur(3px);
  }
  .dark .kf-alert-dialog__overlay {
    background: color-mix(
      in srgb,
      var(--kf-color-gray-950, #020617) 70%,
      transparent
    );
  }

  .kf-alert-dialog__overlay[data-state="open"] {
    animation: kf-alert-dialog-fade-in 160ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-alert-dialog__overlay[data-state="closed"] {
    animation: kf-alert-dialog-fade-out 160ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-alert-dialog__content {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 50;
    display: grid;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    width: min(32rem, calc(100% - calc(var(--kf-spacing, 0.25rem) * 8)));
    transform: translate(-50%, -50%);
    background: color-mix(
      in srgb,
      var(--kf-color-gray-50, #f9fafb) 96%,
      transparent
    );
    color: var(--kf-color-gray-950, #0f172a);
    border-radius: var(--kf-radius-2xl, 1rem);
    border: var(--kf-border-1, 1px)
      solid
      color-mix(
        in srgb,
        var(--kf-color-gray-300, rgba(15, 23, 42, 0.22)) 60%,
        transparent
      );
    padding: calc(var(--kf-spacing, 0.25rem) * 6);
    box-shadow:
      0 24px 60px rgba(15, 23, 42, 0.35),
      0 0 0 1px rgba(15, 23, 42, 0.06);
    background-clip: padding-box;
  }
  .dark .kf-alert-dialog__content {
    background: var(--kf-color-gray-950, #020617);
    color: var(--kf-color-gray-50, #f9fafb);
    border-color: color-mix(
      in srgb,
      var(--kf-color-gray-700, #374151) 75%,
      transparent
    );
    box-shadow:
      0 28px 70px rgba(0, 0, 0, 0.7),
      0 0 0 1px rgba(15, 23, 42, 0.65);
  }

  .kf-alert-dialog__content[data-state="open"] {
    animation:
      kf-alert-dialog-fade-in 160ms var(--kf-ease-out, ease-out) forwards,
      kf-alert-dialog-zoom-in 160ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-alert-dialog__content[data-state="closed"] {
    animation:
      kf-alert-dialog-fade-out 120ms var(--kf-ease-in, ease-in) forwards,
      kf-alert-dialog-zoom-out 120ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-alert-dialog__header {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-alert-dialog__header {
      text-align: left;
    }
  }

  .kf-alert-dialog__footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-alert-dialog__footer > * {
    flex: 0 0 auto;
  }

  @media (max-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-alert-dialog__footer {
      flex-direction: column-reverse;
      align-items: stretch;
    }

    .kf-alert-dialog__footer > * {
      width: 100%;
    }
  }

  .kf-alert-dialog__title {
    font-family: var(--kf-font-condensed);
    margin: 0;
    font-size: var(--kf-text-xl, 1.25rem);
    line-height: var(--kf-text-xl--line-height, 1.4);
    font-weight: 600;
  }

  .kf-alert-dialog__description {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.64));
    margin: 0;
  }
  .dark .kf-alert-dialog__description {
    color: var(--kf-color-gray-300, rgba(203, 213, 225, 0.72));
  }

  @keyframes kf-alert-dialog-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes kf-alert-dialog-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes kf-alert-dialog-zoom-in {
    from {
      transform: translate(-50%, -50%) scale(0.95);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes kf-alert-dialog-zoom-out {
    from {
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      transform: translate(-50%, -50%) scale(0.95);
    }
  }
`;

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <>
      <AlertDialogGlobalStyles />
      <AlertDialogPrimitive.Overlay
        data-slot="alert-dialog-overlay"
        className={cn("kf-alert-dialog__overlay", className)}
        {...props}
      />
    </>
  );
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn("kf-alert-dialog__content", className)}
        {...props}
      />
    </AlertDialogPortal>
  );
}

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="alert-dialog-header"
    className={cn("kf-alert-dialog__header", className)}
    {...props}
  />
));

AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="alert-dialog-footer"
    className={cn("kf-alert-dialog__footer", className)}
    {...props}
  />
));

AlertDialogFooter.displayName = "AlertDialogFooter";

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("kf-alert-dialog__title", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("kf-alert-dialog__description", className)}
      {...props}
    />
  );
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
