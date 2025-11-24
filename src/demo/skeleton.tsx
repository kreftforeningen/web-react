import { HStack, Page, Skeleton, VStack } from "@/lib/main";

export default function SkeletonDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2 className="margin">Skeleton</h2>
      <VStack>
        <Skeleton style={{ width: "100%", height: "100px" }} />
        <HStack>
          <Skeleton style={{ width: "100px", height: "100px" }} />
          <Skeleton style={{ width: "100px", height: "100px" }} />
        </HStack>
      </VStack>
    </Page.Block>
  );
}
