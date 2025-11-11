import {
  Banner,
  BannerButtonPrimary,
  BannerButtonSecondary,
  BannerButtons,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "@/lib/main";

export default function BannerDemo() {
  return (
    <>
      <h2>Banner</h2>
      <Banner>
        <BannerImage src="https://picsum.photos/id/240/1600/900" alt="Banner" />
        <BannerContent>
          <BannerTitle>Banner</BannerTitle>
          <BannerDescription>
            <p className="app-spacing-bottom">
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
              Text. Text. Text. Text.
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
    </>
  );
}

