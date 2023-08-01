import styled from "styled-components";

export const Container = styled.div`

`;

export const Title = styled.p`
color: #FFF;
font-weight: 400;
border-bottom: 1px solid #1E2D3D;
display: flex;
align-items: center;
padding:10px 0;
padding-left:14px;
border-top: 1px solid #1E2D3D;
`;

export const List = styled.ul`
padding-top:18px;
padding-left:16px;
display: flex;
flex-direction: column;
gap:9px;

padding-top:18px;
padding-left:16px;
padding-bottom:26px;
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