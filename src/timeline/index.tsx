import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type TimelineVariant = "default" | "icon";

type TimelineItemProps = React.ComponentPropsWithoutRef<"div"> & {
  variant?: TimelineVariant;
  isLast?: boolean;
};

const TimelineGlobalStyles = createGlobalStyle`
  .kf-timeline {
    display: flex;
    flex-direction: column;
  }

  .kf-timeline__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  @media (min-width: 60rem) {
    .kf-timeline__item {
      flex-direction: row;
      gap: calc(var(--kf-spacing, 0.25rem) * 10);
    }
  }

  .kf-timeline__item-content-wrapper {
    display: flex;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  @media (min-width: 60rem) {
    .kf-timeline__item-content-wrapper {
      max-width: 28rem;
    }
  }

  .kf-timeline__node {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    flex-shrink: 0;
  }

  .kf-timeline__spacer-top {
    height: calc(var(--kf-spacing, 0.25rem) * 2);
    flex-shrink: 0;
  }

  .kf-timeline__dot {
    display: flex;
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background: var(--kf-color-pink-600, #db2777);
  }

  .kf-timeline__spacer-bottom {
    height: calc(var(--kf-spacing, 0.25rem) * 2);
    flex-shrink: 0;
  }

  .kf-timeline__connector {
    height: calc(var(--kf-spacing, 0.25rem) * 14);
    width: 2px;
    flex-shrink: 0;
    background: var(--kf-color-pink-600, #db2777);
  }

  .kf-timeline__content {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    padding: calc(var(--kf-spacing, 0.25rem) * 2) calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-timeline__title {
    margin: 0;
    font-size: var(--kf-text-base, 1rem);
    font-weight: var(--kf-font-weight-medium, 500);
  }

  .kf-timeline__description {
    margin: 0;
    font-size: var(--kf-text-sm, 0.875rem);
  }
`;

function Timeline({
  className,
  variant = "default",
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { variant?: TimelineVariant }) {
  return (
    <>
      <TimelineGlobalStyles />
      {/* @ts-expect-error - Type incompatibility between React type versions */}
      <div
        data-slot="timeline"
        data-variant={variant}
        className={cn("kf-timeline", className)}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

function TimelineItem({
  className,
  children,
  isLast,
  variant = "default",
  ...props
}: TimelineItemProps) {
  return (
    <>
      {/* @ts-expect-error - Type incompatibility between React type versions */}
      <div
        data-slot="timeline-item"
        data-variant={variant}
        className={cn("kf-timeline__item", className)}
        {...props}
      >
        <div className="kf-timeline__item-content-wrapper">
          <div className="kf-timeline__node">
            <span className="kf-timeline__spacer-top" aria-hidden="true" />
            <span className="kf-timeline__dot" aria-hidden="true" />
            <span className="kf-timeline__spacer-bottom" aria-hidden="true" />
            {!isLast && (
              <span className="kf-timeline__connector" aria-hidden="true" />
            )}
          </div>
          <div className="kf-timeline__content">{children}</div>
        </div>
      </div>
    </>
  );
}

function TimelineItemTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <>
      {/* @ts-expect-error - Type incompatibility between React type versions */}
      <h3
        data-slot="timeline-item-title"
        className={cn("kf-timeline__title", className)}
        {...props}
      />
    </>
  );
}

function TimelineItemDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <>
      {/* @ts-expect-error - Type incompatibility between React type versions */}
      <p
        data-slot="timeline-item-description"
        className={cn("kf-timeline__description", className)}
        {...props}
      />
    </>
  );
}

export { Timeline, TimelineItem, TimelineItemTitle, TimelineItemDescription };
