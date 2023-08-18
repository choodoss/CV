import styled from "styled-components";

export const Container = styled.div`
overflow: auto;
display:flex;
flex-direction: column;
gap: 20px;

padding-top: 28px;
padding-left: 28px;
padding-bottom: 28px;
padding-right: 28px;
height: 90%;
`;

export const Title = styled.h4`
color: #5565E8;
font-size: 16px;
font-weight: 700;
margin-bottom:15px
`;
export const SecondTitle = styled.span`
color: #607B96;
font-size: 16px;
font-weight: 700;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 30px;
`;

export const Item = styled.li`
flex-basis:calc((100% - (40px * 2)) / 3);
overflow: hidden;
/* max-width: 370px; */

`;
export const Body = styled.div`
position:relative;
overflow: hidden;
border-radius: 15px;
border: 1px solid #1E2D3D;
background: #011221;
box-sizing:border-box;
`;
export const Img = styled.img`

`;

export const TextBody = styled.div`
border-top: 1px solid #1E2D3D;
padding:32px 24px;
box-sizing:border-box;
`;
export const Text = styled.p`
color: #607B96;
font-size: 18px;
font-weight: 450;
line-height: 1.5;

margin-bottom:24px
`;
export const Link = styled.a`
display:inline-block;
padding:10px 14px;
color: #FFF;
font-size: 14px;
font-weight: 450;

border-radius: 8px;
background: #1C2B3A;
`;

export const Icon = styled.div`
position: absolute;
top:16px;
right:16px;

padding:6px;
border-radius: 2px;
background-color: #86E1F9;

display:flex;
justify-content: center;
align-items:center;
`;
