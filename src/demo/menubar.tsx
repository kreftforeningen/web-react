import {
  Checkbox,
  Label,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  RadioGroup,
  RadioGroupItem,
} from "@/lib/main";

export default function MenubarDemo() {
  return (
    <>
      <h2>Menubar</h2>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Checkbox id="menubar-show-bookmarks" />
              <Label htmlFor="menubar-show-bookmarks">
                Always Show Bookmarks Bar
              </Label>
            </MenubarItem>
            <MenubarItem>
              <Checkbox id="menubar-show-urls" defaultChecked />
              <Label htmlFor="menubar-show-urls">Always Show Full URLs</Label>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <RadioGroup defaultValue="andy">
              <MenubarItem>
                <RadioGroupItem value="andy" />
                <Label htmlFor="andy">Andy</Label>
              </MenubarItem>
              <MenubarItem>
                <RadioGroupItem value="benoit" />
                <Label htmlFor="benoit">Benoit</Label>
              </MenubarItem>
            </RadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
