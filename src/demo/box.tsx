import { Box, Bleed, Page } from "@/lib/main";

const spacing = "var(--kf-spacing, 0.25rem)";

export default function BoxDemo() {
  return (
    <Page.Block width="lg" gutters>
      <h2>Box</h2>

      <Box color="blue">
        <p>
          <strong>Responsive padding + tokens</strong>
        </p>
        <p>
          Padding scales from 2 → 4 spacing units. Background, radius, and
          shadow read directly from the design tokens.
        </p>
      </Box>

      <Box
        as="section"
        style={{
          display: "grid",
          gap: spacing,
        }}
      >
        <h3>Compose any element</h3>
        <p>
          Pass <code>as="section"</code> to change the underlying tag or use{" "}
          <code>asChild</code> to wrap existing markup without extra DOM.
        </p>
      </Box>

      <Bleed>
        <Box as="article" color="gray">
          <p>
            <strong>Box as layout primitive</strong>
          </p>
          <p>
            Combine padding/margin/background props to build quick sections
            without bespoke CSS. Useful for cards, hero panels, and callouts.
          </p>
        </Box>
      </Bleed>

      <Box as="section">
        <h3>Dark mode colors</h3>
        <p>
          Use <code>backgroundDark</code> and <code>borderColorDark</code> props
          to set colors that apply automatically in dark mode.
        </p>
      </Box>
    </Page.Block>
  );
}
