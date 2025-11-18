import {
  Page,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/main";

export default function TooltipDemo() {
  return (
    <Page.Block width="xl" gutters>
      <h2>Tooltip</h2>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Page.Block>
  );
}
