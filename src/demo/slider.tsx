import { Slider } from "@/lib/main";

export default function SliderDemo() {
  return (
    <>
      <h2>Slider</h2>
      <Slider defaultValue={[33]} max={100} step={1} />
    </>
  );
}
