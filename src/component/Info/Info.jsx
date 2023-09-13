import TitleMenu from "../TitleMenu/TitleMenu";
import AsideMainTitle from "../AsideMainTitle/AsideMainTitle";
import { TitleMenuList } from "./Info.styled";
import { useState } from "react";

const Info = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const hendleOpenSubMenu = () => {
        setOpenMenu(prev => !prev);
    };

    return (<>
        <AsideMainTitle hendleOpenSubMenu={hendleOpenSubMenu} open={openMenu} text={'info'} />
        <TitleMenuList className={openMenu ? "open" : "close"}>
            <TitleMenu color={'orange'} title={'bio'} />
            <TitleMenu color={'green'} title={'interests'} />
            <TitleMenu color={'blue'} title={'education'} />
            <TitleMenu color={'violet'} title={'experience'} />
        </TitleMenuList>
    </>

    )
};

export default Info;



