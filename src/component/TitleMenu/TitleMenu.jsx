import { PiFolderNotchFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Title, ArrowIcon, FolderIcon, TitleElement } from "./TitleMenu.styled";

const TitleMenu = ({ color, title }) => {

    return (
        <li>
            <Title to={title} >
                <ArrowIcon><MdKeyboardArrowRight style={{ fontSize: "14px" }} /></ArrowIcon>
                <FolderIcon color={color}><PiFolderNotchFill style={{ fontSize: "14px" }} /></FolderIcon>
                <TitleElement >{title}</TitleElement>
            </Title>
        </li>)

};

export default TitleMenu;

