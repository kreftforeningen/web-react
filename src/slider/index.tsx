import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";

const SliderGlobalStyles = createGlobalStyle`
  .kf-slider {
    font-family: var(--kf-font-sans);
    position: relative;
    display: flex;
    width: 100%;
    touch-action: none;
    user-select: none;
    align-items: center;
  }

  .kf-slider[data-disabled="true"] {
    opacity: 0.5;
  }

  .kf-slider[data-orientation="vertical"] {
    flex-direction: column;
    width: auto;
    min-height: 11rem;
    height: 100%;
  }

  .kf-slider__track {
    position: relative;
    flex-grow: 1;
    border-radius: var(--kf-radius-full, 9999px);
    overflow: hidden;
    background: color-mix(in srgb, var(--kf-color-gray-200, rgba(148, 163, 184, 0.3)) 100%, transparent);
  }

  .kf-slider[data-orientation="horizontal"] .kf-slider__track {
    height: calc(var(--kf-spacing, 0.25rem) * 1.5);
    width: 100%;
  }

  .kf-slider[data-orientation="vertical"] .kf-slider__track {
    width: calc(var(--kf-spacing, 0.25rem) * 1.5);
    height: 100%;
  }

  .kf-slider__range {
    position: absolute;
    background: var(--kf-color-blue-600, #1d4ed8);
  }

  .kf-slider[data-orientation="horizontal"] .kf-slider__range {
    height: 100%;
  }

  .kf-slider[data-orientation="vertical"] .kf-slider__range {
    width: 100%;
  }

  .dark .kf-slider__range {
    background: var(--kf-color-blue-200, #bfdbfe);
  }

  .kf-slider__thumb {
    display: block;
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    border-radius: 9999px;
    border: var(--kf-border-2, 2px) solid var(--kf-color-blue-600, #1d4ed8);
    background: var(--kf-color-gray-50, #ffffff);
    box-shadow: var(--kf-shadow-sm, 0 1px 2px 0 rgb(15 23 42 / 0.05));
    transition:
      box-shadow 120ms var(--kf-ease-in-out, ease),
      border-color 120ms var(--kf-ease-in-out, ease);
  }

  .kf-slider__thumb:hover {
    cursor: grab;
  }

  .kf-slider__thumb:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 4px color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 0.2)) 60%, transparent);
  }

  .kf-slider__thumb:disabled {
    pointer-events: none;
  }
`;

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <>
      <SliderGlobalStyles />
      <SliderPrimitive.Root
        data-slot="slider"
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        className={cn("kf-slider", className)}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="kf-slider__track"
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className="kf-slider__range"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="kf-slider__thumb"
          />
        ))}
      </SliderPrimitive.Root>
    </>
  );
}

export { Slider };
