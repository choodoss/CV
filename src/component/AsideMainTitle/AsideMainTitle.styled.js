import styled, { keyframes } from "styled-components";

export const Title = styled.div`
color: #FFF;
font-weight: 400;
border-bottom: 1px solid #1E2D3D;
display: flex;
align-items: center;
padding:10px 0;
padding-left:16px;
@media screen and (max-width:999px) {
    border-bottom: none;
background-color: #1E2D3D;
padding:5px 0;
padding-left:27px;
margin-bottom:3px;
    }
`;
const openMenu = keyframes`
    0% {
        transform: rotate(0deg);
        opacity:0;
    }
    100% {
        transform: rotate(-90deg);
        opacity:1;
    }
`;

const closeMenu = keyframes`
    0% {
        transform: rotate(-90deg);
        opacity:0;
    }
    100% {
      opacity:1;
        transform: rotate(0deg);
    }
`;

export const AnimationIcon = styled.div`
display:flex;
align-items: center;
margin-right: 10px;
transform: rotate(90deg);

@media screen and (max-width:999px) {
    margin-right: 12px;
        svg {
        transition: transform 0.4s ease;
    }

    &.open svg {
        animation: ${openMenu} 0.4s ease forwards;
    }

    &.close svg {
        animation: ${closeMenu} 0.4s ease forwards;
    }

}
`;

