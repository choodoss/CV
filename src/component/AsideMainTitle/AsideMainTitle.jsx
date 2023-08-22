import { GoTriangleRight } from "react-icons/go";
import { Title, AnimationIcon } from "./AsideMainTitle.styled";

const AsideMainTitle = ({ text, hendleOpenSubMenu, open }) => {

    return (
        <Title onClick={hendleOpenSubMenu} ><AnimationIcon className={open ? "open" : "close"}><GoTriangleRight /></AnimationIcon><span>{text}</span></Title>
    );
};

export default AsideMainTitle;