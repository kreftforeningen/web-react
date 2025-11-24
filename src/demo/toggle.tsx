import { Page, Toggle, VStack } from "@/lib/main";

export default function ToggleDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2 className="margin">Toggle</h2>
      <VStack gap={4} align="start">
        <Toggle>Toggle</Toggle>
        <Toggle variant="outline">Toggle</Toggle>
      </VStack>
    </Page.Block>
  );
}
