import { Badge } from "@/lib/main";
import { CircleCheck } from "lucide-react";

export default function BadgeDemo() {
  return (
    <>
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
    </>
  );
}

