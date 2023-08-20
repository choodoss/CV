import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Container, Author, MobMenuButton, AnimatedIcon } from "./MobHeader.styled";

const MobHeader = ({ openMenu, isMobMenu }) => {

    return (
        <Container>
            <Author>dmytro-khomenko</Author>
            <MobMenuButton onClick={openMenu} type="button">
                <AnimatedIcon className={isMobMenu ? "cross" : "hamburger"}>
                    {isMobMenu ? <RxCross1 style={{ fontSize: "24px" }} /> : <RxHamburgerMenu style={{ fontSize: "24px" }} />}
                </AnimatedIcon>
            </MobMenuButton>
        </Container>
    );
};

export default MobHeader;

