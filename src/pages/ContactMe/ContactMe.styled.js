import styled from "styled-components";

export const OutletBox = styled.div`
flex-grow: 1;
display: flex;
@media screen and (max-width: 999px) {
    flex-grow: 0;
display: block;
}
`;

export const Section = styled.section`
display: flex;
color: #607B96;
flex-grow: 1;
@media screen and (max-width: 999px) {
    flex-grow: 0;
display: block;
}
`;
