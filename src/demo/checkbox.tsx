import { Checkbox, Label, Page, HStack, VStack } from "@/lib/main";

export default function CheckboxDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Checkbox</h2>
      <VStack gap={6}>
        <HStack>
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </HStack>
        <HStack>
          <Checkbox id="terms-2" defaultChecked />
          <div className="app-grid-gap-sm">
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
            <p className="app-muted-text-sm">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </HStack>
        <HStack>
          <Checkbox id="toggle" disabled />
          <Label htmlFor="toggle">Enable notifications</Label>
        </HStack>
      </VStack>
    </Page.Block>
  );
}
