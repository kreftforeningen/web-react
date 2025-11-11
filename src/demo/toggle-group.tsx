import { ToggleGroup, ToggleGroupItem } from "@/lib/main";

export default function ToggleGroupDemo() {
  return (
    <>
      <h2>Toggle Group</h2>
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
