import { css, styled } from "styled-components";
import { ReactComponent as SunIcon } from "../icons/sun.svg";

export const Wrapper = styled.button`
 background-color: transparent;
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 border: none;
 font-weight: 900;
 text-transform: uppercase;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 gap: 12px;
 padding: 0;

 &:focus-visible {
  outline: none;
  outline: 2px solid ${({ theme }) => theme.colors.site.text};
  outline-offset: 5px;
 }
`;

export const Text = styled.span`
 color: ${({ theme }) => theme.colors.site.text};

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  display: none;
 }
`;

export const Switch = styled.div`
 background-color: ${({ theme }) => theme.colors.site.background};
 display: flex;
 width: 48px;
 height: 26px;
 padding: 3px;
 outline: 1px solid ${({ theme }) => theme.colors.site.text};
 border-radius: 50px;
 cursor: pointer;
`;

export const IconWrapper = styled.div`
 display: flex;
 padding: 3px;
 background-color: ${({ theme }) => theme.colors.site.text};
 border-radius: 50px;
 transition: transform 0.3s;

 ${({ $moveToRight }) =>
  $moveToRight &&
  css`
   transform: translateX(20px);
  `}
`;

export const Icon = styled(SunIcon)`
 color: ${({ theme }) => theme.colors.themeSwitch.icon};
 height: 14px;
 width: 14px;
`;
