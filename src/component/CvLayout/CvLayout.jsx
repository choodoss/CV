import { Outlet } from "react-router-dom";
import { BoxWindow, Header, LinkItem, LinkList, LinkName, LinkPage, Nav, Main } from "./CvLayout.styled";
import Footer from "../Foooter/Footer";

const CvLayout = () => {

    return (
        <>
            <BoxWindow>
                <Header>
                    <Nav>
                        <LinkList>
                            <LinkItem><LinkName to='/'>dmytro-khomenko</LinkName></LinkItem>
                            <LinkItem><LinkPage to='/'>_hello</LinkPage></LinkItem>
                            <LinkItem><LinkPage to='/about-me'>_about-me</LinkPage></LinkItem>
                            <LinkItem><LinkPage to='/projects'>_projects</LinkPage></LinkItem>
                            <LinkItem><LinkPage to='/contact-me'>_contact-me</LinkPage></LinkItem>
                        </LinkList>
                    </Nav>
                </Header>
                <Main>
                    {/* <Suspense fallback={<Loader isLoad={true} />}> */}
                    {/* <Loader /> */}
                    <Outlet />
                    {/* </Suspense> */}
                </Main>
                <Footer />
            </BoxWindow>
        </>
    );
};

export default CvLayout;