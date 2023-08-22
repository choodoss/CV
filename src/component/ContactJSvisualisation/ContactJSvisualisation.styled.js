import styled from "styled-components";

export const Section = styled.div`
@media screen and (max-width: 768px) {
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
}
`;

export const List = styled.ul`

`;
export const Item = styled.li`
display:flex;
gap:40px;
font-size: 18px;
font-style: normal;
font-weight: 450;
line-height: 1.5;
`;

export const Text = styled.p`
display:flex;
flex-wrap:wrap;

`;

export const RoseText = styled.span`
color: #C98BDF;
`;
export const VioletText = styled.span`
color: #5565E8;
`;

export const OrangeText = styled.span`
color: #FEA55F;
`;

export const Container = styled.div`
display:flex;
height:100%;
justify-content: center;
align-items: center;

padding: 0 70px;
`;


