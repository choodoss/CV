import styled from "styled-components";

export const Nav = styled.footer`
border-top: 1px solid #1e2d3d;
display:flex;
align-items: center;
`;

export const LinkList = styled.ul`
display:flex;
width:100%;
`;

export const LinkItem = styled.li`
border-left: 1px solid #1e2d3d;

&:nth-child(4) {
  border-right: 1px solid #1e2d3d;
    @media screen and (max-width:999px) {
    display:none;
    }
  }

&:last-child {
  border-right: 1px solid #1e2d3d;
    margin-left: auto;
    @media screen and (max-width:999px) {
      border-right: none;
      margin-left: 0;
    }
  }
  &:first-child {
    border-left: none;
    @media screen and (max-width:999px) {
    margin-right: auto;
    }
  }
  &:nth-child(3) {
    
    @media screen and (max-width:999px) {

    }
  }

`;

export const FootText = styled.p`
  display: block;
  color: #607b96;
  font-size: 16px;
  font-weight: 450;
  padding: 12.5px 22px;
  transition: color 250ms ease-in-out;
  @media screen and (max-width:480px) {
    font-size: 15px;
    }
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
@media screen and (max-width:999px) {
  gap: 0;
  padding: 11px 14px;
}
`;

export const Text = styled.span`
  @media screen and (max-width:999px) {
    display:none;
    }
`;
