import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TitleIsHidden = styled.h2`
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
`;

export const Section = styled.section`
display: flex;
color: #607B96;
`;

export const TextAbout = styled.p`
font-size: 18px;
font-weight: 450;
line-height: 150%;
`;
export const TitleActive = styled.li`
color: #FFF;
font-weight: 400;
border-bottom: 1px solid #1E2D3D;
border-right: 1px solid #1E2D3D;
display: flex;
align-items: center;
padding:10px 0;
padding-left:14px;
`;
export const TitleAbout = styled.span`
font-weight: 400;
border-bottom: 1px solid #1E2D3D;
border-right: 1px solid #1E2D3D;
display: flex;
align-items: center;
padding:10px 0;
padding-left:14px;
`;
export const Aside = styled.aside`
flex:0 1 312px;
`;
export const Box = styled.div`
flex:1 1 700px;
`;
export const SecondTitleActive = styled.li`
color: #FFF;
font-weight: 400;
display: flex;
align-items: center;
padding-left: 16px;
`;
export const TitleBioFolderIconWrapperOrange = styled.span`
margin-right: 9px;
color: #E99287;
`;
export const TitleBioFolderIconWrapperGreen = styled.span`
margin-right: 9px;
color: #43D9AD;
`;
export const TitleBioFolderIconWrapperViolet = styled.span`
margin-right: 9px;
color: #3A49A4;
`;
export const TitleBioFolderIconWrapperSame = styled.span`
margin-right: 9px;
color: #3E91A8;
`;

export const TitleBioArrowIconWrapper = styled.span`
margin-right: 14px;
`;

