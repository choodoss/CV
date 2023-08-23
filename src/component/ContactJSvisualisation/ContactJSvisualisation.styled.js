import styled from "styled-components";

export const Section = styled.section`
height:100%;
@media screen and (max-width: 999px) {
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

export const Container = styled.div`
display:flex;
height:calc(100% - 42px);
justify-content: center;
align-items: center;
padding: 0 70px;
@media screen and (max-width: 1400px) {
    padding: 0 20px;
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



