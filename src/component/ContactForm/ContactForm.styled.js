import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center; 
  height: 100%; 
`;

export const InputWrapper = styled.div`
position:relative;
margin-bottom: 55px;
&:last-of-type{
    margin-bottom: 24px;
}
`;

export const Label = styled.label`
position: absolute;
top: -10px;
left:0;
color: #607B96;
font-size: 16px;
font-weight: 450;
transform: translateY(-100%);
`;

export const Input = styled.input`
width: 372px;
height: 41px;
border-radius: 8px;
border: 1px solid #1E2D3D;
background: #011221;

color: #465E77;
font-family: inherit;
font-size: 16px;
font-style: normal;
font-weight: 450;
line-height: normal;
`;

export const Textarea = styled.textarea`
width: 372px;
border-radius: 8px;
border: 1px solid #1E2D3D;
background: #011221;

color: #465E77;
font-family: inherit;
font-size: 16px;
font-style: normal;
font-weight: 450;
line-height: normal;
`;

export const Button = styled.button`
padding: 10px 14px;
border-radius: 8px;
background: #1C2B3A;
color: #FFF;
font-size: 14px;
font-weight: 450;
`;

