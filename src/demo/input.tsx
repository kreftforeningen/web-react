import { Input, Label } from "@/lib/main";

export default function InputDemo() {
  return (
    <>
      <h2>Input</h2>
      <div className="app-button-row">
        <Label htmlFor="demo-input">Input</Label>
        <Input id="demo-input" placeholder="Type here..." />
      </div>
    </>
  );
}
