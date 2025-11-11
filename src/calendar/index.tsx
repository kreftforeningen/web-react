import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { createGlobalStyle } from "styled-components";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../button";

const CalendarGlobalStyles = createGlobalStyle`
  .kf-calendar {
    --kf-calendar-cell-size: calc(var(--kf-spacing, 0.25rem) * 8);
    font-family: var(--kf-font-sans);
    display: inline-block;
    padding: calc(var(--kf-spacing, 0.25rem) * 3);
    border-radius: var(--kf-radius-lg, 0.5rem);
    background: color-mix(in srgb, var(--kf-color-gray-50, #ffffff) 90%, transparent);
  }

  [data-slot="card-content"] .kf-calendar,
  [data-slot="popover-content"] .kf-calendar {
    background: transparent;
  }

  .kf-calendar__root {
    width: fit-content;
  }

  .kf-calendar__months {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-calendar__months {
      flex-direction: row;
    }
  }

  .kf-calendar__month {
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
    width: 100%;
  }

  .kf-calendar__nav {
    position: absolute;
    inset-inline: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
  }

  .kf-calendar__nav-button {
    width: var(--kf-calendar-cell-size);
    height: var(--kf-calendar-cell-size);
    padding: 0;
  }

  .kf-calendar__nav-button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [dir="rtl"] .kf-calendar__nav-button svg {
    transform: rotate(180deg);
  }

  .kf-calendar__caption {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--kf-calendar-cell-size);
    width: 100%;
    padding-inline: var(--kf-calendar-cell-size);
  }

  .kf-calendar[data-caption-layout="dropdown"] .kf-calendar__caption-label {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    border-radius: var(--kf-radius-md, 0.375rem);
    height: calc(var(--kf-spacing, 0.25rem) * 8);
  }

  .kf-calendar__dropdowns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    width: 100%;
    height: var(--kf-calendar-cell-size);
    font-size: var(--kf-text-sm, 0.875rem);
    font-weight: 500;
  }

  .kf-calendar__dropdown-root {
    position: relative;
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-50, rgba(15, 23, 42, 0.12));
    box-shadow: var(--kf-shadow-xs, 0 1px 2px 0 rgb(0 0 0 / 0.05));
  }

  .kf-calendar__dropdown-root:focus-within {
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 65%, transparent);
  }

  .kf-calendar__dropdown {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  .kf-calendar__caption-label {
    font-weight: 600;
    user-select: none;
    font-size: var(--kf-text-sm, 0.875rem);
  }

  .kf-calendar__month table {
    width: 100%;
    border-collapse: collapse;
  }

  .kf-calendar__weekdays {
    display: flex;
  }

  .kf-calendar__weekday {
    flex: 1;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    text-align: center;
    padding-block: calc(var(--kf-spacing, 0.25rem) * 1);
    border-radius: var(--kf-radius-sm, 0.125rem);
    user-select: none;
  }

  .kf-calendar__week {
    display: flex;
    width: 100%;
    margin-top: calc(var(--kf-spacing, 0.25rem) * 2);
  }

  .kf-calendar__week-number-header {
    width: var(--kf-calendar-cell-size);
    user-select: none;
  }

  .kf-calendar__week-number {
    font-size: 0.8rem;
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
    user-select: none;
  }

  .kf-calendar__week-number-indicator {
    display: flex;
    width: var(--kf-calendar-cell-size);
    height: var(--kf-calendar-cell-size);
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .kf-calendar__day {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .kf-calendar__day-button {
    --kf-btn-height-md: var(--kf-calendar-cell-size);
    --kf-btn-px-md: 0;
    --kf-btn-gap: calc(var(--kf-spacing, 0.25rem) * 1);
    width: 100%;
    min-width: var(--kf-calendar-cell-size);
    height: var(--kf-calendar-cell-size);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 1);
    padding: 0;
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: 1;
    font-weight: 400;
    border-radius: var(--kf-radius-md, 0.375rem);
    background: transparent;
  }

  .kf-calendar__day-button > span {
    font-size: var(--kf-text-xs, 0.75rem);
    opacity: 0.7;
  }

  .kf-calendar__day-button:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)),
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 65%, transparent);
  }

  .kf-calendar__day-button[data-selected-single="true"],
  .kf-calendar__day-button[data-range-start="true"],
  .kf-calendar__day-button[data-range-end="true"] {
    background: var(--kf-color-blue-600, #0f172a);
    color: var(--kf-color-blue-50, #f8fafc);
  }

  .kf-calendar__day-button[data-range-middle="true"] {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.2));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-calendar__day-button[data-range-middle="true"] {
    border-radius: 0;
  }

  .kf-calendar__day-button[data-range-start="true"] {
    border-top-left-radius: var(--kf-radius-md, 0.375rem);
    border-bottom-left-radius: var(--kf-radius-md, 0.375rem);
  }

  .kf-calendar__day-button[data-range-end="true"] {
    border-top-right-radius: var(--kf-radius-md, 0.375rem);
    border-bottom-right-radius: var(--kf-radius-md, 0.375rem);
  }

  .kf-calendar__day-button[data-outside="true"] {
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-calendar__day-button[data-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kf-calendar__day-button[data-today="true"] {
    background: var(--kf-color-gray-200, rgba(148, 163, 184, 0.2));
    color: var(--kf-color-gray-900, #0f172a);
  }

  .kf-calendar__hidden {
    visibility: hidden;
  }
`;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <>
      <CalendarGlobalStyles />
      <DayPicker
        showOutsideDays={showOutsideDays}
        captionLayout={captionLayout}
        data-caption-layout={captionLayout}
        className={cn("kf-calendar", className)}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString("default", { month: "short" }),
          ...formatters,
        }}
        classNames={{
          root: cn("kf-calendar__root", defaultClassNames.root),
          months: cn("kf-calendar__months", defaultClassNames.months),
          month: cn("kf-calendar__month", defaultClassNames.month),
          nav: cn("kf-calendar__nav", defaultClassNames.nav),
          button_previous: cn(
            buttonVariants({ variant: buttonVariant }),
            "kf-calendar__nav-button kf-calendar__nav-button--previous",
            defaultClassNames.button_previous
          ),
          button_next: cn(
            buttonVariants({ variant: buttonVariant }),
            "kf-calendar__nav-button kf-calendar__nav-button--next",
            defaultClassNames.button_next
          ),
          month_caption: cn(
            "kf-calendar__caption",
            defaultClassNames.month_caption
          ),
          dropdowns: cn("kf-calendar__dropdowns", defaultClassNames.dropdowns),
          dropdown_root: cn(
            "kf-calendar__dropdown-root",
            defaultClassNames.dropdown_root
          ),
          dropdown: cn("kf-calendar__dropdown", defaultClassNames.dropdown),
          caption_label: cn(
            "kf-calendar__caption-label",
            defaultClassNames.caption_label
          ),
          weekdays: cn("kf-calendar__weekdays", defaultClassNames.weekdays),
          weekday: cn("kf-calendar__weekday", defaultClassNames.weekday),
          week: cn("kf-calendar__week", defaultClassNames.week),
          week_number_header: cn(
            "kf-calendar__week-number-header",
            defaultClassNames.week_number_header
          ),
          week_number: cn(
            "kf-calendar__week-number",
            defaultClassNames.week_number
          ),
          day: cn("kf-calendar__day", defaultClassNames.day),
          range_start: cn(defaultClassNames.range_start),
          range_middle: cn(defaultClassNames.range_middle),
          range_end: cn(defaultClassNames.range_end),
          today: cn(defaultClassNames.today),
          outside: cn(defaultClassNames.outside),
          disabled: cn(defaultClassNames.disabled),
          hidden: cn("kf-calendar__hidden", defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...rootProps }) => (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...rootProps}
            />
          ),
          Chevron: ({ className, orientation, ...iconProps }) => {
            if (orientation === "left") {
              return (
                <ChevronLeftIcon className={cn(className)} {...iconProps} />
              );
            }

            if (orientation === "right") {
              return (
                <ChevronRightIcon className={cn(className)} {...iconProps} />
              );
            }

            return <ChevronDownIcon className={cn(className)} {...iconProps} />;
          },
          DayButton: CalendarDayButton,
          WeekNumber: ({ children, ...weekNumberProps }) => (
            <td {...weekNumberProps}>
              <div className="kf-calendar__week-number-indicator">
                {children}
              </div>
            </td>
          ),
          ...components,
        }}
        {...props}
      />
    </>
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus();
    }
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
          ? "true"
          : undefined
      }
      data-range-start={modifiers.range_start ? "true" : undefined}
      data-range-end={modifiers.range_end ? "true" : undefined}
      data-range-middle={modifiers.range_middle ? "true" : undefined}
      data-outside={modifiers.outside ? "true" : undefined}
      data-disabled={modifiers.disabled ? "true" : undefined}
      data-today={modifiers.today ? "true" : undefined}
      className={cn("kf-calendar__day-button", className)}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
