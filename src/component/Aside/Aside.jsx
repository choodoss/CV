import styled from "styled-components";

export const AsideContainer = styled.aside`
flex-basis: 311px;
flex-shrink: 0;
@media screen and (max-width:1011px) {
    flex-shrink: 1;
    }
`;

const Aside = ({ children }) => {
    return (<AsideContainer>
        {children}
    </AsideContainer>)
};

export default Aside;