import { Page, Textarea } from "@/lib/main";

export default function TextareaDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Textarea</h2>
      <Textarea placeholder="Write your thoughts..." />
    </Page.Block>
  );
}
