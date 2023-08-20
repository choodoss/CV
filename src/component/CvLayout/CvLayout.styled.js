import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BoxWindow = styled.div`
max-width: 1782px;
padding: 5lvh;
margin:0 auto;

@media screen and (max-width:481px) {
    padding: 2lvh;
    max-width: 480px;
    }
`;

export const Container = styled.div`
border-radius: 0.6rem;
border: 1px solid #1E2D3D;
background-color: #011627;
height: 90lvh;
display: flex;
flex-direction: column;
@media screen and (max-width:481px) {
    height: auto;
    }

`;

export const Header = styled.header`
border-bottom: 1px solid #1E2D3D;
`;

export const Nav = styled.nav`
display:flex;
align-items: center;
`;

export const LinkList = styled.ul`
display:flex;
width:100%;
@media screen and (max-width:481px) {
display:none;//
    }
`;
export const LinkItem = styled.li`
border-left: 1px solid #1e2d3d;

&:first-child {
  border-left: none;
  width:311px;
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
  font-weight: 450;
  padding: 12.5px 32px;

  transition: color 250ms ease-in-out;
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    height: 2px;
    width: 100%;
    transform: scaleX(0%);
    transform-origin: center;
    z-index: 999;
    border-radius: 2px;
    background-color: #fea55f;
    opacity: 0;
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
  &.active{
      color: #fff;
      &::after {
      opacity: 1;
      transform: scaleX(100%);
    }
    }
`;

export const LinkName = styled(LinkPage)`

`;

export const Main = styled.main`
position:relative;
  flex: 1 1 auto;
  max-height: 100%;
  background-color: #011627;
  display: flex;
  overflow: hidden;

  @media screen and (max-width:481px) {
    /* max-height: auto; */
    }
`;
