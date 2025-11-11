import * as React from "react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const TableGlobalStyles = createGlobalStyle`
  .kf-table-container {
    font-family: var(--kf-font-sans);
    position: relative;
    width: 100%;
    overflow-x: auto;
  }

  .kf-table {
    font-family: var(--kf-font-sans);
    width: 100%;
    font-size: var(--kf-text-sm, 0.875rem);
    border-collapse: collapse;
  }

  .kf-table caption {
    caption-side: bottom;
  }

  .kf-table__header tr {
    border-bottom: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
  }

  .kf-table__body tr:last-child {
    border-bottom: 0;
  }

  .kf-table__footer {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 50%, transparent);
    border-top: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    font-weight: 500;
  }

  .kf-table__footer tr:last-child {
    border-bottom: 0;
  }

  .kf-table__row {
    border-bottom: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    transition: background 120ms var(--kf-ease-in-out, ease);
  }

  .kf-table__row[data-state="selected"] {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 80%, transparent);
  }

  .kf-table__row:hover {
    background: color-mix(in srgb, var(--kf-color-gray-50, rgba(148, 163, 184, 0.16)) 60%, transparent);
  }

  .kf-table__head {
    padding-inline: calc(var(--kf-spacing, 0.25rem) * 2);
    height: calc(var(--kf-spacing, 0.25rem) * 10);
    text-align: left;
    font-weight: 600;
    color: var(--kf-color-gray-950, #0f172a);
    vertical-align: middle;
    white-space: nowrap;
  }

  .kf-table__head:has([role="checkbox"]) {
    padding-right: 0;
  }

  .kf-table__head > [role="checkbox"] {
    transform: translateY(2px);
  }

  .kf-table__cell {
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
    vertical-align: middle;
    white-space: nowrap;
  }

  .kf-table__cell:has([role="checkbox"]) {
    padding-right: 0;
  }

  .kf-table__cell > [role="checkbox"] {
    transform: translateY(2px);
  }

  .kf-table__caption {
    margin-top: calc(var(--kf-spacing, 0.25rem) * 4);
    font-size: var(--kf-text-sm, 0.875rem);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.66));
  }
`;

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <>
      <TableGlobalStyles />
      <div data-slot="table-container" className="kf-table-container">
        <table
          data-slot="table"
          className={cn("kf-table", className)}
          {...props}
        />
      </div>
    </>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("kf-table__header", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("kf-table__body", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("kf-table__footer", className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn("kf-table__row", className)}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn("kf-table__head", className)}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn("kf-table__cell", className)}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("kf-table__caption", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
