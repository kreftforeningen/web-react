import { Kbd, KbdGroup } from "@/lib/main";

export default function KbdDemo() {
  return (
    <>
      <h2>Kbd</h2>
      <div className="app-centered-column-lg">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⌃</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>B</Kbd>
        </KbdGroup>
      </div>
    </>
  );
}

