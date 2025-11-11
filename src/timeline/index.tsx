import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

type TimelineVariant = "default" | "icon";

type TimelineItemProps = React.ComponentProps<"div"> & {
  variant?: TimelineVariant;
  isLast?: boolean;
};

const TimelineGlobalStyles = createGlobalStyle`
  .kf-timeline {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-timeline__item {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    justify-content: space-between;
  }

  @media (min-width: 60rem) {
    .kf-timeline__item {
      flex-direction: row;
      gap: calc(var(--kf-spacing, 0.25rem) * 10);
    }

    .kf-timeline__item-content-wrapper {
      max-width: 24rem;
    }
  }

  .kf-timeline__node {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-timeline__icon {
    display: inline-flex;
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: 9999px;
    align-items: center;
    justify-content: center;
    background: var(--kf-color-red-600, #dc2626);
  }

  .kf-timeline__connector {
    width: 2px;
    height: calc(var(--kf-spacing, 0.25rem) * 14);
    background: var(--kf-color-red-600, #dc2626);
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
    font-weight: 600;
  }

  .kf-timeline__description {
    margin: 0;
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.7));
  }
`;

function Timeline({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: TimelineVariant }) {
  return (
    <>
      <TimelineGlobalStyles />
      <div
        data-slot="timeline"
        data-variant={variant}
        className={cn("kf-timeline", className)}
        {...props}
      />
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
    <div
      data-slot="timeline-item"
      data-variant={variant}
      className={cn("kf-timeline__item", className)}
      {...props}
    >
      <div className="kf-timeline__item-content-wrapper flex gap-[calc(var(--kf-spacing,0.25rem)*4)]">
        <div className="kf-timeline__node">
          <span className="block h-3" />
          <span className="kf-timeline__icon" />
          <span className="block h-2" />
          {!isLast && <span className="kf-timeline__connector" />}
        </div>
        <div className="kf-timeline__content">{children}</div>
      </div>
    </div>
  );
}

function TimelineItemTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="timeline-item-title"
      className={cn("kf-timeline__title", className)}
      {...props}
    />
  );
}

function TimelineItemDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="timeline-item-description"
      className={cn("kf-timeline__description", className)}
      {...props}
    />
  );
}

export { Timeline, TimelineItem, TimelineItemTitle, TimelineItemDescription };
