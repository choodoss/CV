import { Outlet, useParams } from "react-router-dom";
import { BoxWindow, Header, LinkItem, LinkList, LinkName, LinkPage, Nav, Main, MobHeader, Author, MobMenuButton, Container } from "./CvLayout.styled";
import Footer from "../Foooter/Footer";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const CvLayout = () => {
    const [isMobMenu, setIsMobMenu] = useState(false)
    const params = useParams()
    console.log(params)
    const hendleOpenMobMenu = () => {
        setIsMobMenu(prevValue => !prevValue)
        console.log("open")
    }

    const mobwidth = document.documentElement.clientWidth
    console.log(mobwidth)
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
                            <MobHeader>
                                <Author>dmytro-khomenko</Author><MobMenuButton onClick={hendleOpenMobMenu} type="button"><RxHamburgerMenu style={{ fontSize: "18px" }} /></MobMenuButton>
                            </MobHeader>
                        </Nav>
                    </Header>
                    <Main>
                        <Outlet />
                    </Main>
                    {mobwidth >= 481 && <Footer />}
                </Container>
            </BoxWindow >
        </>
    );
};

export default CvLayout;

