import { Button, Popover, PopoverContent, PopoverTrigger } from "@/lib/main";

export default function PopoverDemo() {
  return (
    <>
      <h2>Popover</h2>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </>
  );
}
