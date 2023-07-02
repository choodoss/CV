import styled from "styled-components";

export const HeadProfile = styled.div`
margin-bottom:80px;
`;

export const Container = styled.div`
height: 100%;
margin-left:311px;
display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextList = styled.ul`
`;

export const Section = styled.section`
position:relative;
height: 100%;
`;

export const BlueLight = styled.div`
position:absolute;
z-index:3;
top: 0;
right:0;
width: 454px;
height: 492px;
transform: rotate(13.508deg);
opacity: 0.4;
background-image: url(../../img/Blue.png);
background-size:cover;
background-repeat; no-repeat;
`;

export const GreenLight = styled.div`
position:absolute;
z-index:999;
top: 158px;
left:220px;
width: 454px;
height: 492px;
transform: rotate(-94.305deg);
opacity: 0.4;
background-image:url(../../img/Blue.png);
background-size:cover;
background-repeat; no-repeat;
`;

export const Text = styled.span`
color: #E5E9F0;
font-size: 18px;
`;
export const DevName = styled.h1`
color: #E5E9F0;
font-size: 62px;
font-weight: 400;
`;
export const DevProfile = styled.h2`
color: #4D5BCE;
font-size: 32px;
font-weight: inherit;
`;
export const TextDownProfile = styled.li`
color: #607B96;
font-weight: inherit;
`;
export const TextViolet = styled.span`
color: #4D5BCE;
font-weight: 500;
`;
export const TextGreen = styled(TextViolet)`
color: #43D9AD;
`;
export const LinkOrange = styled.a`
color: #E99287;
font-weight: 500;
&:hover,
  &:focus {
    color: #4D5BCE;
  }
`;

