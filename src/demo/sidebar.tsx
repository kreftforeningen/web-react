import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/lib/main";

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Projects", active: false },
  { label: "Tasks", active: false },
];

export default function SidebarDemo() {
  return (
    <>
      <h2>Sidebar</h2>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <SidebarInput placeholder="Search..." />
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active}>
                        {item.label}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <Button variant="outline" size="sm">
              Settings
            </Button>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="app-padding-md">
          <div className="app-inline-gap-sm">
            <SidebarTrigger />
            <h3 className="app-text-semibold m-0">Select an item</h3>
          </div>
          <p className="app-muted-text-sm">
            Use the sidebar to navigate between different sections.
          </p>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
