import styled from "styled-components";

export const EduContainer = styled.ul`
box-sizing: border-box;
height: calc(100% - 42px);
overflow: auto;
padding: 40px;
display:flex;
flex-direction: column;
gap: 20px;
@media screen and (max-width:999px) {
padding: 20px;
    }
`;
export const EduBox = styled.li`
border-radius: 15px;
border: 1px solid #1E2D3D;
background: #011221;
padding: 24px 30px;

display:flex;
flex-direction: column;
gap: 7px;
`;
export const Title = styled.p`
color: #E99287;
font-size: 14px;
font-weight: 450;
line-height: 1.7; 
`;
export const Description = styled.p`
color: #5565E8;
font-size: 12px;
font-weight: 450;
line-height: 1.7; 

`;
export const DescriptionSpan = styled.span`
color: #C98BDF;
`;

export const DateTime = styled.span`
color: #43D9AD;
font-size: 12px;
font-weight: 450;
line-height: 1.7; 
`;

