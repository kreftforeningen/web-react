import { Skeleton } from "@/lib/main";

export default function SkeletonDemo() {
  return (
    <>
      <h2>Skeleton</h2>
      <div className="app-inline-space-lg">
        <Skeleton />
        <div className="app-column-gap-sm">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </>
  );
}
