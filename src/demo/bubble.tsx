import {
  Bubble,
  BubbleContent,
  BubbleReactions,
  BubbleGroup,
  Page,
} from "@/lib/main";

export default function BubbleDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Bubble</h2>
      <div className="app-centered-column-sm">
        <h3>Variants</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Bubble>
            <BubbleContent>This is the default primary bubble.</BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent>This is the secondary variant.</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>This one is muted.</BubbleContent>
            <BubbleReactions>
              <span>👍</span>
            </BubbleReactions>
          </Bubble>
          <Bubble variant="tinted">
            <BubbleContent>This one is tinted.</BubbleContent>
          </Bubble>
          <Bubble variant="outline">
            <BubbleContent>Outlined variant.</BubbleContent>
          </Bubble>
          <Bubble variant="destructive">
            <BubbleContent>Destructive variant.</BubbleContent>
            <BubbleReactions>
              <span>🔥</span>
            </BubbleReactions>
          </Bubble>
          <Bubble variant="ghost">
            <BubbleContent>
              Ghost bubbles are full width and can take the full width of the
              container. Perfect for assistant messages.
            </BubbleContent>
          </Bubble>
        </div>

        <h3>Alignment</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Bubble variant="secondary">
            <BubbleContent>Aligned to the start (default).</BubbleContent>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>Aligned to the end.</BubbleContent>
          </Bubble>
        </div>

        <h3>Group</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <BubbleGroup>
            <Bubble variant="secondary">
              <BubbleContent>Can you tell me what's the issue?</BubbleContent>
            </Bubble>
            <Bubble variant="secondary">
              <BubbleContent>You tell me!</BubbleContent>
            </Bubble>
          </BubbleGroup>
          <BubbleGroup>
            <Bubble align="end">
              <BubbleContent>
                Want me to diff yesterday's you against today's you?
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </div>

        <h3>Reactions</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Bubble variant="secondary">
            <BubbleContent>Tests passed on the first try!</BubbleContent>
            <BubbleReactions>
              <span>🎉</span>
              <span>👏</span>
            </BubbleReactions>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>Bold move.</BubbleContent>
            <BubbleReactions side="top" align="start">
              <span>👍</span>
              <span>😮</span>
            </BubbleReactions>
          </Bubble>
        </div>
      </div>
    </Page.Block>
  );
}
