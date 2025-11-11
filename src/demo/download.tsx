import {
  Download,
  DownloadContent,
  DownloadDescription,
  DownloadDownloadUrl,
  DownloadFooter,
  DownloadImage,
  DownloadMain,
  DownloadOrderUrl,
  DownloadTitle,
} from "@/lib/main";

export default function DownloadDemo() {
  return (
    <>
      <h2>Download</h2>
      <Download>
        <DownloadContent>
          <DownloadImage src="https://picsum.photos/id/200/200/300" />
          <DownloadMain>
            <DownloadTitle>Download</DownloadTitle>
            <DownloadDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </DownloadDescription>
          </DownloadMain>
        </DownloadContent>
        <DownloadFooter>
          <DownloadDownloadUrl href="https://www.google.com">
            Last ned
          </DownloadDownloadUrl>
          <DownloadOrderUrl href="https://www.google.com">
            Bestill
          </DownloadOrderUrl>
        </DownloadFooter>
      </Download>
    </>
  );
}
