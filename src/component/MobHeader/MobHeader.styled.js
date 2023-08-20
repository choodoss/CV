import styled, { keyframes } from "styled-components";

export const Container = styled.div`
display:none;
  @media screen and (max-width:481px) {
    height:56px;
    width:100%;

    display:flex;
    justify-content: space-between;
    align-items:center;

    padding: 0 18px;
    }
`;
export const Author = styled.span`
  @media screen and (max-width:481px) {
    color: #607B96;
    font-size: 16px;
    font-weight: 450;
    }
`;
export const MobMenuButton = styled.button`
  @media screen and (max-width:481px) {
background-color:inherit;
color:#fff;
    }
`;

const rotateHamburger = keyframes`
    0% {
        transform: rotate(90deg);
        opacity:0;
    }
    100% {
        transform: rotate(180deg);
        opacity:1;
    }
`;

const rotateCross = keyframes`
    0% {
        transform: rotate(90deg);
        opacity:0;
    }
    100% {
      opacity:1;
        transform: rotate(180deg);
    }
`;

export const AnimatedIcon = styled.div`
    svg {
        transition: transform 0.4s ease;
    }

    &.hamburger svg {
        animation: ${rotateHamburger} 0.4s ease forwards;
    }

    &.cross svg {
        animation: ${rotateCross} 0.4s ease forwards;
    }
`;