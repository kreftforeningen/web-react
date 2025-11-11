import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createGlobalStyle } from "styled-components";

import { cn } from "@/lib/utils";
import { Button } from "../button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const CarouselGlobalStyles = createGlobalStyle`
  .kf-carousel {
    font-family: var(--kf-font-sans);
    position: relative;
    width: 100%;
  }

  .kf-carousel__viewport-wrapper {
    position: relative;
    width: 100%;
  }

  .kf-carousel__viewport {
    position: relative;
    overflow: hidden;
    border-radius: var(--kf-radius-xl, 0.75rem);
  }

  .kf-carousel__track {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .kf-carousel[data-orientation="horizontal"] .kf-carousel__track {
    flex-direction: row;
    margin-left: calc(var(--kf-spacing, 0.25rem) * -4);
  }

  .kf-carousel[data-orientation="vertical"] .kf-carousel__track {
    flex-direction: column;
    margin-top: calc(var(--kf-spacing, 0.25rem) * -4);
  }

  .kf-carousel__item {
    position: relative;
    min-width: 0;
    flex: 0 0 100%;
    overflow: hidden;
  }

  .kf-carousel[data-orientation="horizontal"] .kf-carousel__item {
    padding-left: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-carousel[data-orientation="vertical"] .kf-carousel__item {
    padding-top: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-carousel[data-orientation="horizontal"] .kf-carousel__item:first-of-type {
    padding-left: 0;
  }

  .kf-carousel[data-orientation="vertical"] .kf-carousel__item:first-of-type {
    padding-top: 0;
  }

  .kf-carousel__item-description {
    position: absolute;
    inset-inline: 0;
    bottom: 0;
    width: 100%;
    color: var(--kf-color-white, #ffffff);
    pointer-events: none;
  }

  .kf-carousel__item-description::before {
    content: "";
    position: absolute;
    inset-inline: 0;
    bottom: 0;
    height: calc(100% + calc(var(--kf-spacing, 0.25rem) * 4));
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 60%,
      transparent 100%
    );
    pointer-events: none;
  }

  .kf-carousel__item-description-content {
    position: relative;
    padding: calc(var(--kf-spacing, 0.25rem) * 2);
    font-size: var(--kf-text-sm, 0.875rem);
    line-height: var(--kf-text-sm--line-height, 1.4285714286);
    text-align: center;
    pointer-events: auto;
  }

  @media (min-width: var(--kf-breakpoint-sm, 40rem)) {
    .kf-carousel__item-description-content {
      font-size: var(--kf-text-base, 1rem);
      line-height: var(--kf-text-base--line-height, 1.5);
    }
  }

  .kf-carousel__dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--kf-spacing, 0.25rem) * 2);
    width: 100%;
    margin-top: calc(var(--kf-spacing, 0.25rem) * 4);
  }

  .kf-carousel__dot {
    width: calc(var(--kf-spacing, 0.25rem) * 4);
    height: calc(var(--kf-spacing, 0.25rem) * 4);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--kf-radius-full, 9999px);
    border: var(--kf-border-2, 2px) solid var(--kf-color-blue-400, rgba(59, 130, 246, 1));
    background: transparent;
    cursor: pointer;
    transition:
      width 160ms var(--kf-ease-in-out, ease),
      background-color 160ms var(--kf-ease-in-out, ease),
      transform 160ms var(--kf-ease-in-out, ease);
  }

  .kf-carousel__dot:hover,
  .kf-carousel__dot:focus-visible {
    outline: none;
    background: color-mix(in srgb, var(--kf-color-blue-400, rgba(59, 130, 246, 1)) 20%, transparent);
  }

  .kf-carousel__dot[data-selected="true"] {
    width: calc(var(--kf-spacing, 0.25rem) * 8);
    background: var(--kf-color-blue-400, rgba(59, 130, 246, 1));
    cursor: default;
  }

  .kf-carousel__control {
    position: absolute;
    width: calc(var(--kf-spacing, 0.25rem) * 8);
    height: calc(var(--kf-spacing, 0.25rem) * 8);
    border-radius: var(--kf-radius-full, 9999px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .kf-carousel[data-orientation="horizontal"] .kf-carousel__control--previous {
    top: 50%;
    left: calc(var(--kf-spacing, 0.25rem) * -4);
    transform: translateY(-50%);
  }

  .kf-carousel[data-orientation="horizontal"] .kf-carousel__control--next {
    top: 50%;
    right: calc(var(--kf-spacing, 0.25rem) * -4);
    transform: translateY(-50%);
  }

  .kf-carousel[data-orientation="vertical"] .kf-carousel__control--previous {
    top: calc(var(--kf-spacing, 0.25rem) * -12);
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }

  .kf-carousel[data-orientation="vertical"] .kf-carousel__control--next {
    bottom: calc(var(--kf-spacing, 0.25rem) * -12);
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }

  .kf-carousel__sr-only {
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

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(
    opts?.startIndex || 0
  );

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (index === api?.selectedScrollSnap()) return;
      const autoplay = api?.plugins()?.autoplay as { reset?: () => void };
      autoplay?.reset?.();
      api?.scrollTo(index);
    },
    [api]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <>
      <CarouselGlobalStyles />
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          scrollTo,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
        }}
      >
        <div
          onKeyDownCapture={handleKeyDown}
          className={cn("kf-carousel", className)}
          role="region"
          aria-roledescription="carousel"
          data-slot="carousel"
          data-orientation={
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal")
          }
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    </>
  );
}

function CarouselContentWrapper({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("kf-carousel__viewport-wrapper", className)} {...props}>
      {children}
    </div>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div className="kf-carousel__viewport-wrapper" data-slot="carousel-content">
      <div
        ref={carouselRef}
        id="carousel-content"
        className="kf-carousel__viewport"
        data-orientation={orientation}
      >
        <div
          className={cn("kf-carousel__track", className)}
          data-orientation={orientation}
          {...props}
        />
      </div>
    </div>
  );
}

/**
 * CarouselDots by @plettj, 2025-04-30
 *
 * Currently only works with horizontal orientation.
 */
function CarouselDots({ className, ...props }: React.ComponentProps<"div">) {
  const { selectedIndex, scrollTo, api } = useCarousel();

  return (
    <div
      role="tablist"
      className={cn("kf-carousel__dots", className)}
      {...props}
    >
      {api?.scrollSnapList().map((_, index) => (
        <button
          key={index}
          role="tab"
          data-slot="carousel-dot"
          aria-selected={index === selectedIndex}
          aria-controls="carousel-content"
          aria-label={`Slide ${index + 1}`}
          className="kf-carousel__dot"
          data-selected={index === selectedIndex ? "true" : undefined}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn("kf-carousel__item", className)}
      data-orientation={orientation}
      {...props}
    />
  );
}

function CarouselItemDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="carousel-item-description"
      className={cn("kf-carousel__item-description", className)}
      {...props}
    >
      <div className="kf-carousel__item-description-content">{children}</div>
    </div>
  );
}

function CarouselPrevious({
  className,
  variant = "default",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "kf-carousel__control kf-carousel__control--previous",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      data-orientation={orientation}
      {...props}
    >
      <ArrowLeft />
      <span className="kf-carousel__sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "default",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "kf-carousel__control kf-carousel__control--next",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      data-orientation={orientation}
      {...props}
    >
      <ArrowRight />
      <span className="kf-carousel__sr-only">Next slide</span>
    </Button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselContentWrapper,
  CarouselDots,
  CarouselItem,
  CarouselItemDescription,
  CarouselPrevious,
  CarouselNext,
};
