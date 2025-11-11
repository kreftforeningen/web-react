import { Checkbox, Label } from "@/lib/main";

export default function CheckboxDemo() {
  return (
    <>
      <h2>Checkbox</h2>
      <div className="app-stack-gap-lg">
        <div className="app-inline-gap-md">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="app-inline-gap-md-top">
          <Checkbox id="terms-2" defaultChecked />
          <div className="app-grid-gap-sm">
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
            <p className="app-muted-text-sm">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
        <div className="app-inline-gap-md-top">
          <Checkbox id="toggle" disabled />
          <Label htmlFor="toggle">Enable notifications</Label>
        </div>
        <Label>
          <Checkbox id="toggle-2" defaultChecked />
          <div className="app-grid-tight">
            <p className="app-text-strong">Enable notifications</p>
            <p className="app-muted-text-sm">
              You can enable or disable notifications at any time.
            </p>
          </div>
        </Label>
      </div>
    </>
  );
}

