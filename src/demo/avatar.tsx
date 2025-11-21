import { Avatar, AvatarFallback, AvatarImage, Page, VStack } from "@/lib/main";

export default function AvatarDemo() {
  return (
    <Page.Block width="3xl" gutters>
      <h2>Avatar</h2>
      <VStack>
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

        <Avatar onClick={function PI() {}}>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </VStack>
    </Page.Block>
  );
}
