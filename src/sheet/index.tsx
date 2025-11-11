import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { Button } from "../button";

const SheetGlobalStyles = createGlobalStyle`
  .kf-sheet__overlay {
    font-family: var(--kf-font-sans);
    position: fixed;
    inset: 0;
    z-index: 50;
    background: rgba(15, 23, 42, 0.5);
  }

  .kf-sheet__overlay[data-state="open"] {
    animation: kf-sheet-fade-in 200ms var(--kf-ease-out, ease-out);
  }

  .kf-sheet__overlay[data-state="closed"] {
    animation: kf-sheet-fade-out 150ms var(--kf-ease-in, ease-in);
  }

  .kf-sheet__content {
    position: fixed;
    z-index: 50;
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-950, #0f172a);
    box-shadow: var(--kf-shadow-lg, 0 10px 15px -3px rgb(15 23 42 / 0.1), 0 4px 6px -4px rgb(15 23 42 / 0.08));
    transition: transform 300ms var(--kf-ease-in-out, ease), opacity 300ms var(--kf-ease-in-out, ease);
  }

  .kf-sheet__content[data-state="open"] {
    animation: kf-sheet-slide-in 300ms var(--kf-ease-out, ease-out) forwards;
  }

  .kf-sheet__content[data-state="closed"] {
    animation: kf-sheet-slide-out 250ms var(--kf-ease-in, ease-in) forwards;
  }

  .kf-sheet__content[data-side="right"] {
    inset: 0;
    inset-inline-start: auto;
    width: min(75vw, 24rem);
    border-left: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    transform: translateX(100%);
  }

  .kf-sheet__content[data-side="left"] {
    inset: 0;
    inset-inline-end: auto;
    width: min(75vw, 24rem);
    border-right: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    transform: translateX(-100%);
  }

  .kf-sheet__content[data-side="top"] {
    inset-inline: 0;
    inset-block-start: 0;
    width: 100%;
    border-bottom: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    transform: translateY(-100%);
  }

  .kf-sheet__content[data-side="bottom"] {
    inset-inline: 0;
    inset-block-end: 0;
    width: 100%;
    border-top: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    transform: translateY(100%);
  }

  .kf-sheet__content[data-state="open"][data-side="right"],
  .kf-sheet__content[data-state="open"][data-side="left"] {
    transform: translateX(0);
  }

  .kf-sheet__content[data-state="open"][data-side="top"],
  .kf-sheet__content[data-state="open"][data-side="bottom"] {
    transform: translateY(0);
  }

  .kf-sheet__content[data-state="closed"][data-side="right"] {
    transform: translateX(100%);
  }

  .kf-sheet__content[data-state="closed"][data-side="left"] {
    transform: translateX(-100%);
  }

  .kf-sheet__content[data-state="closed"][data-side="top"] {
    transform: translateY(-100%);
  }

  .kf-sheet__content[data-state="closed"][data-side="bottom"] {
    transform: translateY(100%);
  }

  .kf-sheet__header {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-sheet__footer {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
    margin-top: auto;
  }

  .kf-sheet__title {
    font-weight: 600;
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-sheet__description {
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }

  .kf-sheet__close {
    position: absolute;
    top: calc(var(--kf-spacing, 0.25rem) * 4);
    right: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-sheet__close-icon {
    width: calc(var(--kf-spacing, 0.25rem) * 6);
    height: calc(var(--kf-spacing, 0.25rem) * 6);
  }

  @keyframes kf-sheet-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes kf-sheet-fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes kf-sheet-slide-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes kf-sheet-slide-out {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return (
    <>
      <SheetGlobalStyles />
      <SheetPrimitive.Root data-slot="sheet" {...props} />
    </>
  );
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn("kf-sheet__overlay", className)}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn("kf-sheet__content", className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close asChild>
          <Button variant="ghost" className="kf-sheet__close">
            <XIcon
              className="kf-sheet__close-icon"
              aria-hidden="true"
              focusable="false"
            />
            <span className="sr-only">Close</span>
          </Button>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("kf-sheet__header", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("kf-sheet__footer", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("kf-sheet__title", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("kf-sheet__description", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
