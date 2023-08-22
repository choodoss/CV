import styled from "styled-components";

export const TitleMenuList = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;

padding-top: 16px;
padding-bottom: 16px;
padding-left: 14px;

transition: opacity 300ms ease-in-out;

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