import styled from "styled-components";

export const Container = styled.div`

`;

export const List = styled.ul`
padding-top:18px;
padding-left:14px;
padding-right:14px;
padding-bottom:26px;

display: flex;
flex-direction: column;
gap:9px;

@media screen and (max-width: 768px) {
    padding-left: 27px;
  &.close {
    animation: none;
    pointer-events: none;
    position: absolute;
    opacity:0;
    transform: translateX(-150%);
  }

  &.open {
    pointer-events: all;
    position: relative;
    opacity:1;
    transform: translateX(0%);
    transition: transform 250ms ease-in-out;
  }
}
`;

export const Item = styled.li`

`;

export const LinkItem = styled.a`
display: flex;
gap:9px;
align-items:center;

color: #607B96;
font-size: 16px;
font-weight: 400;
line-height: normal;
transition: color 250ms ease-in-out;

&:hover,&:focus{
    color: #fff;
    outline:none;
}
`;