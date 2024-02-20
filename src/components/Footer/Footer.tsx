import { Info, StyledFooter, Wrapper } from "@/components/Footer/Footer.style";
import LogoDark from "../../assets/images/logo-dark.svg";
import Logo from "@/components/Logo";
import FooterAnchors from "@/components/Footer/FooterAnchors";
import SocialMediaIcons from "@/components/Footer/SocialMediaIcons";
import AccessButton from "@/components/Button/AccessButton";

function Footer({ isDashboard = false }: { isDashboard?: boolean }) {
  return (
    <StyledFooter>
      <Wrapper>
        <Info>
          <Logo src={LogoDark} />
          <SocialMediaIcons />
        </Info>
        {!isDashboard && (
          <>
            <FooterAnchors />
            <AccessButton />
          </>
        )}
        <p>© Easybank 2024. Todos os direitos reservados.</p>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
