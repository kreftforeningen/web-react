import {
  Button,
  HeaderButton,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuContent,
  HeaderMenuFooter,
  HeaderMenuList,
  HeaderMenuListItem,
  HeaderMenuTrigger,
  HeaderSearch,
  HeaderTitle,
  HeaderWrapper,
  ModeToggle,
} from "@/lib/main";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  Cog,
  GlobeIcon,
  HeartIcon,
  MenuIcon,
  ShoppingBasketIcon,
  UserIcon,
} from "lucide-react";

export default function HeaderDemo() {
  return (
    <>
      <h2>Header</h2>
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
                {[
                  "Om kreft",
                  "Råd og rettigheter",
                  "Tilbud og aktiviteter",
                  "Forebygge kreft",
                ].map((label) => (
                  <HeaderMenuListItem href="#" key={label}>
                    <ChevronRightIcon />
                    {label}
                  </HeaderMenuListItem>
                ))}
              </HeaderMenuList>
              <HeaderMenuList>
                {[
                  "Støtt kreftsaken",
                  "Engasjer deg",
                  "Kreftforskning",
                  "Om oss",
                  "Kontakt oss",
                  "Aktuelt",
                ].map((label) => (
                  <HeaderMenuListItem href="#" key={label}>
                    <ChevronRightIcon />
                    {label}
                  </HeaderMenuListItem>
                ))}
              </HeaderMenuList>
              <HeaderMenuFooter>
                <ModeToggle align="start" variant="outline" size="default" />
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
                {["Personvern", "Avtaler", "Donasjoner", "Grupper"].map(
                  (label) => (
                    <HeaderMenuListItem href="#" key={label}>
                      <ChevronRightIcon />
                      {label}
                    </HeaderMenuListItem>
                  )
                )}
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
                <ModeToggle align="start" variant="outline" size="default" />
              </HeaderMenuFooter>
            </HeaderMenuContent>
          </HeaderMenu>
        </HeaderWrapper>
      </div>
    </>
  );
}
