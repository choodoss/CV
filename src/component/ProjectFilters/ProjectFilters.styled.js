import styled from "styled-components";
import CheckIcon from "../../img/svg/check.svg";

export const Container = styled.div`

`;

export const List = styled.ul`
display: flex;
flex-direction: column;
gap:9px;

padding-top:18px;
padding-left:16px;
padding-bottom:26px;
`;

export const Item = styled.li`

`;

export const Link = styled.a`
display: flex;
gap:9px;
align-items:center;

color: #607B96;
font-size: 16px;
font-weight: 400;
line-height: normal;

`;

export const CheckBoxContainer = styled.div`
    position: relative;
`;

export const CheckBoxCustom = styled.span`
    position: absolute;
    left: 0;
    top: 0;

    width: 16px;
    height: 16px;

    border-radius: 4px;
    border: 2px solid #607B96;

    transition: outline 250ms ease-in-out;
`;

export const CheckBoxLabel = styled.label`
font-size: 16px;
padding-left:42px;

font-style: normal;
font-weight: 400;
line-height: normal;
transition: color 250ms ease-in-out;


`;



export const CheckBoxInput = styled.input`
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
    
    &:checked+${CheckBoxCustom} {
        background-image: url(${CheckIcon});
        background-repeat: no-repeat;
        background-position: 50%;
        background-color: #607B96;
        background-origin: border-box;
        
    }
    &:checked+${CheckBoxLabel} {
color:#fff;
        
    }
    &:focus+${CheckBoxCustom},
    &:hover+${CheckBoxCustom} {
        outline:2px solid rgba(96, 123, 150, 0.30);
    }
`;