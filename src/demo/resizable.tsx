import {
  Page,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/lib/main";

export default function ResizableDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Resizable</h2>
      <div className="app-resizable-example">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={30}>
            <div className="app-panel-centered">
              <span className="app-font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={70}>
            <div className="app-panel-centered">
              <span className="app-font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </Page.Block>
  );
}

