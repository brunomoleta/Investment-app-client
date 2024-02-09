"use client";
import { StyledFooter } from "@/components/Footer/Footer.style";
import LogoDark from "../../assets/images/logo-dark.svg";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import FooterAnchors from "@/components/Footer/FooterAnchors";
import SocialMediaIcons from "@/components/Footer/SocialMediaIcons";

function Footer() {
  return (
    <StyledFooter>
      <Logo src={LogoDark} />
      <SocialMediaIcons />

      <FooterAnchors />
      <Button href={"/investor"} content="entrar" />
      <p>© Easybank 2024. Todos os direitos reservados.</p>
    </StyledFooter>
  );
}

export default Footer;
