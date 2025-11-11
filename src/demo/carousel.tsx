import {
  AspectRatio,
  Carousel,
  CarouselContent,
  CarouselContentWrapper,
  CarouselDots,
  CarouselItem,
  CarouselItemDescription,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/main";

export default function CarouselDemo() {
  return (
    <>
      <h2>Carousel</h2>
      <Carousel>
        <CarouselContentWrapper>
          <CarouselContent>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://picsum.photos/id/237/1600/900"
                  alt="Card Image"
                  className="app-media-rounded-xl"
                />
                <CarouselItemDescription>
                  A dog. A dog is a good boy. A dog is a good boy. A dog is a
                  good boy. What a dog can do is amazing. A dog can save a life.
                  A dog can be a good friend. A dog can be a good companion. A
                  dog can be a good pet. A dog can be a good friend. A dog can
                  be a good companion. A dog can be a good pet.
                </CarouselItemDescription>
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://picsum.photos/id/238/1600/900"
                  alt="Card Image"
                  className="app-media-rounded-xl"
                />
              </AspectRatio>
              <CarouselItemDescription>A city.</CarouselItemDescription>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://picsum.photos/id/239/1600/900"
                  alt="Card Image"
                  className="app-media-rounded-xl"
                />
              </AspectRatio>
              <CarouselItemDescription>
                A flower. So beautiful that it needs a longer description.
              </CarouselItemDescription>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </CarouselContentWrapper>
        <CarouselDots />
      </Carousel>
    </>
  );
}
