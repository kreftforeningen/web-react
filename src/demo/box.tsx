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

      <Box color="green" margin={{ base: "1rem 0", md: "1.5rem 0" }}>
        <p>
          <strong>Using margin on Box</strong>
        </p>
        <p>
          This box uses the <code>margin</code> prop to create vertical spacing.
        </p>
      </Box>

      <Box color="orange" marginInline="auto" maxWidth="28rem" marginBlock="1rem">
        <p>
          <strong>Using marginInline and marginBlock</strong>
        </p>
        <p>
          This box is centered with <code>marginInline="auto"</code> and spaced
          with <code>marginBlock</code>.
        </p>
      </Box>

      <Bleed>
        <Box
          as="article"
          color="gray"
          margin={{ base: "0 auto", sm: "0 auto 2rem auto" }}
        >
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
