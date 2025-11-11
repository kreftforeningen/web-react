import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/lib/main";

export default function ResizableDemo() {
  return (
    <>
      <h2>Resizable</h2>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={25}>
          <div className="app-panel-centered">
            <span className="app-font-semibold">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="app-panel-centered">
            <span className="app-font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

