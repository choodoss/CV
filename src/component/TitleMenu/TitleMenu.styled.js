import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ArrowIcon = styled.span`
  margin-right: 14px;
  transform: rotate(90deg);
`
export const Title1 = styled(NavLink)`
font-weight: 400;
display: flex;
align-items: center;
color: #fff;
`;

export const Title2 = styled(NavLink)`
color: inherit;
font-weight: 400;
display: flex;
align-items: center;
transition: color 250ms ease-in-out;
&:hover,&:focus{
  color:#fff
}

${ArrowIcon}{
    transform: none; 
}`;



export const TitleElement = styled.span`
color: inherit
`;


export const FolderIcon = styled.span`
margin-right: 9px;
color: ${({ color }) => {
    if (color === 'orange') return '#E99287';
    if (color === 'violet') return '#3A49A4';
    if (color === 'green') return '#43D9AD';
    if (color === 'blue') return '#3E91A8';
    return '#E99287';
  }};
`;

