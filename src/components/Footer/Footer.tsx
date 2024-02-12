"use client";
import { StyledFooter } from "@/components/Footer/Footer.style";
import LogoDark from "../../assets/images/logo-dark.svg";
import Logo from "@/components/Logo";
import FooterAnchors from "@/components/Footer/FooterAnchors";
import SocialMediaIcons from "@/components/Footer/SocialMediaIcons";
import AccessButton from "@/components/Button/AccessButton";

function Footer() {
  return (
    <StyledFooter>
      <Logo src={LogoDark} />
      <SocialMediaIcons />

      <FooterAnchors />
      <AccessButton />
      <p>© Easybank 2024. Todos os direitos reservados.</p>
    </StyledFooter>
  );
}

export default Footer;
