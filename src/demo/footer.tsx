import {
  Button,
  FooterActions,
  FooterContact,
  FooterContactItem,
  FooterCopyright,
  FooterNavigation,
  FooterNavigationItem,
  FooterNavigationLink,
  FooterSocial,
  FooterWrapper,
} from "@/lib/main";
import {
  HandCoins,
  HeartIcon,
  Map,
  MessageCircle,
  Phone,
  ShoppingBasketIcon,
  MailIcon,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function FooterDemo() {
  return (
    <>
      <h2>Footer</h2>
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
          {[
            "Kontonummer",
            "SMS",
            "Har vi forsøkt å ringe deg?",
            "Nyhetsbrev",
            "Aktuelt",
            "Presse",
            "Skattefradrag",
            "Bli medlem",
            "Gi en gave",
            "Bli frivillig",
            "Min side",
            "Om oss",
            "Bestill brosjyrer",
            "Personvern",
            "Informasjonskapsler",
            "Ledige stillinger",
          ].map((label) => (
            <FooterNavigationItem key={label}>
              <FooterNavigationLink href="/">{label}</FooterNavigationLink>
            </FooterNavigationItem>
          ))}
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
            <MailIcon />
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
    </>
  );
}
