import styled from "styled-components";

export const OutletBox = styled.div`
flex-grow: 1;
display: flex;
`;
export const Section = styled.section`
display: flex;
color: #607B96;
flex-grow: 1;
`;

export const Box = styled.div`
flex-basis: calc((100%) / ${({ size }) => size});
border-left: 1px solid #1E2D3D;
overflow: hidden;
`;