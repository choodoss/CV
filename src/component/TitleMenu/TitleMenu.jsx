import { PiFolderNotchFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Suspense, useState } from "react";
import { Title, ArrowIcon, FolderIcon, TitleLInk } from "./TitleMenu.styled";
import { Outlet } from "react-router-dom";

const TitleMenu = ({ color, title, active = false }) => {
    const [isActive, setIsActive] = useState(active ?? 'true')

    const hendleOpenMenu = () => {
        setIsActive(prev => !prev)
    }

    return (<>
        <Title onClick={hendleOpenMenu} isActive={isActive}><ArrowIcon isActive={isActive}><MdKeyboardArrowRight style={{ fontSize: "14px" }} /></ArrowIcon><FolderIcon color={color}><PiFolderNotchFill style={{ fontSize: "14px" }} /></FolderIcon> <TitleLInk to={title}>{title}</TitleLInk>
            {isActive && <Suspense >
                <Outlet />
            </Suspense>}
        </Title>
    </>)
};

export default TitleMenu;