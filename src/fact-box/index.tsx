import { createGlobalStyle } from "styled-components";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "@/button";
import { ArrowDown } from "lucide-react";

const FactBoxGlobalStyles = createGlobalStyle`
  .kf-fact-box {
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
    color: var(--kf-color-gray-50, #f8fafc);
  }

  .kf-fact-box__content {
    padding: calc(var(--kf-spacing, 0.25rem) * 8);
    padding-bottom: 0;
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-fact-box__content {
      padding: calc(var(--kf-spacing, 0.25rem) * 12);
    }
  }

  .kf-fact-box__title {
    font-family: var(--kf-font-condensed);
    margin-top: 0;
    margin-bottom: var(--kf-spacing, 0.25rem);
    font-size: var(--kf-text-2xl, 1.5rem);
    line-height: var(--kf-text-2xl--line-height, 1.3333333333);
    font-weight: 700;
  }

  .kf-fact-box__description {
    position: relative;
    font-size: var(--kf-text-base, 1rem);
    line-height: var(--kf-text-base--line-height, 1.5);
    color: var(--kf-color-gray-950, #0f172a);
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 4);
    overflow: hidden;
    max-height: calc(var(--kf-spacing, 0.25rem) * 80);
    transition:
      max-height 220ms var(--kf-ease-in-out, ease),
      opacity 220ms var(--kf-ease-in-out, ease);
  }
  
  .dark .kf-fact-box__description {
    color: var(--kf-color-gray-50, #f8fafc);
  }

  .kf-fact-box__description[data-expanded="false"] {
    max-height: calc(var(--kf-spacing, 0.25rem) * 20);
    opacity: 0.88;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
  }

  .kf-fact-box__footer {
    display: flex;
    justify-content: center;
    padding-bottom: calc(var(--kf-spacing, 0.25rem) * 4);
    position: relative;
    anchor-name: --kf-fact-box-footer;
  }

  .kf-fact-box__toggle {
    position: absolute;
    position-anchor: --kf-fact-box-footer;
    top: anchor(bottom);
    left: anchor(center);
    
    width: calc(var(--kf-spacing, 0.25rem) * 10);
    height: calc(var(--kf-spacing, 0.25rem) * 10);
    border-radius: var(--kf-radius-full, 9999px);
    transition:
      rotate 180ms var(--kf-ease-in-out, ease),
      background-color 180ms var(--kf-ease-in-out, ease),
      border-color 180ms var(--kf-ease-in-out, ease);
  }

  .kf-fact-box__toggle[data-expanded="true"] {
    rotate: 180deg;
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

const FactBoxContext = React.createContext<
  | {
      expanded: boolean;
      toggle: () => void;
    }
  | undefined
>(undefined);

type FactBoxDivProps = React.ComponentPropsWithoutRef<"div">;

const FactBox = React.forwardRef<HTMLDivElement, FactBoxDivProps>(
  ({ className, children, ...props }, ref) => {
    const [expanded, setExpanded] = React.useState(false);
    const toggle = () => setExpanded((prev) => !prev);
    return (
      <FactBoxContext.Provider value={{ expanded, toggle }}>
        <>
          <FactBoxGlobalStyles />
          <div
            ref={ref}
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
);

FactBox.displayName = "FactBox";

const FactBoxTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="fact-box-title"
    className={cn("kf-fact-box__title", className)}
    {...props}
  />
));

FactBoxTitle.displayName = "FactBoxTitle";

const FactBoxContent = React.forwardRef<HTMLDivElement, FactBoxDivProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="fact-box-content"
      className={cn("kf-fact-box__content", className)}
      {...props}
    />
  )
);

FactBoxContent.displayName = "FactBoxContent";

const FactBoxDescription = React.forwardRef<HTMLDivElement, FactBoxDivProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(FactBoxContext);
    const expanded = context?.expanded;
    return (
      <div
        ref={ref}
        data-slot="fact-box-content"
        data-expanded={expanded ? "true" : "false"}
        className={cn("kf-fact-box__description", className)}
        {...props}
      />
    );
  }
);

FactBoxDescription.displayName = "FactBoxDescription";

type FactBoxActionProps = FactBoxDivProps & {
  expandText?: string;
  contractText?: string;
};

const FactBoxAction = React.forwardRef<HTMLDivElement, FactBoxActionProps>(
  ({ className, expandText, contractText, ...props }, ref) => {
    const context = React.useContext(FactBoxContext);
    if (!context) return null;
    const { expanded, toggle } = context;
    return (
      <div
        ref={ref}
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
);

FactBoxAction.displayName = "FactBoxAction";

export {
  FactBox,
  FactBoxTitle,
  FactBoxDescription,
  FactBoxAction,
  FactBoxContent,
};
