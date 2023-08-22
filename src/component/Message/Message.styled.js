import styled from "styled-components";

export const Container = styled.div`
padding: 42px 27px;
@media screen and (max-width:768px) {
    height:57lvh;
    }
`;

export const Title = styled.p`
color: #FFF;
text-align: center;
font-size: 24px;
font-weight: 450;
margin-bottom:13px;
`;
export const Text = styled(Title)`
color: inherit;
font-size: 24px;
margin-bottom: 21px;
`;

export const Button = styled.button`
display:block;
margin:0 auto;
padding: 10px 14px;
border-radius: 8px;
color: #FFF ;
background-color: #1C2B3A;
font-size: 14px;
font-weight: 450;
font-family: inherit;
font-style: normal;
line-height: normal;
transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
&:hover,
&:focus{
    background-color: #011221;
  
}
`;