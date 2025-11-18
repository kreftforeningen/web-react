import { Box, Page } from "@/lib/main";

const spacing = "var(--kf-spacing, 0.25rem)";

export default function BoxDemo() {
  return (
    <Page.Block width="lg" gutters>
      <h2>Box</h2>

      <Box
        padding={{ base: 2, md: 4 }}
        background="var(--kf-color-blue-50, oklch(0.94 0.05 230))"
      >
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
        marginBlock={{ base: "calc(var(--kf-spacing, 0.25rem) * 4)" }}
        padding={{ base: 3 }}
        borderWidth="1px"
        borderColor="var(--kf-color-gray-200, oklch(0.88 0.02 240))"
        borderRadius="var(--kf-radius-xl, 1rem)"
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

      <Box
        as="article"
        padding={{ base: 3 }}
        background="linear-gradient(135deg, var(--kf-color-blue-600, #2563eb), var(--kf-color-blue-400, #60a5fa))"
        color="var(--kf-color-white, #fff)"
        borderRadius="var(--kf-radius-2xl, 1rem)"
        shadow="var(--kf-shadow-xl, 0 20px 25px -5px rgb(15 23 42 / 0.2))"
      >
        <p>
          <strong>Box as layout primitive</strong>
        </p>
        <p>
          Combine padding/margin/background props to build quick sections
          without bespoke CSS. Useful for cards, hero panels, and callouts.
        </p>
      </Box>
    </Page.Block>
  );
}
