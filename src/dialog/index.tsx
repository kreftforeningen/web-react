import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const DialogGlobalStyles = createGlobalStyle`
  .kf-dialog__overlay {
    font-family: var(--kf-font-sans);
    position: fixed;
    inset: 0;
    z-index: 50;
    background: color-mix(in srgb, #000000 50%, transparent);
  }

  .kf-dialog__overlay[data-state="open"] {
    animation: kf-dialog-fade-in 160ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-dialog__overlay[data-state="closed"] {
    animation: kf-dialog-fade-out 120ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-dialog__content {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 50;
    display: grid;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    width: min(32rem, calc(100% - calc(var(--kf-spacing, 0.25rem) * 8)));
    transform: translate(-50%, -50%);
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    border-radius: var(--kf-radius-lg, 0.5rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    padding: calc(var(--kf-spacing, 0.25rem) * 6);
    box-shadow: var(--kf-shadow-xl, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04));
    background-clip: padding-box;
  }

  .kf-dialog__content[data-state="open"] {
    animation:
      kf-dialog-fade-in 160ms var(--kf-ease-out, ease-out) forwards,
      kf-dialog-scale-in 160ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-dialog__content[data-state="closed"] {
    animation:
      kf-dialog-fade-out 120ms var(--kf-ease-in, ease-in) forwards,
      kf-dialog-scale-out 120ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-dialog__header {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    text-align: center;
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-dialog__header {
      text-align: left;
    }
  }

  .kf-dialog__footer {
    display: flex;
    flex-direction: column-reverse;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-dialog__footer {
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  .kf-dialog__title {
    margin: 0;
    font-size: var(--kf-text-xl, 1.25rem);
    line-height: var(--kf-text-xl--line-height, 1.4);
    font-weight: 600;
  }

  .kf-dialog__description {
    margin: 0;
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.64));
  }

  .kf-dialog__close {
    position: absolute;
    top: calc(var(--kf-spacing, 0.25rem) * 4);
    right: calc(var(--kf-spacing, 0.25rem) * 4);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: var(--kf-radius-sm, 0.125rem);
    background: transparent;
    color: inherit;
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 120ms var(--kf-ease-in-out, ease);
  }

  .kf-dialog__close:hover {
    opacity: 1;
  }

  .kf-dialog__close:focus-visible {
    outline: none;
    --kf-ring-color: var(--kf-color-blue-400, rgba(59, 130, 246, 0.6));
    --kf-ring-offset-color: var(--kf-color-gray-50, #ffffff);
    --kf-ring-width: 2px;
    --kf-ring-offset-width: 2px;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .kf-dialog__close svg {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    pointer-events: none;
  }

  .kf-dialog__sr-only {
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

  @keyframes kf-dialog-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes kf-dialog-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes kf-dialog-scale-in {
    from {
      transform: translate(-50%, -50%) scale(0.96);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes kf-dialog-scale-out {
    from {
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      transform: translate(-50%, -50%) scale(0.96);
    }
  }
`;

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return (
    <>
      <DialogGlobalStyles />
      <DialogPrimitive.Root data-slot="dialog" {...props} />
    </>
  );
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn("kf-dialog__overlay", className)}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn("kf-dialog__content", className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="kf-dialog__close"
          >
            <XIcon aria-hidden="true" focusable="false" />
            <span className="kf-dialog__sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("kf-dialog__header", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("kf-dialog__footer", className)}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("kf-dialog__title", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("kf-dialog__description", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
