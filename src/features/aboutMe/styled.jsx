import { styled } from "styled-components";

export const Container = styled.main`
 margin: 0 auto;
 max-width: 1216px;
 padding: 12px;
 flex-shrink: 0;
 position: relative;
 transition: 0.3s;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  margin: 20px auto;
 }
`;

export const Main = styled.main``;