import { Outlet } from "react-router-dom";
import { BoxWindow, Header, LinkItem, LinkList, LinkName, LinkPage, Nav, Main } from "./CvLayout.styled";
import Footer from "../Foooter/Footer";
import { Suspense } from "react";

const CvLayout = () => {
    return (
        <>
            <BoxWindow>
                <Header>
                    <Nav>
                        <LinkList>
                            <LinkItem><LinkName to='/' end="true">dmytro-khomenko</LinkName></LinkItem>
                            <LinkItem><LinkPage to='/'>_hello</LinkPage></LinkItem>
                            <LinkItem><LinkPage to='/about-me'>_about-me</LinkPage></LinkItem>
                            <LinkItem><LinkPage to='/projects'>_projects</LinkPage></LinkItem>
                            <LinkItem><LinkPage to='/contact-me'>_contact-me</LinkPage></LinkItem>
                        </LinkList>
                    </Nav>
                </Header>
                <Main>
                    <Suspense >
                        <Outlet />
                    </Suspense>
                </Main>
                <Footer />
            </BoxWindow >
        </>
    );
};

export default CvLayout;