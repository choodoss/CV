import styled from "styled-components";

export const Title = styled.span`
  font-weight: 400;
  border-bottom: 1px solid #1E2D3D;
  display: flex;
  align-items: center;
  padding: 10px 0;
  padding-left: 14px;
  @media screen and (max-width:768px) {
    border-bottom: none;
    margin-bottom:7px;
    padding-left: 27px;

    color: #fff;
    }
`;

const SubTitle = ({ text }) => {
  return (<div>
    <Title>{text}</Title>
  </div>
  )
};

export default SubTitle;