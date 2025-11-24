import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  Page,
  Separator,
  VStack,
} from "@/lib/main";
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";

const songs = [
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

export default function ItemDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2 className="margin">Item</h2>
      <VStack gap={8}>
        <VStack gap={4}>
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
        </VStack>
        <VStack gap={4}>
          <ItemGroup>
            {songs.map((song) => (
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
        </VStack>
      </VStack>
    </Page.Block>
  );
}
