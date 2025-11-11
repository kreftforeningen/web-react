import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const AccordionGlobalStyles = createGlobalStyle`
  .kf-accordion {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .kf-accordion-header {
    
    display: flex;
    margin: 0;
  }

  .kf-accordion-item {
    border-bottom-width: var(--kf-border-1, 1px);
    border-bottom-style: solid;
    border-bottom-color: var(--kf-color-gray-200, var(--border, rgba(15, 23, 42, 0.12)));
  }

  .kf-accordion-item:last-of-type {
    border-bottom-width: 0;
  }

  .kf-accordion-trigger {
    font-family: var(--kf-font-sans);
    display: flex;
    flex: 1;
    align-items: flex-start;
    justify-content: space-between;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    width: 100%;
    background: transparent;
    border: none;
    border-radius: var(--kf-radius-md, 0.375rem);
    color: inherit;
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    font-weight: 500;
    text-align: left;
    padding: calc(var(--kf-spacing, 0.25rem) * 3) 0;
    cursor: pointer;
    transition: color 150ms var(--kf-ease-in-out, ease), box-shadow 150ms var(--kf-ease-in-out, ease), text-decoration-color 150ms var(--kf-ease-in-out, ease);
    text-decoration: none;
    outline: none;
  }

  .kf-accordion-trigger:hover {
    text-decoration: underline;
  }

  .kf-accordion-trigger:focus-visible {
    --kf-ring-color: var(--kf-color-blue-500, #3b82f6);
    --kf-ring-offset-color: var(--kf-color-white, #ffffff);
    --kf-ring-width: 3px;
    --kf-ring-offset-width: 2px;
    box-shadow:
      0 0 0 var(--kf-ring-offset-width) var(--kf-ring-offset-color),
      0 0 0 calc(var(--kf-ring-offset-width) + var(--kf-ring-width)) var(--kf-ring-color);
  }

  .dark .kf-accordion-trigger:focus-visible {
    --kf-ring-offset-color: var(--kf-color-gray-950, #0b0f19);
  }

  .kf-accordion-trigger:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }

  .kf-accordion-trigger__icon {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    transform: translateY(0.125rem) rotate(0deg);
    transition: transform 200ms var(--kf-ease-in-out, ease), color 150ms var(--kf-ease-in-out, ease);
    pointer-events: none;
    color: var(--kf-color-blue-700, #1d4ed8);
  }

  .dark .kf-accordion-trigger__icon {
    color: var(--kf-color-blue-200, #bfdbfe);
  }

  .kf-accordion-trigger[data-state="open"] .kf-accordion-trigger__icon {
    transform: translateY(0.125rem) rotate(180deg);
  }

  .kf-accordion-content {
    overflow: hidden;
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
  }

  .kf-accordion-content[data-state="open"] {
    animation: kf-accordion-down 200ms var(--kf-ease-out, ease-out);
  }

  .kf-accordion-content[data-state="closed"] {
    animation: kf-accordion-up 200ms var(--kf-ease-in, ease-in);
  }

  .kf-accordion-content__inner {
    padding-top: 0;
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  @keyframes kf-accordion-down {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
  }

  @keyframes kf-accordion-up {
    from {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }
`;

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <>
      <AccordionGlobalStyles />
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn("kf-accordion", className)}
        {...props}
      />
    </>
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("kf-accordion-item", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="kf-accordion-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn("kf-accordion-trigger", className)}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="kf-accordion-trigger__icon"
          aria-hidden="true"
          focusable="false"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="kf-accordion-content"
      {...props}
    >
      <div className={cn("kf-accordion-content__inner", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
