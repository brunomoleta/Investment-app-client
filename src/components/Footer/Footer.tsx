import {
  StyledFooter,
  Wrapper,
  WrapperBottom,
} from "@/components/Footer/Footer.style";
import LogoDark from "../../assets/images/logo-dark.svg";
import Logo from "@/components/Logo";
import FooterAnchors from "@/components/Footer/FooterAnchors";
import SocialMediaIcons from "@/components/Footer/SocialMediaIcons";
import AccessButton from "@/components/Button/AccessButton";
import { WidthWrapper } from "@/styled-components/MaxWidth.style";
import { footerRights } from "@/services/data";

function Footer({ isDashboard = false }: { isDashboard?: boolean }) {
  function renderFooterItems() {
    if (!isDashboard) {
      return (
        <>
          <Wrapper>
            <Logo src={LogoDark} />
            <AccessButton />
          </Wrapper>
        </>
      );
    }
    return <Logo src={LogoDark} />;
  }

  return (
    <StyledFooter>
      <WidthWrapper>
        {renderFooterItems()}
        {!isDashboard && <FooterAnchors />}
        <hr />
        <WrapperBottom>
          <SocialMediaIcons />
          <p>{footerRights}</p>
        </WrapperBottom>
      </WidthWrapper>
    </StyledFooter>
  );
}

export default Footer;
