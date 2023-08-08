import { PiFolderNotchFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { Title1, Title2, ArrowIcon, FolderIcon, TitleElement } from "./TitleMenu.styled";
import { useLocation } from "react-router-dom";
// import AnimatedOutlet from "../AnimatedOutlet/AnimatedOutlet";

const TitleMenu = ({ color, title }) => {
    const [isActive, setIsActive] = useState(false);
    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname.includes(`/about-me/${title}`)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [pathname, title])

    return (
        <li>
            {isActive ? (
                <Title1 to={title} >
                    <ArrowIcon><MdKeyboardArrowRight style={{ fontSize: "14px" }} /></ArrowIcon>
                    <FolderIcon color={color}><PiFolderNotchFill style={{ fontSize: "14px" }} /></FolderIcon>
                    <TitleElement >{title}</TitleElement>
                </Title1>
            ) :
                <Title2 to={title}>
                    <ArrowIcon><MdKeyboardArrowRight style={{ fontSize: "14px" }} /></ArrowIcon>
                    <FolderIcon color={color}><PiFolderNotchFill style={{ fontSize: "14px" }} /></FolderIcon>
                    <TitleElement >{title}</TitleElement>
                </Title2>}
            {/* {isActive && (
                <AnimatedOutlet />
            )} */}
        </li>
    );
};

export default TitleMenu;