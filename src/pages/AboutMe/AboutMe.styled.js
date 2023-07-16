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
`;

export const Section = styled.section`
display: flex;
color: #607B96;
flex-grow: 1;
`;

export const TitleActive = styled.li`
color: #FFF;
font-weight: 400;
border-bottom: 1px solid #1E2D3D;
display: flex;
align-items: center;
padding:10px 0;
padding-left:14px;
`;

export const Aside = styled.aside`
flex-basis:311px;
flex-shrink: 0;
`;

export const TitleMenuList = styled.ul`
padding-left:16px;
`;
export const OutletBox = styled.div`
flex-grow: 1;
display: flex;
`;

export const Box = styled.div`
flex-basis: calc((100%) / 2);
border-left: 1px solid #1E2D3D;
overflow: hidden;
`;