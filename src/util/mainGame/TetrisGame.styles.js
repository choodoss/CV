import styled from "styled-components";

export const Container = styled.div`
position: absolute;
top: 50%;
right:7%;
transform: translateY(-50%);
display:flex;
    background-color: transparent;
    border: 3px solid #1E2D3D;
    width: 300px;
    height: 600px;
    @media screen and (max-width:999px) {
display:none;
    }

`;
export const Game = styled.div`
display:flex;
flex-wrap: wrap;
height: 100%;
width:100%;

`;