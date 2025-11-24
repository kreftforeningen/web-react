import { Page, Progress } from "@/lib/main";

export default function ProgressDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2 className="margin">Progress</h2>
      <Progress value={50} />
    </Page.Block>
  );
}
