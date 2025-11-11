import { createGlobalStyle } from "styled-components";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import React, { useState, createContext, useContext } from "react";
import { ArrowDown } from "lucide-react";

const FactBoxGlobalStyles = createGlobalStyle`
  .kf-fact-box {
    font-family: var(--kf-font-sans);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 6);
    border-radius: var(--kf-radius-2xl, 1rem);
    background: var(--kf-color-blue-100, #dbeafe);
    color: var(--kf-color-gray-950, #0f172a);
  }

  .dark .kf-fact-box {
    background: var(--kf-color-blue-950, #172554);
  }

  .kf-fact-box__content {
    padding: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-fact-box__content {
      padding: calc(var(--kf-spacing, 0.25rem) * 12);
    }
  }

  .kf-fact-box__title {
    margin-top: 0;
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * 4);
    font-size: var(--kf-text-2xl, 1.5rem);
    line-height: var(--kf-text-2xl--line-height, 1.3333333333);
    font-weight: 700;
  }

  .kf-fact-box__description {
    position: relative;
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    color: var(--kf-color-gray-950, #0f172a);
  }

  .kf-fact-box__description[data-expanded="false"] {
    height: 5rem;
    overflow: hidden;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
  }

  .kf-fact-box__footer {
    display: flex;
    justify-content: center;
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 4);
    position: relative;
  }

  .kf-fact-box__toggle {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    width: calc(var(--kf-spacing, 0.25rem) * 10);
    height: calc(var(--kf-spacing, 0.25rem) * 10);
    border-radius: var(--kf-radius-full, 9999px);
    transition: transform 200ms var(--kf-ease-in-out, ease);
  }

  .kf-fact-box__toggle[data-expanded="true"] {
    transform: translateY(50%) rotate(180deg);
  }

  .kf-fact-box__sr-only {
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
`;

const FactBoxContext = createContext<
  | {
      expanded: boolean;
      toggle: () => void;
    }
  | undefined
>(undefined);

function FactBox({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded((prev) => !prev);
  return (
    <FactBoxContext.Provider value={{ expanded, toggle }}>
      <>
        <FactBoxGlobalStyles />
        <div
          data-slot="fact-box"
          data-expanded={expanded ? "true" : "false"}
          className={cn("kf-fact-box", className)}
          {...props}
        >
          {children}
        </div>
      </>
    </FactBoxContext.Provider>
  );
}

function FactBoxTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="fact-box-title"
      className={cn("kf-fact-box__title", className)}
      {...props}
    />
  );
}

function FactBoxContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fact-box-content"
      className={cn("kf-fact-box__content", className)}
      {...props}
    />
  );
}

function FactBoxDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const context = useContext(FactBoxContext);
  const expanded = context?.expanded;
  return (
    <div
      data-slot="fact-box-content"
      data-expanded={expanded ? "true" : "false"}
      className={cn("kf-fact-box__description", className)}
      {...props}
    />
  );
}

function FactBoxAction({
  className,
  expandText,
  contractText,
  ...props
}: React.ComponentProps<"div"> & {
  expandText?: string;
  contractText?: string;
}) {
  const context = useContext(FactBoxContext);
  if (!context) return null;
  const { expanded, toggle } = context;
  return (
    <div
      data-slot="fact-box-footer"
      className={cn("kf-fact-box__footer", className)}
      {...props}
    >
      <Button
        onClick={toggle}
        className={cn("kf-fact-box__toggle", className)}
        data-expanded={expanded ? "true" : "false"}
        variant="default"
        size="icon"
      >
        <ArrowDown />
        <span className="kf-fact-box__sr-only">
          {expanded ? contractText : expandText}
        </span>
      </Button>
    </div>
  );
}

export {
  FactBox,
  FactBoxTitle,
  FactBoxDescription,
  FactBoxAction,
  FactBoxContent,
};
