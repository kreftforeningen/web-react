import { useMemo } from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { Label } from "../label";
import { Separator } from "../separator";

type FieldOrientation = "vertical" | "horizontal" | "responsive";

const FieldGlobalStyles = createGlobalStyle`
  .kf-field-set {
    font-family: var(--kf-font-sans);
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 6);
  }

  .kf-field-set:has(> [data-slot="checkbox-group"]),
  .kf-field-set:has(> [data-slot="radio-group"]) {
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-field-legend {
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * 3);
    font-weight: 500;
  }

  .kf-field-legend[data-variant="legend"] {
    font-size: var(--kf-text-base, 1rem);
  }

  .kf-field-legend[data-variant="label"] {
    font-size: var(--kf-text-sm, 0.875rem);
  }

  .kf-field-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: calc(var(--kf-spacing, 0.25rem) * 7);
  }

  .kf-field-group[data-slot="checkbox-group"],
  .kf-field-group[data-slot="radio-group"] {
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
  }

  .kf-field-group > [data-slot="field-group"] {
    gap: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-field {
    display: flex;
    width: 100%;
    gap: calc(var(--kf-spacing, 0.25rem) * 3);
    color: inherit;
  }

  .kf-field[data-invalid="true"] {
    color: var(--kf-color-red-700, #b91c1c);
  }

  .kf-field--vertical {
    flex-direction: column;
  }

  .kf-field--vertical > * {
    width: 100%;
  }

  .kf-field--horizontal {
    flex-direction: row;
    align-items: center;
  }

  .kf-field--horizontal > [data-slot="field-label"] {
    flex: 1 1 auto;
  }

  .kf-field--horizontal:has(> [data-slot="field-content"]) {
    align-items: flex-start;
  }

  .kf-field--responsive {
    flex-direction: column;
  }

  .kf-field--responsive > * {
    width: 100%;
  }

  @media (min-width: var(--kf-breakpoint-md, 48rem)) {
    .kf-field--responsive {
      flex-direction: row;
      align-items: center;
    }

    .kf-field--responsive > * {
      width: auto;
    }

    .kf-field--responsive > [data-slot="field-label"] {
      flex: 1 1 auto;
    }

    .kf-field--responsive:has(> [data-slot="field-content"]) {
      align-items: flex-start;
    }
  }

  .kf-field-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 1.5);
    line-height: 1.4;
  }

  .kf-field-label {
    display: flex;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    width: fit-content;
    line-height: 1.4;
  }

  .kf-field[data-disabled="true"] .kf-field-label,
  .kf-field[data-disabled="true"] .kf-field-title {
    opacity: 0.5;
  }

  .kf-field-label:has(> [data-slot="field"]) {
    width: 100%;
    flex-direction: column;
    border-radius: var(--kf-radius-md, 0.375rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-field-label:has(> [data-slot="field"]) > [data-slot="field"] {
    padding: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-field-label:has([data-state="checked"]) {
    border-color: var(--kf-color-blue-600, #0f172a);
    background: color-mix(in srgb, var(--kf-color-blue-600, #0f172a) 10%, transparent);
  }

  .kf-field-title {
    display: inline-flex;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    align-items: center;
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    font-weight: 500;
  }

  .kf-field-description {
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-field-description a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .kf-field-description a:hover {
    color: var(--kf-color-blue-600, #0f172a);
  }

  .kf-field-legend[data-variant="legend"] + .kf-field-description {
    margin-top: calc(var(--kf-spacing, 0.25rem) * -1.5);
  }

  .kf-field-separator {
    position: relative;
    margin-block: calc(var(--kf-spacing, 0.25rem) * -2);
    height: calc(var(--kf-spacing, 0.25rem) * 5);
    font-size: var(--kf-text-sm, 0.875rem);
    display: flex;
    align-items: center;
  }

  .kf-field-separator[data-content="true"] {
    margin-bottom: calc(var(--kf-spacing, 0.25rem) * -2);
  }

  .kf-field-separator-content {
    position: relative;
    margin-inline: auto;
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    background: var(--kf-color-gray-50, #ffffff);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }

  .kf-field-error {
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-red-700, #b91c1c);
    font-weight: 400;
  }

  .kf-field-error ul {
    margin-left: calc(var(--kf-spacing, 0.25rem) * 4);
    display: flex;
    flex-direction: column;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    list-style: disc;
  }
`;

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <>
      <FieldGlobalStyles />
      <fieldset
        data-slot="field-set"
        className={cn("kf-field-set", className)}
        {...props}
      />
    </>
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn("kf-field-legend", className)}
      {...props}
    />
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn("kf-field-group", className)}
      {...props}
    />
  );
}

const orientationClasses: Record<FieldOrientation, string> = {
  vertical: "kf-field--vertical",
  horizontal: "kf-field--horizontal",
  responsive: "kf-field--responsive",
};

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & { orientation?: FieldOrientation }) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn("kf-field", orientationClasses[orientation], className)}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn("kf-field-content", className)}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn("kf-field-label", className)}
      {...props}
    />
  );
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn("kf-field-title", className)}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn("kf-field-description", className)}
      {...props}
    />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode;
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn("kf-field-separator", className)}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="kf-field-separator-content"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];

    if (uniqueErrors?.length === 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul>
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("kf-field-error", className)}
      {...props}
    >
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};
