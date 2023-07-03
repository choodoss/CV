import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.li`
color: ${props => (props.isActive ? "#fff" : "inherit")};
font-weight: 400;
display: flex;
align-items: center;
padding-left: 16px;
`;
export const TitleLInk = styled(NavLink)`
color: inherit
`;


export const FolderIcon = styled.span`
margin-right: 9px;
color: ${(props) => {
        if (props.color === 'orange') return '#E99287';
        if (props.color === 'violet') return '#3A49A4';
        if (props.color === 'green') return '#43D9AD';
        if (props.color === 'blue') return '#3E91A8';
        return '#E99287';
    }};
`;

export const ArrowIcon = styled.span`
margin-right: 14px;
transform: ${props => (props.isActive ? 'rotate(90deg)' : 'none')};;
`;

