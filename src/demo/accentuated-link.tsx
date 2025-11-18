import {
  AccentuatedLink,
  AccentuatedLinkTitle,
  AccentuatedLinkSubtitle,
  Page,
} from "@/lib/main";

export default function AccentuatedLinkDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2 id="accentuated-link">Accentuated Link</h2>
      <AccentuatedLink href="https://www.google.com">
        <AccentuatedLinkSubtitle>Read more</AccentuatedLinkSubtitle>
        <AccentuatedLinkTitle>
          World's Most Used Search Engine
        </AccentuatedLinkTitle>
      </AccentuatedLink>
    </Page.Block>
  );
}
