import {
  AspectRatio,
  Badge,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/main";
import { ArrowRight } from "lucide-react";

export default function CardDemo() {
  return (
    <>
      <h2>Card</h2>
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
    </>
  );
}

