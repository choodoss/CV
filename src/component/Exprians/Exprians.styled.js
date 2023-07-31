import styled from "styled-components";

export const Container = styled.div`
overflow: auto;
display:flex;
flex-direction: column;
gap: 20px;

padding-top: 18px;
padding-left: 28px;
padding-bottom: 18px;
padding-right: 28px;
height: 90%;
`;

export const Title = styled.p`
color: #E99287;
font-size: 14px;
font-weight: 450;
line-height: 1.7; 
`;
export const Description = styled.div`
font-size: 14px;
font-weight: 450;
line-height: 1.5; 
`;

export const Position = styled.p`
color: #C98BDF;
font-size: 12px;
font-weight: 450;
line-height: 1.7; 
`;


export const DescriptionSpan = styled.span`
color: #5565E8;
`;

export const DateTime = styled.span`
color: #43D9AD;
font-size: 12px;
font-weight: 450;
line-height: 1.7; 
`;

export const ExpList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Item = styled.li`

`;
export const PositionList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ItemPosition = styled.li`
flex-basis: calc((70% - 30px));

display:flex;
flex-direction: column;
gap: 7px;

border-radius: 15px;
border: 1px solid #1E2D3D;
background: #011221;
padding: 24px;

&:nth-child(odd){
    flex-basis: calc((30% - 30px));
    justify-content:center;
}`;

