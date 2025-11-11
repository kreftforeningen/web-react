import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/lib/main";

export default function HoverCardDemo() {
  return (
    <>
      <h2>Hover Card</h2>
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
    </>
  );
}

