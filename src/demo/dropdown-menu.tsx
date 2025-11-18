import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Page,
} from "@/lib/main";

export default function DropdownMenuDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Dropdown Menu</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" shape="square">
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem variant="default">Default</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Destructive</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>More</DropdownMenuLabel>
          <DropdownMenuItem>Archive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Page.Block>
  );
}
