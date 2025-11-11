import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ModeToggle,
} from "./lib/main";
import { Spinner } from "./lib/main";

const HomeDemo = lazy(() => import("@/demo/home"));

const AccentuatedLinkDemo = lazy(() => import("@/demo/accentuated-link"));
const AccordionDemo = lazy(() => import("@/demo/accordion"));
const AlertDemo = lazy(() => import("@/demo/alert"));
const AlertDialogDemo = lazy(() => import("@/demo/alert-dialog"));
const AspectRatioDemo = lazy(() => import("@/demo/aspect-ratio"));
const AvatarDemo = lazy(() => import("@/demo/avatar"));
const BadgeDemo = lazy(() => import("@/demo/badge"));
const BannerDemo = lazy(() => import("@/demo/banner"));
const BreadcrumbDemo = lazy(() => import("@/demo/breadcrumb"));
const ButtonDemo = lazy(() => import("@/demo/button"));
const ButtonGroupDemo = lazy(() => import("@/demo/button-group"));
const CalendarDemo = lazy(() => import("@/demo/calendar"));
const CardDemo = lazy(() => import("@/demo/card"));
const CarouselDemo = lazy(() => import("@/demo/carousel"));
const ChartDemo = lazy(() => import("@/demo/chart"));
const CheckboxDemo = lazy(() => import("@/demo/checkbox"));
const CollapsibleDemo = lazy(() => import("@/demo/collapsible"));
const CommandDemo = lazy(() => import("@/demo/command"));
const ContextMenuDemo = lazy(() => import("@/demo/context-menu"));
const DialogDemo = lazy(() => import("@/demo/dialog"));
const DownloadDemo = lazy(() => import("@/demo/download"));
const DrawerDemo = lazy(() => import("@/demo/drawer"));
const DropdownMenuDemo = lazy(() => import("@/demo/dropdown-menu"));
const EmptyDemo = lazy(() => import("@/demo/empty"));
const FactBoxDemo = lazy(() => import("@/demo/fact-box"));
const FeedbackDemo = lazy(() => import("@/demo/feedback"));
const FieldDemo = lazy(() => import("@/demo/field"));
const FooterDemo = lazy(() => import("@/demo/footer"));
const HeaderDemo = lazy(() => import("@/demo/header"));
const HoverCardDemo = lazy(() => import("@/demo/hover-card"));
const InfographicDemo = lazy(() => import("@/demo/infographic"));
const InputDemo = lazy(() => import("@/demo/input"));
const InputGroupDemo = lazy(() => import("@/demo/input-group"));
const InputOTPDemo = lazy(() => import("@/demo/input-otp"));
const ItemDemo = lazy(() => import("@/demo/item"));
const KbdDemo = lazy(() => import("@/demo/kbd"));
const LabelDemo = lazy(() => import("@/demo/label"));
const LinkListDemo = lazy(() => import("@/demo/link-list"));
const MenubarDemo = lazy(() => import("@/demo/menubar"));
const ModeToggleDemo = lazy(() => import("@/demo/mode-toggle"));
const NativeSelectDemo = lazy(() => import("@/demo/native-select"));
const NavigationMenuDemo = lazy(() => import("@/demo/navigation-menu"));
const PaginationDemo = lazy(() => import("@/demo/pagination"));
const PersonDemo = lazy(() => import("@/demo/person"));
const PopoverDemo = lazy(() => import("@/demo/popover"));
const ProgressDemo = lazy(() => import("@/demo/progress"));
const RadioGroupDemo = lazy(() => import("@/demo/radio-group"));
const ResizableDemo = lazy(() => import("@/demo/resizable"));
const ScrollAreaDemo = lazy(() => import("@/demo/scroll-area"));
const SelectDemo = lazy(() => import("@/demo/select"));
const SeparatorDemo = lazy(() => import("@/demo/separator"));
const SheetDemo = lazy(() => import("@/demo/sheet"));
const SidebarDemo = lazy(() => import("@/demo/sidebar"));
const SkeletonDemo = lazy(() => import("@/demo/skeleton"));
const SliderDemo = lazy(() => import("@/demo/slider"));
const SonnerDemo = lazy(() => import("@/demo/sonner"));
const SpinnerDemo = lazy(() => import("@/demo/spinner"));
const SwitchDemo = lazy(() => import("@/demo/switch"));
const TableDemo = lazy(() => import("@/demo/table"));
const TabsDemo = lazy(() => import("@/demo/tabs"));
const TextareaDemo = lazy(() => import("@/demo/textarea"));
const TimelineDemo = lazy(() => import("@/demo/timeline"));
const ToggleDemo = lazy(() => import("@/demo/toggle"));
const ToggleGroupDemo = lazy(() => import("@/demo/toggle-group"));
const TooltipDemo = lazy(() => import("@/demo/tooltip"));

import { ThemeProvider } from "./theme-provider";

function RootLayout() {
  return <Outlet />;
}

const navigationItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Accentuated Link",
    to: "/accentuated-link",
  },
  {
    label: "Accordion",
    to: "/accordion",
  },
  {
    label: "Alert",
    to: "/alert",
  },
  {
    label: "Alert Dialog",
    to: "/alert-dialog",
  },
  {
    label: "Aspect Ratio",
    to: "/aspect-ratio",
  },
  {
    label: "Avatar",
    to: "/avatar",
  },
  {
    label: "Badge",
    to: "/badge",
  },
  {
    label: "Banner",
    to: "/banner",
  },
  {
    label: "Breadcrumb",
    to: "/breadcrumb",
  },
  {
    label: "Button",
    to: "/button",
  },
  {
    label: "Button Group",
    to: "/button-group",
  },
  {
    label: "Calendar",
    to: "/calendar",
  },
  {
    label: "Card",
    to: "/card",
  },
  {
    label: "Carousel",
    to: "/carousel",
  },
  {
    label: "Chart",
    to: "/chart",
  },
  {
    label: "Checkbox",
    to: "/checkbox",
  },
  {
    label: "Collapsible",
    to: "/collapsible",
  },
  {
    label: "Command",
    to: "/command",
  },
  {
    label: "Context Menu",
    to: "/context-menu",
  },
  {
    label: "Dialog",
    to: "/dialog",
  },
  {
    label: "Download",
    to: "/download",
  },
  {
    label: "Drawer",
    to: "/drawer",
  },
  {
    label: "Dropdown Menu",
    to: "/dropdown-menu",
  },
  {
    label: "Empty",
    to: "/empty",
  },
  {
    label: "Fact Box",
    to: "/fact-box",
  },
  {
    label: "Feedback",
    to: "/feedback",
  },
  {
    label: "Field",
    to: "/field",
  },
  {
    label: "Footer",
    to: "/footer",
  },
  {
    label: "Header",
    to: "/header",
  },
  {
    label: "Hover Card",
    to: "/hover-card",
  },
  {
    label: "Infographic",
    to: "/infographic",
  },
  {
    label: "Input",
    to: "/input",
  },
  {
    label: "Input Group",
    to: "/input-group",
  },
  {
    label: "Input OTP",
    to: "/input-otp",
  },
  {
    label: "Item",
    to: "/item",
  },
  {
    label: "Kbd",
    to: "/kbd",
  },
  {
    label: "Label",
    to: "/label",
  },
  {
    label: "Link List",
    to: "/link-list",
  },
  {
    label: "Menubar",
    to: "/menubar",
  },
  {
    label: "Mode Toggle",
    to: "/mode-toggle",
  },
  {
    label: "Native Select",
    to: "/native-select",
  },
  {
    label: "Navigation Menu",
    to: "/navigation-menu",
  },
  {
    label: "Pagination",
    to: "/pagination",
  },
  {
    label: "Person",
    to: "/person",
  },
  {
    label: "Popover",
    to: "/popover",
  },
  {
    label: "Progress",
    to: "/progress",
  },
  {
    label: "Radio Group",
    to: "/radio-group",
  },
  {
    label: "Resizable",
    to: "/resizable",
  },
  {
    label: "Scroll Area",
    to: "/scroll-area",
  },
  {
    label: "Select",
    to: "/select",
  },
  {
    label: "Separator",
    to: "/separator",
  },
  {
    label: "Sheet",
    to: "/sheet",
  },
  {
    label: "Sidebar",
    to: "/sidebar",
  },
  {
    label: "Skeleton",
    to: "/skeleton",
  },
  {
    label: "Slider",
    to: "/slider",
  },
  {
    label: "Sonner",
    to: "/sonner",
  },
  {
    label: "Spinner",
    to: "/spinner",
  },
  {
    label: "Switch",
    to: "/switch",
  },
  {
    label: "Table",
    to: "/table",
  },
  {
    label: "Tabs",
    to: "/tabs",
  },
  {
    label: "Textarea",
    to: "/textarea",
  },
  {
    label: "Timeline",
    to: "/timeline",
  },
  {
    label: "Toggle",
    to: "/toggle",
  },
  {
    label: "Toggle Group",
    to: "/toggle-group",
  },
  {
    label: "Tooltip",
    to: "/tooltip",
  },
];

const router = createBrowserRouter([
  {
    element: (
      <>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.5rem",
              }}
            >
              {navigationItems.map((item) => (
                <DropdownMenuItem key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <main className="app-main-section">
          <RootLayout />
        </main>
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <HomeDemo />
          </Suspense>
        ),
      },
      {
        path: "/accentuated-link",
        element: (
          <Suspense fallback={<Spinner />}>
            <AccentuatedLinkDemo />
          </Suspense>
        ),
      },
      {
        path: "/accordion",
        element: (
          <Suspense fallback={<Spinner />}>
            <AccordionDemo />
          </Suspense>
        ),
      },
      {
        path: "/alert",
        element: (
          <Suspense fallback={<Spinner />}>
            <AlertDemo />
          </Suspense>
        ),
      },
      {
        path: "/alert-dialog",
        element: (
          <Suspense fallback={<Spinner />}>
            <AlertDialogDemo />
          </Suspense>
        ),
      },
      {
        path: "/aspect-ratio",
        element: (
          <Suspense fallback={<Spinner />}>
            <AspectRatioDemo />
          </Suspense>
        ),
      },
      {
        path: "/avatar",
        element: (
          <Suspense fallback={<Spinner />}>
            <AvatarDemo />
          </Suspense>
        ),
      },
      {
        path: "/badge",
        element: (
          <Suspense fallback={<Spinner />}>
            <BadgeDemo />
          </Suspense>
        ),
      },
      {
        path: "/banner",
        element: (
          <Suspense fallback={<Spinner />}>
            <BannerDemo />
          </Suspense>
        ),
      },
      {
        path: "/breadcrumb",
        element: (
          <Suspense fallback={<Spinner />}>
            <BreadcrumbDemo />
          </Suspense>
        ),
      },
      {
        path: "/button",
        element: (
          <Suspense fallback={<Spinner />}>
            <ButtonDemo />
          </Suspense>
        ),
      },
      {
        path: "/button-group",
        element: (
          <Suspense fallback={<Spinner />}>
            <ButtonGroupDemo />
          </Suspense>
        ),
      },
      {
        path: "/calendar",
        element: (
          <Suspense fallback={<Spinner />}>
            <CalendarDemo />
          </Suspense>
        ),
      },
      {
        path: "/card",
        element: (
          <Suspense fallback={<Spinner />}>
            <CardDemo />
          </Suspense>
        ),
      },
      {
        path: "/carousel",
        element: (
          <Suspense fallback={<Spinner />}>
            <CarouselDemo />
          </Suspense>
        ),
      },
      {
        path: "/chart",
        element: (
          <Suspense fallback={<Spinner />}>
            <ChartDemo />
          </Suspense>
        ),
      },
      {
        path: "/checkbox",
        element: (
          <Suspense fallback={<Spinner />}>
            <CheckboxDemo />
          </Suspense>
        ),
      },
      {
        path: "/collapsible",
        element: (
          <Suspense fallback={<Spinner />}>
            <CollapsibleDemo />
          </Suspense>
        ),
      },
      {
        path: "/command",
        element: (
          <Suspense fallback={<Spinner />}>
            <CommandDemo />
          </Suspense>
        ),
      },
      {
        path: "/context-menu",
        element: (
          <Suspense fallback={<Spinner />}>
            <ContextMenuDemo />
          </Suspense>
        ),
      },
      {
        path: "/dialog",
        element: (
          <Suspense fallback={<Spinner />}>
            <DialogDemo />
          </Suspense>
        ),
      },
      {
        path: "/download",
        element: (
          <Suspense fallback={<Spinner />}>
            <DownloadDemo />
          </Suspense>
        ),
      },
      {
        path: "/drawer",
        element: (
          <Suspense fallback={<Spinner />}>
            <DrawerDemo />
          </Suspense>
        ),
      },
      {
        path: "/dropdown-menu",
        element: (
          <Suspense fallback={<Spinner />}>
            <DropdownMenuDemo />
          </Suspense>
        ),
      },
      {
        path: "/empty",
        element: (
          <Suspense fallback={<Spinner />}>
            <EmptyDemo />
          </Suspense>
        ),
      },
      {
        path: "/fact-box",
        element: (
          <Suspense fallback={<Spinner />}>
            <FactBoxDemo />
          </Suspense>
        ),
      },
      {
        path: "/feedback",
        element: (
          <Suspense fallback={<Spinner />}>
            <FeedbackDemo />
          </Suspense>
        ),
      },
      {
        path: "/field",
        element: (
          <Suspense fallback={<Spinner />}>
            <FieldDemo />
          </Suspense>
        ),
      },
      {
        path: "/footer",
        element: (
          <Suspense fallback={<Spinner />}>
            <FooterDemo />
          </Suspense>
        ),
      },
      {
        path: "/header",
        element: (
          <Suspense fallback={<Spinner />}>
            <HeaderDemo />
          </Suspense>
        ),
      },
      {
        path: "/hover-card",
        element: (
          <Suspense fallback={<Spinner />}>
            <HoverCardDemo />
          </Suspense>
        ),
      },
      {
        path: "/infographic",
        element: (
          <Suspense fallback={<Spinner />}>
            <InfographicDemo />
          </Suspense>
        ),
      },
      {
        path: "/input",
        element: (
          <Suspense fallback={<Spinner />}>
            <InputDemo />
          </Suspense>
        ),
      },
      {
        path: "/input-group",
        element: (
          <Suspense fallback={<Spinner />}>
            <InputGroupDemo />
          </Suspense>
        ),
      },
      {
        path: "/input-otp",
        element: (
          <Suspense fallback={<Spinner />}>
            <InputOTPDemo />
          </Suspense>
        ),
      },
      {
        path: "/item",
        element: (
          <Suspense fallback={<Spinner />}>
            <ItemDemo />
          </Suspense>
        ),
      },
      {
        path: "/kbd",
        element: (
          <Suspense fallback={<Spinner />}>
            <KbdDemo />
          </Suspense>
        ),
      },
      {
        path: "/label",
        element: (
          <Suspense fallback={<Spinner />}>
            <LabelDemo />
          </Suspense>
        ),
      },
      {
        path: "/link-list",
        element: (
          <Suspense fallback={<Spinner />}>
            <LinkListDemo />
          </Suspense>
        ),
      },
      {
        path: "/menubar",
        element: (
          <Suspense fallback={<Spinner />}>
            <MenubarDemo />
          </Suspense>
        ),
      },
      {
        path: "/mode-toggle",
        element: (
          <Suspense fallback={<Spinner />}>
            <ModeToggleDemo />
          </Suspense>
        ),
      },
      {
        path: "/native-select",
        element: (
          <Suspense fallback={<Spinner />}>
            <NativeSelectDemo />
          </Suspense>
        ),
      },
      {
        path: "/navigation-menu",
        element: (
          <Suspense fallback={<Spinner />}>
            <NavigationMenuDemo />
          </Suspense>
        ),
      },
      {
        path: "/pagination",
        element: (
          <Suspense fallback={<Spinner />}>
            <PaginationDemo />
          </Suspense>
        ),
      },
      {
        path: "/person",
        element: (
          <Suspense fallback={<Spinner />}>
            <PersonDemo />
          </Suspense>
        ),
      },
      {
        path: "/popover",
        element: (
          <Suspense fallback={<Spinner />}>
            <PopoverDemo />
          </Suspense>
        ),
      },
      {
        path: "/progress",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProgressDemo />
          </Suspense>
        ),
      },
      {
        path: "/radio-group",
        element: (
          <Suspense fallback={<Spinner />}>
            <RadioGroupDemo />
          </Suspense>
        ),
      },
      {
        path: "/resizable",
        element: (
          <Suspense fallback={<Spinner />}>
            <ResizableDemo />
          </Suspense>
        ),
      },
      {
        path: "/scroll-area",
        element: (
          <Suspense fallback={<Spinner />}>
            <ScrollAreaDemo />
          </Suspense>
        ),
      },
      {
        path: "/select",
        element: (
          <Suspense fallback={<Spinner />}>
            <SelectDemo />
          </Suspense>
        ),
      },
      {
        path: "/separator",
        element: (
          <Suspense fallback={<Spinner />}>
            <SeparatorDemo />
          </Suspense>
        ),
      },
      {
        path: "/sheet",
        element: (
          <Suspense fallback={<Spinner />}>
            <SheetDemo />
          </Suspense>
        ),
      },
      {
        path: "/sidebar",
        element: (
          <Suspense fallback={<Spinner />}>
            <SidebarDemo />
          </Suspense>
        ),
      },
      {
        path: "/skeleton",
        element: (
          <Suspense fallback={<Spinner />}>
            <SkeletonDemo />
          </Suspense>
        ),
      },
      {
        path: "/slider",
        element: (
          <Suspense fallback={<Spinner />}>
            <SliderDemo />
          </Suspense>
        ),
      },
      {
        path: "/sonner",
        element: (
          <Suspense fallback={<Spinner />}>
            <SonnerDemo />
          </Suspense>
        ),
      },
      {
        path: "/spinner",
        element: (
          <Suspense fallback={<Spinner />}>
            <SpinnerDemo />
          </Suspense>
        ),
      },
      {
        path: "/switch",
        element: (
          <Suspense fallback={<Spinner />}>
            <SwitchDemo />
          </Suspense>
        ),
      },
      {
        path: "/table",
        element: (
          <Suspense fallback={<Spinner />}>
            <TableDemo />
          </Suspense>
        ),
      },
      {
        path: "/tabs",
        element: (
          <Suspense fallback={<Spinner />}>
            <TabsDemo />
          </Suspense>
        ),
      },
      {
        path: "/textarea",
        element: (
          <Suspense fallback={<Spinner />}>
            <TextareaDemo />
          </Suspense>
        ),
      },
      {
        path: "/timeline",
        element: (
          <Suspense fallback={<Spinner />}>
            <TimelineDemo />
          </Suspense>
        ),
      },
      {
        path: "/toggle",
        element: (
          <Suspense fallback={<Spinner />}>
            <ToggleDemo />
          </Suspense>
        ),
      },
      {
        path: "/toggle-group",
        element: (
          <Suspense fallback={<Spinner />}>
            <ToggleGroupDemo />
          </Suspense>
        ),
      },
      {
        path: "/tooltip",
        element: (
          <Suspense fallback={<Spinner />}>
            <TooltipDemo />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
