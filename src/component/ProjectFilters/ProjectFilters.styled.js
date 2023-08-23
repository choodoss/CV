import styled from "styled-components";
import CheckIcon from "../../img/svg/check.svg";

export const Container = styled.div`
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap:9px;

padding-top:18px;
padding-left:16px;
padding-right:24px;
padding-bottom:26px;
@media screen and (max-width:999px) {
    padding-left:27px;
    }
`;

export const CheckBoxContainer = styled.div`
    position: relative;

`;

export const CheckBoxCustom = styled.span`
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 0.3rem;
    border: 1px solid #607B96;
    display:block;
`;

export const CheckBoxLabel = styled.label`
display:block;
font-size: 16px;
padding-left:42px;
font-weight: 400;
display:flex;
gap:10px;
align-items:center;

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

    &:focus~${CheckBoxCustom},
    &:hover~${CheckBoxCustom} {
        outline:rgba(96, 123, 150, 0.30) solid 2px;
    } 
    &:checked+${CheckBoxCustom} {
        background-image: url(${CheckIcon});
        background-repeat: no-repeat;
        background-position: 50%;
        background-color: #607B96;
        background-origin: border-box;
    }
        &:focus~${CheckBoxLabel},
        &:hover~${CheckBoxLabel} {
        color:#fff;
    } 
        &:checked~${CheckBoxLabel} {
        color:#fff;
    }
`;