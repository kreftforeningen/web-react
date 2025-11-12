import { CardImage } from "@/card";
import {
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
          <CardImage
            ratio={16 / 10}
            alt="In About Five Minutes I'll Be There"
            title="In About Five Minutes I'll Be There"
            sizes="(min-width: 1024px) 310px, (min-width: 768px) 220px, (min-width: 640px) 290px, 100vw"
            src300="https://picsum.photos/id/241/300/169"
            src500="https://picsum.photos/id/241/500/281"
            src780="https://picsum.photos/id/241/780/439"
          />
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
