import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BoxWindow = styled.header`
max-width: 1782px;
padding: 69px;
margin:0 auto;
height: 100lvh;

`;

export const Header = styled.header`
  border-radius: 8px 8px 0 0;
  border: 1px solid #1E2D3D;
  background: #011627;
`;
export const Nav = styled.nav`
display:flex;
align-items: center;
`;

export const LinkList = styled.ul`
display:flex;
width:100%;

`;
export const LinkItem = styled.li`
border-left: 1px solid #1e2d3d;

&:first-child {
  border-left: none;
  }
&:last-child {
    margin-left: auto;
  }

  &:nth-child(4) {
    border-right: 1px solid #1e2d3d;
  }
`;

export const LinkPage = styled(NavLink)`
  position: relative;
  display: block;
  color: #607b96;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  padding: 12.5px 32px;
  transition: color 250ms ease-in-out;
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    height: 2px;
    width: 101%;
    transform: scaleX(0%);
    transform-origin: center;
    z-index: 999;
    border-radius: 2px;
    background-color: #fea55f;
    opacity: 1;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    color: #fff;
    
    &::after {
      opacity: 1;
      transform: scaleX(100%);
    }
  }
`;

export const LinkName = styled(LinkPage)`
  width: 320px;
`;