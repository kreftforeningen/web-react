import {
  Banner,
  BannerButtonPrimary,
  BannerButtonSecondary,
  BannerButtons,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
  HGrid,
  Page,
} from "@/lib/main";

export default function BannerDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <HGrid columns={1} gap={10}>
        <h2>Banner</h2>
        <Banner>
          <BannerImage
            src="https://picsum.photos/id/240/1600/900"
            alt="Banner"
          />
          <BannerContent>
            <BannerTitle>Banner</BannerTitle>
            <BannerDescription>
              <p>
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text.
              </p>
              <p>
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text.
              </p>
              <p>
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text.
              </p>
              <p>
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text.
              </p>
              <p>
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text.
              </p>
            </BannerDescription>
            <BannerButtons>
              <BannerButtonPrimary href="https://example.com">
                Example
              </BannerButtonPrimary>
              <BannerButtonSecondary href="https://example.com">
                Example
              </BannerButtonSecondary>
            </BannerButtons>
          </BannerContent>
        </Banner>
        <Banner variant="right">
          <BannerImage
            src="https://picsum.photos/id/240/1600/900"
            alt="Banner"
          />
          <BannerContent>
            <BannerTitle>Banner</BannerTitle>
            <BannerDescription>
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text.
            </BannerDescription>
            <BannerButtons>
              <BannerButtonPrimary href="https://example.com">
                Example
              </BannerButtonPrimary>
              <BannerButtonSecondary href="https://example.com">
                Example
              </BannerButtonSecondary>
            </BannerButtons>
          </BannerContent>
        </Banner>
        <Banner variant="full">
          <BannerImage
            src="https://picsum.photos/id/240/1600/900"
            alt="Banner"
          />
          <BannerContent>
            <BannerTitle>Banner</BannerTitle>
            <BannerDescription>
              <p>
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text.
              </p>
              <p>
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text.
              </p>
              <p>
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text.
              </p>
            </BannerDescription>
            <BannerButtons>
              <BannerButtonPrimary href="https://example.com">
                Example
              </BannerButtonPrimary>
              <BannerButtonSecondary href="https://example.com">
                Example
              </BannerButtonSecondary>
            </BannerButtons>
          </BannerContent>
        </Banner>
      </HGrid>
    </Page.Block>
  );
}
