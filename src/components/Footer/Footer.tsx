import {StyledFooter, Wrapper, WrapperBottom} from "@/components/Footer/Footer.style";
import LogoDark from "../../assets/images/logo-dark.svg";
import Logo from "@/components/Logo";
import FooterAnchors from "@/components/Footer/FooterAnchors";
import SocialMediaIcons from "@/components/Footer/SocialMediaIcons";
import AccessButton from "@/components/Button/AccessButton";
import {WidthWrapper} from "@/styled-components/MaxWidth.style";

function Footer({isDashboard = false}: { isDashboard?: boolean }) {
    return (
        <StyledFooter>
            <WidthWrapper>
                {!isDashboard ? (
                        <>
                            <Wrapper>
                                <Logo src={LogoDark}/>
                                <AccessButton/>
                            </Wrapper>
                        </>
                    )
                    :
                    <Logo src={LogoDark}/>
                }
                {!isDashboard && (
                    <FooterAnchors/>
                )}
                <hr/>
                <WrapperBottom>
                    <SocialMediaIcons/>
                    <p>© Easybank 2024. Todos os direitos reservados.</p>
                </WrapperBottom>

            </WidthWrapper>
        </StyledFooter>
    )
        ;
}

export default Footer;
