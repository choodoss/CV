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
position:relative;
  width: 372px;
  height: 41px;
  border-radius: 8px;
  border: 1px solid #1E2D3D;
  background-color: #011221;
  padding: 0 10px;
  box-sizing: border-box;
  color: #465E77;
  font-family: inherit;
  font-size: 16px;
  font-weight: 450;
  transition: background-color 300ms ease-in-out 9000s, border-color 300ms ease-in-out;
  
  &:focus{
  border-color: #fea55f;
}

  &:not(:placeholder-shown) {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: #465E77;
    }
  }

  &:invalid {
  border-color: #7f001a;
}`;

export const Textarea = styled.textarea`
box-sizing: border-box;
width: 372px;
border-radius: 8px;
border: 1px solid #1E2D3D;
background: #011221;
padding: 10px;

color: #465E77;
font-family: inherit;
font-size: 16px;
font-style: normal;
font-weight: 450;
line-height: normal;
resize: none;
transition: border-color 300ms ease-in-out;

&:focus{
  border-color: #fea55f;
}
`;

export const Button = styled.button`
padding: 10px 14px;
border-radius: 8px;
color: #FFF ;
background-color: #011221;
font-size: 14px;
font-weight: 450;
font-family: inherit;
font-style: normal;
line-height: normal;
transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
&:hover,
&:focus{
  background-color: #1C2B3A;
}

&:disabled,
&:disabled:hover,
&:disabled:focus {
  color: #465E77;
  background-color: #011221;
}

`;

