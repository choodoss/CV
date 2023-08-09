import styled from "styled-components";

export const AsideContainer = styled.aside`
flex-basis: 311px;
flex-shrink: 0;
`;

const Aside = ({ children }) => {
    return (<AsideContainer>
        {children}
    </AsideContainer>)
};

export default Aside;