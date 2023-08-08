import styled from "styled-components";

export const Container = styled.div`
flex-basis: calc((100%) / ${({ size }) => size});
border-left: 1px solid #1E2D3D;
overflow: hidden;
`;

const Box = ({ children, size = 1 }) => {
    return (<Container size={size}>
        {children}
    </Container>)
};

export default Box;