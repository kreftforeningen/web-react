import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const ResizableGlobalStyles = createGlobalStyle`
  .kf-resizable-group {
    font-family: var(--kf-font-sans);
    display: flex;
    height: 100%;
    width: 100%;
  }

  .kf-resizable-group[data-panel-group-direction="vertical"] {
    flex-direction: column;
  }

  .kf-resizable-handle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1px;
    background: var(--kf-color-gray-300, rgba(15, 23, 42, 0.12));
    outline: none;
  }

  .kf-resizable-handle::after {
    content: "";
    position: absolute;
    inset-block: 0;
    left: 50%;
    width: 4px;
    transform: translateX(-50%);
  }

  .kf-resizable-handle[data-panel-group-direction="vertical"] {
    height: 1px;
    width: 100%;
  }

  .kf-resizable-handle[data-panel-group-direction="vertical"]::after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    transform: translateY(-50%);
  }

  .kf-resizable-handle:focus-visible {
    box-shadow:
      0 0 0 1px var(--kf-color-blue-400, rgba(59, 130, 246, 0.6)),
      0 0 0 3px var(--kf-color-gray-50, #ffffff);
  }

  .kf-resizable-handle[data-panel-group-direction="vertical"] > .kf-resizable-handle__grip {
    transform: rotate(90deg);
  }

  .kf-resizable-handle__grip {
    position: relative;
    z-index: 1;
    display: flex;
    width: calc(var(--kf-spacing, 0.25rem) * 3);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    align-items: center;
    justify-content: center;
    border-radius: var(--kf-radius-xs, 0.125rem);
    border: var(--kf-border-1, 1px) solid var(--kf-color-gray-300, rgba(15, 23, 42, 0.16));
    background: var(--kf-color-gray-50, #ffffff);
  }

  .kf-resizable-handle__icon {
    width: calc(var(--kf-spacing, 0.25rem) * 2.5);
    height: calc(var(--kf-spacing, 0.25rem) * 2.5);
    color: var(--kf-color-gray-500, rgba(15, 23, 42, 0.6));
  }
`;

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <>
      <ResizableGlobalStyles />
      <ResizablePrimitive.PanelGroup
        data-slot="resizable-panel-group"
        className={cn("kf-resizable-group", className)}
        {...props}
      />
    </>
  );
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn("kf-resizable-handle", className)}
      {...props}
    >
      {withHandle && (
        <div className="kf-resizable-handle__grip">
          <GripVerticalIcon
            className="kf-resizable-handle__icon"
            aria-hidden="true"
            focusable="false"
          />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
