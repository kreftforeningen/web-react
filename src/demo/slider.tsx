import { Page, Slider } from "@/lib/main";

export default function SliderDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Slider</h2>
      <Slider defaultValue={[33]} max={100} step={1} />
    </Page.Block>
  );
}
