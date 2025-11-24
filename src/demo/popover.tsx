import {
  Button,
  Page,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/lib/main";

export default function PopoverDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2 className="margin">Popover</h2>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </Page.Block>
  );
}
