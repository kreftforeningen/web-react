import { Input, Label, Page } from "@/lib/main";

export default function LabelDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Label</h2>
      <Label htmlFor="demo-label-input">Email</Label>
      <Input id="demo-label-input" placeholder="you@example.com" />
    </Page.Block>
  );
}
