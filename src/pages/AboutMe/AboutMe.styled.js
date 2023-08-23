import styled from "styled-components";

export const TitleIsHidden = styled.h2`
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
    @media screen and (max-width:999px) {
        position: relative;
        width: auto;
        height: auto;
        color: #FFF;
        overflow: auto;
        clip: auto;
        clip-path: none;
        margin: 0;

        padding: 21px 0 21px 27px;
font-size: 14px;
font-weight: 450;
line-height: 1.4;
    }
`;

export const Section = styled.section`
display: flex;
color: #607B96;
flex-grow: 1;
@media screen and (max-width:999px) {
    display: block;
    }
`;

export const OutletBox = styled.div`
flex-grow: 1;
display: flex;
`;