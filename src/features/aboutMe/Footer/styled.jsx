import { styled } from "styled-components";

export const Wrapper = styled.footer`
 color: ${({ theme }) => theme.colors.textPrimary};
 width: 60%;
 font-size: 18px;

 @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
  width: 80%;
 }
 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  width: 100%;
 }
`;

export const Email = styled.div`
 font-size: 32px;
 font-weight: 900;
 line-height: normal;
 letter-spacing: 1.6px;
 margin: 24px 0;
 overflow: hidden;
 text-overflow: ellipsis;

 & > a {
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  font-size: 18px;
 }
`;
