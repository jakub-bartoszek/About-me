import { styled } from "styled-components";

export const Wrapper = styled.div`
 margin-top: 24px;
 max-width: 100%;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 32px;
 font-size: 18px;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  grid-template-columns: repeat(1, auto);
 }
`;

export const RepositoryName = styled.h3`
 color: ${({ theme }) => theme.colors.textPrimary};
 font-size: 24px;
 font-weight: 700;
 line-height: normal;
 letter-spacing: 1.2px;
 transition: 0.3s;
`;

export const Repository = styled.div`
 background-color: ${({ theme }) => theme.colors.tileBackground};
 padding: 48px;
 line-height: 140%;
 letter-spacing: 0.9px;
 word-break: break-word;
 border-radius: 15px;
 transition: 0.3s;

 &:hover {
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}50;
  background-color: ${({ theme }) => theme.colors.tileHoverBackground};
 }
`;

export const Description = styled.div`
 margin: 24px 0;
`;

export const Links = styled.div`
 display: grid;
 gap: 8px;
 grid-template-rows: 1fr 1fr;
 word-break: break-all;
`;

export const Link = styled.a`
 text-decoration: none;
 color: ${({ theme }) => theme.colors.primary};
 transition: 0.2s;

 &:focus-visible {
  outline: none;
  outline: 1px solid ${({ theme }) => theme.colors.site.text};
  outline-offset: 2px;
  border-radius: 2px;
  text-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
 }
 
 &:hover {
  text-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
 }
`;
