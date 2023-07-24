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

export const TitleActive = styled.p`
color: #FFF;
font-weight: 400;
border-bottom: 1px solid #1E2D3D;
display: flex;
align-items: center;
padding:10px 0;
padding-left:14px;
`;

export const TitleContact = styled(TitleActive)`
border-top: 1px solid #1E2D3D;
`;

export const Aside = styled.aside`
flex-basis:311px;
flex-shrink: 0;
`;

export const TitleMenuList = styled.ul`
display: flex;
flex-direction: column;
gap:8px;

padding-top:16px;
padding-bottom:16px;
padding-left:16px;

`;
export const OutletBox = styled.div`
flex-grow: 1;
display: flex;
`;

export const Box = styled.div`
flex-basis: calc((100%) / ${({ size }) => size});
border-left: 1px solid #1E2D3D;
overflow: hidden;
`;

export const TitleContacList = styled.ul`
padding-top:18px;
padding-left:16px;
display: flex;
flex-direction: column;
gap:9px;
`;

export const TitleContacItem = styled.li`

`;

export const ContactLink = styled.a`
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
}
`;

