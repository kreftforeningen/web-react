import { Button } from "@/lib/main";

export default function ButtonDemo() {
  return (
    <>
      <h2>Button</h2>
      <div className="app-button-row">
        <Button variant="default">Default</Button>
        <Button variant="default" disabled>
          Default Disabled
        </Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline" shape="square">
          Square
        </Button>
        <Button variant="link">Link</Button>
      </div>
    </>
  );
}

