import * as React from "react";

import {
  AccentuatedLink,
  AccentuatedLinkTitle,
  AccentuatedLinkSubtitle,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogHeader,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Banner,
  BannerButtons,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  Calendar,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselContentWrapper,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Download,
  DownloadImage,
  DownloadFooter,
  DownloadOrderUrl,
  DownloadDownloadUrl,
  DownloadContent,
  DownloadMain,
  DownloadDescription,
  DownloadTitle,
  Person,
  PersonItem,
  PersonItemPhone,
  PersonItemContent,
  PersonItemDescription,
  PersonItemEmail,
  PersonItemName,
  PersonItemTitle,
  PersonItemImage,
  FactBox,
  FactBoxAction,
  FactBoxContent,
  FactBoxDescription,
  FactBoxTitle,
  Infographic,
  InfographicItem,
  InfographicItemDescription,
  InfographicItemTitleText,
  InfographicItemTitle,
  InfographicItemTitleNumber,
  InfographicItemIcon,
  LinkList,
  LinkListItem,
  LinkListDescription,
  LinkListTitle,
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
  ChartLegendContent,
  ChartLegend,
  Textarea,
  HeaderWrapper,
  HeaderLogo,
  HeaderButton,
  HeaderMenu,
  HeaderMenuTrigger,
  HeaderMenuContent,
  HeaderSearch,
  HeaderMenuList,
  HeaderMenuListItem,
  HeaderMenuFooter,
  HeaderTitle,
  FooterNavigationItem,
  FooterNavigationLink,
  FooterSocial,
  FooterWrapper,
  FooterNavigation,
  FooterContact,
  FooterActions,
  FooterContactItem,
  FooterCopyright,
  Spinner,
  Feedback,
  FeedbackAction,
  FeedbackTitle,
  FeedbackHeader,
  FeedbackDescription,
  FeedbackButtons,
  FeedbackContent,
  FeedbackComment,
  FeedbackCommentInput,
  FeedbackButtonPositive,
  FeedbackButtonNegative,
  FeedbackSubmit,
  CarouselItemDescription,
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
  Item,
  ItemDescription,
  ItemContent,
  ItemTitle,
  ItemActions,
  ItemMedia,
  ItemGroup,
  Kbd,
  KbdGroup,
  NativeSelect,
  NativeSelectOption,
  BannerButtonPrimary,
  BannerButtonSecondary,
  ModeToggle,
  ChartConfig,
} from "@/lib/main";
import { toast } from "sonner";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Calendar as CalendarIcon,
  ChevronsUpDown,
  CircleCheck,
  Smile,
  Calculator,
  User,
  CreditCard,
  Settings,
  ArrowRight,
  CircleAlert,
  CircleHelp,
  ServerIcon,
  HeartIcon,
  MenuIcon,
  UserIcon,
  GlobeIcon,
  ChevronRightIcon,
  ShoppingBasketIcon,
  Phone,
  Map,
  MessageCircle,
  Mail,
  HandCoins,
  Cog,
  ArrowRightIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  ArrowLeftIcon,
  FolderCodeIcon,
  ArrowUpRightIcon,
  SearchIcon,
  InfoIcon,
  PlusIcon,
  CheckIcon,
  ArrowUpIcon,
  BadgeCheckIcon,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const personItems = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.long.name.johnson.doe@example.com",
    phone: "+47 98765432",
    title: "Software Engineer",
    image: "https://robohash.org/John?set=set4",
    description:
      "John Doe is a software engineer with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "j.doe@example.com",
    phone: "+47 98765432",
    title: "Marketing Manager",
    description:
      "Jane Doe is a marketing manager with a passion for building scalable and efficient systems. She is a quick learner and always looking for new challenges.",
  },
  {
    id: 3,
    firstName: "Alfred",
    lastName: "Hitchcock",
    email: "a.hitchcock@example.com",
    phone: "+47 98765432",
    title: "Product Manager",
    image: "https://robohash.org/Alfred?set=set4",
    description:
      "Alfred Hitchcock is a product manager with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
  {
    id: 4,
    firstName: "Jane",
    lastName: "Fonda",
    email: "j.fonda@example.com",
    phone: "+47 98765432",
    title: "Sales Manager",
    image: "https://robohash.org/Jane?set=set4",
    description:
      "Jane Fonda is a sales manager with a passion for building scalable and efficient systems. She is a quick learner and always looking for new challenges.",
  },
  {
    id: 5,
    firstName: "Lars Ola",
    lastName: "Wayne",
    email: "lwayne@example.com",
    phone: "+47 98765432",
    title: "CEO",
    description:
      "Lars Wayne is a CEO with a passion for building scalable and efficient systems. He is a quick learner and always looking for new challenges.",
  },
];

const infographicItems = [
  {
    id: 1,
    titleNumber: "3 %",
    titleText: "Project Kickoff",
    description: "Initial meeting with the team and stakeholders.",
    url: "https://www.example.com",
  },
  {
    id: 2,
    titleNumber: "2",
    titleText: "Design Phase",
    description: "UI/UX design and prototyping.",
    url: "https://www.google.com",
  },
];

const linklistItems = [
  {
    id: 1,
    title: "Project Kickoff",
    content: "Initial meeting with the team and stakeholders.",
    url: "https://www.example.com",
  },
  {
    id: 2,
    title: "Design Phase",
    content: "UI/UX design and prototyping.",
    url: "https://www.google.com",
  },
  {
    id: 3,
    title: "Development Start",
    content: "Begin coding the main features.",
    url: "https://www.altavista.com",
  },
  {
    id: 4,
    title: "Testing",
    content: "QA and bug fixing.",
    url: "https://www.reddit.com",
  },
  {
    id: 5,
    title: "Launch",
    content: "Release the product to users.",
    url: "https://www.youtube.com",
  },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
} satisfies ChartConfig;

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
];

export default function AllDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false);
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <>
      <main className="app-main-section">
        <Toaster position="top-center" richColors closeButton />
        <div className="app-mode-toggle-anchor">
          <ModeToggle variant="outline" size="default">
            Text/Icon
          </ModeToggle>
        </div>
        <h1>@kreftforeningen/web-react</h1>

        <h2 id="accentuated-link">Accentuated Link</h2>
        <AccentuatedLink href="https://www.google.com">
          <AccentuatedLinkSubtitle>Read more</AccentuatedLinkSubtitle>
          <AccentuatedLinkTitle>
            World's Most Used Search Engine
          </AccentuatedLinkTitle>
        </AccentuatedLink>

        <h2 id="accordion">Accordion</h2>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2>Alert</h2>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the CLI.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <CircleAlert />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the CLI.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <CircleCheck />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the CLI.
          </AlertDescription>
        </Alert>

        <h2>Alert Dialog</h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Open Alert Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <h2>Aspect Ratio</h2>
        <p className="app-spacing-bottom">
          Image using aspect ratio set to 21/9.
        </p>
        <AspectRatio ratio={21 / 9}>
          <img
            src="https://picsum.photos/id/260/1600/900"
            alt="Card Image"
            className="app-media-rounded"
          />
        </AspectRatio>

        <h2>Avatar</h2>
        <div className="app-avatar-row">
          <Avatar>
            <AvatarImage src="https://robohash.org/CN?set=set4" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://robohash.org/ER?set=set4"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <div className="app-avatar-stack">
            <Avatar>
              <AvatarImage
                src="https://robohash.org/AB?set=set4"
                alt="@shadcn"
              />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://robohash.org/LR?set=set4"
                alt="@leerob"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://robohash.org/BR?set=set4"
                alt="@evilrabbit"
              />
              <AvatarFallback>BR</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <h2>Badge</h2>
        <div className="app-centered-column-sm">
          <div className="app-flex-row-wrap">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="app-flex-row-wrap">
            <Badge variant="secondary">
              <CircleCheck />
              Verified
            </Badge>
          </div>
        </div>

        <h2 id="banner">Banner</h2>
        <Banner>
          <BannerImage
            src="https://picsum.photos/id/240/1600/900"
            alt="Banner"
          />
          <BannerContent>
            <BannerTitle>Banner</BannerTitle>
            <BannerDescription>
              <p className="app-spacing-bottom">
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
                Text. Text. Text. Text.
              </p>
            </BannerDescription>
            <BannerButtons>
              <BannerButtonPrimary href="https://example.com">
                Example
              </BannerButtonPrimary>
              <BannerButtonSecondary href="https://example.com">
                Example
              </BannerButtonSecondary>
            </BannerButtons>
          </BannerContent>
        </Banner>

        <h2>Breadcrumb</h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h2 id="button">Button</h2>
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

        <h2 id="button-group">Button Group</h2>
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" size="icon" aria-label="Go Back">
              <ArrowLeftIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
          </ButtonGroup>
          <ButtonGroupSeparator />
          <ButtonGroup>
            <Button variant="outline">Archive</Button>
            <Button variant="outline">Report</Button>
          </ButtonGroup>
          <ButtonGroupText>Button Group Text</ButtonGroupText>
        </ButtonGroup>

        <h2 id="calendar">Calendar</h2>
        <Calendar mode="single" selected={date} onSelect={setDate} />

        <h2 id="card">Card</h2>
        <div className="app-card-grid">
          <Card>
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://picsum.photos/id/241/1600/900"
                alt="Card Image"
                className="app-media-cover"
              />
            </AspectRatio>
            <CardHeader>
              <CardDescription>29.05.2020</CardDescription>
              <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
              <CardAction>
                <Badge>Badge</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>
                During the first few minutes of the conversation, I'll be there.
                But where will you be?
              </p>
            </CardContent>
            <CardFooter>
              <ArrowRight />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>29.05.2020</CardDescription>
              <CardTitle>– In About Five Minutes I'll Be There</CardTitle>
              <CardAction>
                <Badge>Badge</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>
                During the first few minutes of the conversation, I'll be there.
                But where will you be?
              </p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        <h2 id="carousel">Carousel</h2>
        <Carousel>
          <CarouselContentWrapper>
            <CarouselContent>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://picsum.photos/id/237/1600/900"
                    alt="Card Image"
                    className="app-media-rounded-xl"
                  />
                  <CarouselItemDescription>
                    A dog. A dog is a good boy. A dog is a good boy. A dog is a
                    good boy. What a dog can do is amazing. A dog can save a
                    life. A dog can be a good friend. A dog can be a good
                    companion. A dog can be a good pet. A dog can be a good
                    friend. A dog can be a good companion. A dog can be a good
                    pet. A dog can be a good friend. A dog can be a good
                    companion. A dog can be a good pet.
                  </CarouselItemDescription>
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://picsum.photos/id/238/1600/900"
                    alt="Card Image"
                    className="app-media-rounded-xl"
                  />
                </AspectRatio>
                <CarouselItemDescription>A city.</CarouselItemDescription>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://picsum.photos/id/239/1600/900"
                    alt="Card Image"
                    className="app-media-rounded-xl"
                  />
                </AspectRatio>
                <CarouselItemDescription>
                  A flower. So beautiful that it needs a longer description.
                </CarouselItemDescription>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselContentWrapper>
          <CarouselDots />
        </Carousel>

        <h2 id="chart">Chart</h2>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                typeof value === "string" ? value.slice(0, 3) : value
              }
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--kf-color-blue-600)" radius={4} />
            <Bar dataKey="mobile" fill="var(--kf-color-red-700)" radius={4} />
          </BarChart>
        </ChartContainer>

        <h2 id="checkbox">Checkbox</h2>
        <div className="app-stack-gap-lg">
          <div className="app-inline-gap-md">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="app-inline-gap-md-top">
            <Checkbox id="terms-2" defaultChecked />
            <div className="app-grid-gap-sm">
              <Label htmlFor="terms-2">Accept terms and conditions</Label>
              <p className="app-muted-text-sm">
                By clicking this checkbox, you agree to the terms and
                conditions.
              </p>
            </div>
          </div>
          <div className="app-inline-gap-md-top">
            <Checkbox id="toggle" disabled />
            <Label htmlFor="toggle">Enable notifications</Label>
          </div>
          <Label>
            <Checkbox id="toggle-2" defaultChecked />
            <div className="app-grid-tight">
              <p className="app-text-strong">Enable notifications</p>
              <p className="app-muted-text-sm">
                You can enable or disable notifications at any time.
              </p>
            </div>
          </Label>
        </div>

        <h2 id="collapsible">Collapsible</h2>
        <Collapsible
          open={isCollapsibleOpen}
          onOpenChange={setIsCollapsibleOpen}
        >
          <div className="app-collapsible-header">
            <h4 className="app-text-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                <ChevronsUpDown />
                <span className="app-sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="app-code-chip">@radix-ui/primitives</div>
          <CollapsibleContent>
            <div className="app-code-chip">@radix-ui/colors</div>
            <div className="app-code-chip">@stitches/react</div>
          </CollapsibleContent>
        </Collapsible>

        <h2 id="command">Command</h2>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>

        <h2 id="context-menu">Context Menu</h2>
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline">Right click to show menu</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <h2 id="dialog">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Click to show dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <h2 id="download">Download</h2>
        <Download>
          <DownloadContent>
            <DownloadImage src="https://picsum.photos/id/200/200/300" />
            <DownloadMain>
              <DownloadTitle>Download</DownloadTitle>
              <DownloadDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </DownloadDescription>
            </DownloadMain>
          </DownloadContent>
          <DownloadFooter>
            <DownloadDownloadUrl href="https://www.google.com">
              Last ned
            </DownloadDownloadUrl>
            <DownloadOrderUrl href="https://www.google.com">
              Bestill
            </DownloadOrderUrl>
          </DownloadFooter>
        </Download>

        <h2 id="drawer">Drawer</h2>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="app-centered-panel">
              <DrawerHeader>
                <DrawerTitle>Drawer</DrawerTitle>
                <DrawerDescription>Achieve your goals.</DrawerDescription>
              </DrawerHeader>
              <div className="app-panel-message">
                Some content in this drawer.
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>

        <h2 id="dropdown-menu">DropdownMenu</h2>
        <div className="app-button-row">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" shape="square">
                Open
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem variant="default">Default</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                Destructive
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <h2 id="empty">Empty</h2>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderCodeIcon />
            </EmptyMedia>
            <EmptyTitle>No Projects Yet</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t created any projects yet. Get started by creating
              your first project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="app-inline-gap-sm">
              <Button>Create Project</Button>
              <Button variant="outline">Import Project</Button>
            </div>
          </EmptyContent>
          <Button variant="link" asChild size="sm">
            <a href="#">
              Learn More <ArrowUpRightIcon />
            </a>
          </Button>
        </Empty>

        <h2 id="fact-box">Fact Box</h2>
        <FactBox>
          <FactBoxContent>
            <FactBoxTitle>Fact About Cancer</FactBoxTitle>
            <FactBoxDescription>
              <p className="app-spacing-bottom">
                Something you should know about cancer. Is that it is a disease
                that affects many people. It can be treated and cured in many
                cases. But it can also be fatal.
              </p>
              <p className="app-spacing-bottom">
                Do you think you have cancer? You probably don't. But you should
                still get checked out.
              </p>
              <p>
                If you do not have cancer, you are lucky. But you should still
                get checked out.
              </p>
            </FactBoxDescription>
          </FactBoxContent>
          <FactBoxAction>Fact Box</FactBoxAction>
        </FactBox>

        <h2 id="feedback">Feedback</h2>
        <Feedback>
          <FeedbackHeader>
            <FeedbackTitle>We value your feedback</FeedbackTitle>
            <FeedbackDescription>
              Please let us know if our service met your expectations.
            </FeedbackDescription>
            <FeedbackAction>
              <ThumbsUpIcon size={16} />
              <ThumbsDownIcon size={16} />
            </FeedbackAction>
          </FeedbackHeader>
          <FeedbackContent>
            <FeedbackButtons>
              <FeedbackButtonPositive>Positiv</FeedbackButtonPositive>
              <FeedbackButtonNegative>Negativ</FeedbackButtonNegative>
            </FeedbackButtons>
            <FeedbackComment>
              <FeedbackCommentInput />
              <FeedbackSubmit>Submit Feedback</FeedbackSubmit>
            </FeedbackComment>
          </FeedbackContent>
        </Feedback>

        <h2 id="field">Field</h2>
        <div className="app-max-width">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Payment Method</FieldLegend>
                <FieldDescription>
                  All transactions are secure and encrypted
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Name on Card
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                      Card Number
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-number-uw1"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    <FieldDescription>
                      Enter your 16-digit card number
                    </FieldDescription>
                  </Field>
                  <div className="app-grid-three">
                    <Field>
                      <FieldLabel htmlFor="checkout-exp-month-ts6">
                        Month
                      </FieldLabel>
                      <Select defaultValue="">
                        <SelectTrigger id="checkout-exp-month-ts6">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="01">01</SelectItem>
                          <SelectItem value="02">02</SelectItem>
                          <SelectItem value="03">03</SelectItem>
                          <SelectItem value="04">04</SelectItem>
                          <SelectItem value="05">05</SelectItem>
                          <SelectItem value="06">06</SelectItem>
                          <SelectItem value="07">07</SelectItem>
                          <SelectItem value="08">08</SelectItem>
                          <SelectItem value="09">09</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="11">11</SelectItem>
                          <SelectItem value="12">12</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                        Year
                      </FieldLabel>
                      <Select defaultValue="">
                        <SelectTrigger id="checkout-7j9-exp-year-f59">
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                          <SelectItem value="2029">2029</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                      <Input id="checkout-7j9-cvv" placeholder="123" required />
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet>
                <FieldLegend>Billing Address</FieldLegend>
                <FieldDescription>
                  The billing address associated with your payment method
                </FieldDescription>
                <FieldGroup>
                  <Field orientation="horizontal">
                    <Checkbox
                      id="checkout-7j9-same-as-shipping-wgm"
                      defaultChecked
                    />
                    <FieldLabel htmlFor="checkout-7j9-same-as-shipping-wgm">
                      Same as shipping address
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                      Comments
                    </FieldLabel>
                    <Textarea
                      id="checkout-7j9-optional-comments"
                      placeholder="Add any additional comments"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>

        <h2 id="footer">Footer</h2>
      </main>
      <FooterWrapper>
        <FooterActions>
          <Button variant="destructive" asChild>
            <a href="#">
              Støtt oss <HeartIcon />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#">
              Nettbutikk <ShoppingBasketIcon />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#">
              Vipps 2277 <HandCoins />
            </a>
          </Button>
        </FooterActions>

        <FooterNavigation>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Kontonummer</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">SMS</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">
              Har vi forsøkt å ringe deg?
            </FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Nyhetsbrev</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Aktuelt</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Presse</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Skattefradrag</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Bli medlem</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Gi en gave</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Bli frivillig</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Min side</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Om oss</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">
              Bestill brosjyrer
            </FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">Personvern</FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">
              Informasjonskapsler
            </FooterNavigationLink>
          </FooterNavigationItem>
          <FooterNavigationItem>
            <FooterNavigationLink href="/">
              Ledige stillinger
            </FooterNavigationLink>
          </FooterNavigationItem>
        </FooterNavigation>

        <FooterSocial>
          <Button variant="outline" size="icon" aria-label="Facebook">
            <FaFacebook />
          </Button>
          <Button variant="outline" size="icon" aria-label="Instagram">
            <FaInstagram />
          </Button>
          <Button variant="outline" size="icon" aria-label="Youtube">
            <FaYoutube />
          </Button>
          <Button variant="outline" size="icon" aria-label="Linkedin">
            <FaLinkedin />
          </Button>
          <Button variant="outline" size="icon" aria-label="Tiktok">
            <FaTiktok />
          </Button>
        </FooterSocial>

        <FooterContact>
          <FooterContactItem href="#" aria-label="Phone">
            <Phone /> 21 49 49 21
          </FooterContactItem>
          <FooterContactItem href="#" aria-label="Email">
            <Mail />
            post@kreftforeningen.no
          </FooterContactItem>
          <FooterContactItem href="#" aria-label="Chat">
            <MessageCircle /> Chat med oss
          </FooterContactItem>
          <FooterContactItem href="#" aria-label="Map">
            <Map /> Kontorer og adresser
          </FooterContactItem>
        </FooterContact>

        <FooterCopyright>
          Vi er medlem av{" "}
          <a href="https://www.innsamlingskontrollen.no/">
            Innsamlingskontrollen i Norge
          </a>
          , <a href="https://oslocancercluster.no/">Oslo Cancer Cluster</a>,{" "}
          <a href="https://www.norwayhealthtech.com/nb/">Norway Health Tech</a>,{" "}
          <a href="https://www.smartcarecluster.no/">
            Norwegian Smart Care Cluster
          </a>
          , <a href="https://www.uicc.org/">UICC </a>og{" "}
          <a href="https://ncu.nu/">NCU</a>.
        </FooterCopyright>
      </FooterWrapper>
      <main className="app-main-section">
        <h2 id="header">Header</h2>
      </main>
      <div className="app-vertical-spacing">
        <h3 className="app-main-section">Header for Web</h3>
        <HeaderWrapper>
          <HeaderLogo
            src="/assets/logo.svg"
            darkSrc="/assets/logo-dark.svg"
            alt="Logo"
            href="/"
          />
          <HeaderButton href="#" variant="destructive">
            Støtt oss <HeartIcon />
          </HeaderButton>
          <HeaderButton
            href="https://nettbutikk.kreftforeningen.no"
            variant="outline"
          >
            Nettbutikk <ShoppingBasketIcon />
          </HeaderButton>

          <HeaderMenu>
            <HeaderMenuTrigger>
              <Button variant="default" data-slot="header-button">
                <span className="app-hidden-mobile">Menu</span> <MenuIcon />
              </Button>
            </HeaderMenuTrigger>
            <HeaderMenuContent>
              <HeaderSearch />
              <HeaderMenuList>
                <HeaderMenuListItem href="https://nettbutikk.kreftforeningen.no">
                  <ShoppingBasketIcon /> Nettbutikk
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <UserIcon /> Min side
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <GlobeIcon /> English
                </HeaderMenuListItem>
              </HeaderMenuList>
              <HeaderMenuList>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Om kreft
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Råd og rettigheter
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Tilbud og aktiviteter
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Forebygge kreft
                </HeaderMenuListItem>
              </HeaderMenuList>
              <HeaderMenuList>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Støtt kreftsaken
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Engasjer deg
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Kreftforskning
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Om oss
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Kontakt oss
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Aktuelt
                </HeaderMenuListItem>
              </HeaderMenuList>
              <HeaderMenuFooter>
                <ModeToggle
                  align="start"
                  variant="outline"
                  size="default"
                ></ModeToggle>
              </HeaderMenuFooter>
            </HeaderMenuContent>
          </HeaderMenu>
        </HeaderWrapper>
      </div>
      <div className="app-vertical-spacing">
        <h3 className="app-main-section">Header for App</h3>
        <HeaderWrapper>
          <HeaderTitle href="/">App Title</HeaderTitle>

          <HeaderButton href="https://kreftforeningen.no" variant="outline">
            Til Kreftforeningen <ArrowRightIcon />
          </HeaderButton>

          <HeaderMenu>
            <HeaderMenuTrigger>
              <Button variant="default" data-slot="header-button">
                <span className="app-hidden-mobile">Menu</span> <MenuIcon />
              </Button>
            </HeaderMenuTrigger>
            <HeaderMenuContent>
              <HeaderSearch />
              <HeaderMenuList>
                <HeaderMenuListItem href="#">
                  <UserIcon /> Profil
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <Cog /> Konto
                </HeaderMenuListItem>
              </HeaderMenuList>
              <HeaderMenuList>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Personvern
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Avtaler
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Donasjoner
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ChevronRightIcon />
                  Grupper
                </HeaderMenuListItem>
              </HeaderMenuList>
              <HeaderMenuList>
                <HeaderMenuListItem href="#">
                  <HeartIcon />
                  Støtt oss
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <ShoppingBasketIcon />
                  Nettbutikk
                </HeaderMenuListItem>
                <HeaderMenuListItem href="#">
                  <img
                    src="/assets/logo-symbol.svg"
                    alt="Kreftforeningen"
                    className="app-icon-medium"
                  />
                  Kreftforeningen
                </HeaderMenuListItem>
              </HeaderMenuList>

              <HeaderMenuFooter>
                <ModeToggle
                  align="start"
                  variant="outline"
                  size="default"
                ></ModeToggle>
              </HeaderMenuFooter>
            </HeaderMenuContent>
          </HeaderMenu>
        </HeaderWrapper>
      </div>

      <main className="app-main-section">
        <h2 id="hover-card">Hover Card</h2>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="app-inline-justify">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="app-column-gap-xs">
                <h4 className="app-text-semibold">@nextjs</h4>
                <p className="app-text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="app-muted-text-xs">Joined December 2021</div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <h2 id="infographic">Infographic</h2>
        <Infographic>
          {infographicItems.map((item) => (
            <InfographicItem key={item.id} color="blue">
              <InfographicItemIcon>
                <ServerIcon strokeWidth={1} />
              </InfographicItemIcon>
              <InfographicItemTitle>
                <InfographicItemTitleNumber>
                  {item.titleNumber}
                </InfographicItemTitleNumber>
                <InfographicItemTitleText>
                  {item.titleText}
                </InfographicItemTitleText>
              </InfographicItemTitle>
              <InfographicItemDescription>
                {item.description}
              </InfographicItemDescription>
            </InfographicItem>
          ))}
        </Infographic>

        <h2 id="input-label">Input + Label</h2>
        <div className="app-button-row">
          <Label>Input</Label>
          <Input />
        </div>

        <h2 id="input-group">Input Group</h2>
        <div className="app-form-grid">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="example.com" />
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton size="icon-xs">
                    <InfoIcon />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>This is content in a tooltip.</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupTextarea placeholder="Ask, Search or Chat..." />
            <InputGroupAddon align="block-end">
              <InputGroupButton variant="outline" size="icon-xs">
                <PlusIcon />
              </InputGroupButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <InputGroupButton variant="ghost">Auto</InputGroupButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" align="start">
                  <DropdownMenuItem>Auto</DropdownMenuItem>
                  <DropdownMenuItem>Agent</DropdownMenuItem>
                  <DropdownMenuItem>Manual</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <InputGroupText>52% used</InputGroupText>
              <Separator orientation="vertical" />
              <InputGroupButton variant="default" size="icon-xs" disabled>
                <ArrowUpIcon />
                <span className="app-sr-only">Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="@shadcn" />
            <InputGroupAddon align="inline-end">
              <div className="app-status-indicator">
                <CheckIcon />
              </div>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <h2 id="input-otp">Input OTP</h2>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <h2 id="item">Item</h2>
        <div className="app-feature-list">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Basic Item</ItemTitle>
              <ItemDescription>
                A simple item with title and description.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline" size="sm" asChild>
            <a href="#">
              <ItemMedia>
                <BadgeCheckIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Your profile has been verified.</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon />
              </ItemActions>
            </a>
          </Item>
        </div>
        <div className="app-feature-list-compact">
          <ItemGroup>
            {music.map((song) => (
              <Item key={song.title} variant="outline" asChild role="listitem">
                <a href="#">
                  <ItemMedia variant="image">
                    <img
                      src={`https://avatar.vercel.sh/${song.title}`}
                      alt={song.title}
                      width={32}
                      height={32}
                      className="app-media-muted"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>
                      {song.title} -{" "}
                      <span className="app-muted-text">{song.album}</span>
                    </ItemTitle>
                    <ItemDescription>{song.artist}</ItemDescription>
                  </ItemContent>
                  <ItemContent>
                    <ItemDescription>{song.duration}</ItemDescription>
                  </ItemContent>
                </a>
              </Item>
            ))}
          </ItemGroup>
        </div>

        <h2 id="kbd">Kbd</h2>
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

        <h2 id="link-list">Link List</h2>
        <LinkList>
          {linklistItems.map((item) => (
            <LinkListItem key={item.id} href={item.url}>
              <LinkListTitle>{item.title}</LinkListTitle>
              <LinkListDescription>{item.content}</LinkListDescription>
            </LinkListItem>
          ))}
        </LinkList>

        <h2 id="menubar">Menubar</h2>
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
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Checkbox id="always-show-bookmarks-bar" />
                <Label htmlFor="always-show-bookmarks-bar">
                  Always Show Bookmarks Bar
                </Label>
              </MenubarItem>
              <MenubarItem>
                <Checkbox id="always-show-full-urls" checked />
                <Label htmlFor="always-show-full-urls">
                  Always Show Full URLs
                </Label>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <RadioGroup value="benoit">
                <MenubarItem>
                  <RadioGroupItem value="andy" />
                  <Label htmlFor="andy">Andy</Label>
                </MenubarItem>
                <MenubarItem>
                  <RadioGroupItem value="benoit" />
                  <Label htmlFor="benoit">Benoit</Label>
                </MenubarItem>
                <MenubarItem>
                  <RadioGroupItem value="Luis" />
                  <Label htmlFor="Luis">Luis</Label>
                </MenubarItem>
              </RadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <h2 id="native-select">Native Select</h2>
        <NativeSelect>
          <NativeSelectOption value="">Select status</NativeSelectOption>
          <NativeSelectOption value="todo">Todo</NativeSelectOption>
          <NativeSelectOption value="in-progress">
            In Progress
          </NativeSelectOption>
          <NativeSelectOption value="done">Done</NativeSelectOption>
          <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
        </NativeSelect>

        <h2 id="navigation-menu">Navigation Menu (Do not use yet)</h2>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#">Link</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="app-menu-grid">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#" className="app-inline-row-gap">
                        <CircleHelp />
                        Backlog
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#" className="app-inline-row-gap">
                        <CircleAlert />
                        To Do
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#" className="app-inline-row-gap">
                        <CircleCheck />
                        Done
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <h2 id="pagination">Pagination</h2>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <h2 id="person">Person</h2>
        <Person>
          {personItems.map((item) => (
            <PersonItem key={item.id}>
              <PersonItemImage
                src={item.image}
                alt={`${item.firstName} ${item.lastName}`}
                fallback={`${item.firstName.charAt(0)}${item.lastName.charAt(
                  0
                )}`}
              />
              <PersonItemContent>
                <PersonItemName>
                  {item.firstName} {item.lastName}
                </PersonItemName>
                <PersonItemTitle>{item.title}</PersonItemTitle>
                <PersonItemEmail href={`mailto:${item.email}`}>
                  {item.email}
                </PersonItemEmail>
                <PersonItemPhone href={`tel:${item.phone}`}>
                  {item.phone}
                </PersonItemPhone>
                <PersonItemDescription>
                  {item.description}
                </PersonItemDescription>
              </PersonItemContent>
            </PersonItem>
          ))}
        </Person>

        <h2 id="popover">Popover</h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

        <h2 id="progress">Progress</h2>
        <Progress value={50} />

        <h2 id="radio-group">Radio Group</h2>
        <RadioGroup defaultValue="option-one">
          <div className="app-inline-space">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="app-inline-space">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>

        <h2 id="resizable">Resizable</h2>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="app-panel-centered">
              <span className="app-font-semibold">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="app-panel-centered">
              <span className="app-font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        <h2 id="scroll-area">Scroll Area</h2>
        <ScrollArea>
          <div className="app-padding-md">
            <h4 className="app-list-heading">Tags</h4>
            {tags.map((tag) => (
              <React.Fragment key={tag}>
                <div className="app-text-sm">{tag}</div>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>

        <h2 id="select">Select</h2>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>

        <h2 id="separator">Separator</h2>
        <Separator />

        <h2 id="sheet">Sheet</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="app-dashboard-grid">
              <div className="app-grid-gap-md">
                <Label htmlFor="sheet-demo-name">Name</Label>
                <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="app-grid-gap-md">
                <Label htmlFor="sheet-demo-username">Username</Label>
                <Input id="sheet-demo-username" defaultValue="@peduarte" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <h2 id="skeleton">Skeleton</h2>
        <div className="app-inline-space-lg">
          <Skeleton />
          <div className="app-column-gap-sm">
            <Skeleton />
            <Skeleton />
          </div>
        </div>

        <h2 id="slider">Slider</h2>
        <Slider defaultValue={[33]} max={100} step={1} />

        <h2 id="sonner">Sonner</h2>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            })
          }
        >
          Show Toast
        </Button>

        <h2 id="spinner">Spinner</h2>
        <div className="app-centered-column-lg">
          <Button disabled size="sm">
            <Spinner />
            Loading...
          </Button>
          <Spinner />
          <Spinner />
          <Spinner />
        </div>

        <h2 id="switch">Switch</h2>
        <Switch />

        <h2 id="table">Table</h2>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h2 id="tabs">Tabs</h2>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="delete">Delete</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="delete">Delete your account here.</TabsContent>
        </Tabs>

        <h2 id="textarea">Textarea</h2>
        <Textarea />

        <h2 id="toggle">Toggle</h2>
        <Toggle variant="outline">Toggle</Toggle>

        <h2 id="toggle-group">Toggle Group</h2>
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
          <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>

        <h2 id="tooltip">Tooltip</h2>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </main>
    </>
  );
}
