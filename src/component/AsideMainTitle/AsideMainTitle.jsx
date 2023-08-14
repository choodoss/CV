import { GoTriangleDown } from "react-icons/go";
import styled from "styled-components";

export const Title = styled.p`
color: #FFF;
font-weight: 400;
border-bottom: 1px solid #1E2D3D;
display: flex;
align-items: center;
padding:10px 0;
padding-left:14px;
`;
const AsideMainTitle = ({ text }) => {

    return (
        <Title><GoTriangleDown /><span>{text}</span></Title>
    );
};

export default AsideMainTitle;