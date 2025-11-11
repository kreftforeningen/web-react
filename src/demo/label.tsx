import { Input, Label } from "@/lib/main";

export default function LabelDemo() {
  return (
    <>
      <h2>Label</h2>
      <div className="app-button-row">
        <Label htmlFor="demo-label-input">Email</Label>
        <Input id="demo-label-input" placeholder="you@example.com" />
      </div>
    </>
  );
}

