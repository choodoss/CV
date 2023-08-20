import { Outlet, useLocation } from "react-router-dom";
import { BoxWindow, Header, LinkItem, LinkList, LinkName, LinkPage, Nav, Main, Container } from "./CvLayout.styled";
import Footer from "../Foooter/Footer";
import { useState } from "react";
import MobMenu from "../MobMenu/MobMenu";
import MobHeader from "../MobHeader/MobHeader";

const CvLayout = () => {
    const [isMobMenu, setIsMobMenu] = useState(false)
    const location = useLocation();

    const hendleOpenMobMenu = () => {
        setIsMobMenu(prevValue => !prevValue)
    }

    const userWidth = document.documentElement.clientWidth;
    const isHomePage = location.pathname === "/";
    const isMobileDevice = userWidth <= 481;

    return (
        <>
            <BoxWindow>
                <Container>
                    <Header>
                        <Nav>
                            <LinkList>
                                <LinkItem><LinkName to="/">dmytro-khomenko</LinkName></LinkItem>
                                <LinkItem><LinkPage to="/">_hello</LinkPage></LinkItem>
                                <LinkItem><LinkPage to='/about-me'>_about-me</LinkPage></LinkItem>
                                <LinkItem><LinkPage to='/projects'>_projects</LinkPage></LinkItem>
                                <LinkItem><LinkPage to='/contact-me'>_contact-me</LinkPage></LinkItem>
                            </LinkList>
                            <MobHeader isMobMenu={isMobMenu} openMenu={hendleOpenMobMenu} />
                        </Nav>
                    </Header>
                    {isMobMenu && <MobMenu closeMenu={hendleOpenMobMenu} />}
                    {isMobMenu ? null : <Main>
                        <Outlet />
                    </Main >}
                    {(isHomePage && isMobileDevice || isMobMenu) ? null : <Footer />}
                </Container>
            </BoxWindow >
        </>
    );
};

export default CvLayout;

