import styled from "styled-components";

export const Nav = styled.nav`
display:flex;
align-items: center;
border-radius: 0 0 8px 8px;
  border: 1px solid #1E2D3D;
  background: #011627;
`;

export const LinkList = styled.ul`
display:flex;
width:100%;

`;
export const LinkItem = styled.li`
border-left: 1px solid #1e2d3d;

&:last-child {
    margin-left: auto;
  }
  &:first-child {
    border-left: none;
  }

  &:nth-child(4) {
    border-right: 1px solid #1e2d3d;
  }
`;

export const FootText = styled.p`
  display: block;
  color: #607b96;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  padding: 12.5px 22px;
  transition: color 250ms ease-in-out;
`;

export const LinkIcon = styled.a`
  display: inline-flex;
justify-content: center;
align-items: center;
  color: #607b96;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  transition: color 250ms ease-in-out;
  
   &:hover,
  &:focus {
    color: #fff;
   }

padding: 11px 14px;
`;

export const LinkGitHub = styled(LinkIcon)`
display:flex;
justify-content: center;
align-items: center;
gap:5px;
padding: 11px 22px;
`;

export const Text = styled.span`

`;
