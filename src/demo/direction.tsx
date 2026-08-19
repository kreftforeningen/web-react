import { DirectionProvider, useDirection, Page, Input, Label } from "@/lib/main";

function DirectionDisplay() {
  const direction = useDirection();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p>
        Current direction: <strong>{direction}</strong>
      </p>
      <div>
        <Label>Email</Label>
        <Input placeholder="example@email.com" />
      </div>
    </div>
  );
}

export default function DirectionDemo() {
  return (
    <Page.Block width="xl" gutters>
      <h2>Direction</h2>
      <div className="app-centered-column-sm">
        <h3>LTR (Left to Right)</h3>
        <DirectionProvider direction="ltr">
          <DirectionDisplay />
        </DirectionProvider>

        <h3>RTL (Right to Left)</h3>
        <DirectionProvider direction="rtl">
          <DirectionDisplay />
        </DirectionProvider>
      </div>
    </Page.Block>
  );
}
