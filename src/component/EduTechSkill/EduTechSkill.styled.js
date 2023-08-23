import styled from "styled-components";

export const EduContainer = styled.div`
overflow: auto;
display:flex;
flex-direction: column;

padding-top: 18px;
padding-bottom: 18px;
padding-right: 28px;
box-sizing: border-box;
height: calc(100% - 42px);
@media screen and (max-width:999px) {
height: auto;
    }
`;

export const List = styled.ul`
padding-top: 18px;
padding-bottom: 18px;
padding-right: 18px;
padding-left: 40px;
display:flex;
flex-direction: column;
gap: 7px;
@media screen and (max-width:999px) {
    padding-left: 27px;
    font-size: 15.5px;
    }
`;
export const Item = styled.li`
display: flex;
`;

export const Title = styled.h4`
padding-left: 40px;
color: #607B96;
font-size: 20px;
font-style: normal;
font-weight: 450;
line-height: 1.5;
@media screen and (max-width:999px) {
    font-size: 17px;
    padding-left: 27px;
    }
`;
export const Text = styled.p`
@media screen and (max-width:999px) {

    }
`;


