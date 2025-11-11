import { Avatar, AvatarFallback, AvatarImage } from "@/lib/main";

export default function AvatarDemo() {
  return (
    <>
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
            <AvatarImage src="https://robohash.org/AB?set=set4" alt="@shadcn" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://robohash.org/LR?set=set4" alt="@leerob" />
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
    </>
  );
}
