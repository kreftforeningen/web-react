import { Input, Label, Page } from "@/lib/main";

export default function InputDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Input</h2>
      <Label htmlFor="demo-input">Input</Label>
      <Input id="demo-input" placeholder="Type here..." />
    </Page.Block>
  );
}
