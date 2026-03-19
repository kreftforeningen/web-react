import { Label, Page, RadioGroup, RadioGroupItem } from "@/lib/main";

export default function RadioGroupDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Radio Group</h2>
      <RadioGroup defaultValue="option-one">
        <div className="app-inline-space">
          <RadioGroupItem value="option-one" id="radio-option-one" />
          <Label htmlFor="radio-option-one">Option One</Label>
        </div>
        <div className="app-inline-space">
          <RadioGroupItem value="option-two" id="radio-option-two" />
          <Label htmlFor="radio-option-two">Option Two</Label>
        </div>
      </RadioGroup>
    </Page.Block>
  );
}
