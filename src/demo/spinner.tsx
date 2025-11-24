import { Button, Page, Spinner, VStack } from "@/lib/main";

export default function SpinnerDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2 className="margin">Spinner</h2>
      <VStack align="start" gap={8}>
        <Button disabled size="sm">
          <Spinner />
          Loading...
        </Button>
        <Spinner />
        <Spinner />
        <Spinner />
      </VStack>
    </Page.Block>
  );
}
