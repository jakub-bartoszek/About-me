import { styled } from "styled-components";
import { ReactComponent as MessageIcon } from "../../../common/icons/message.svg";

export const Wrapper = styled.header`
 position: relative;
 display: grid;
 grid-template-columns: 384px auto;
 gap: 72px;
 width: 100%;

 @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
  grid-template-columns: 256px auto;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  gap: 0;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
 }
`;

export const ImageWrapper = styled.div`
 display: flex;
 align-items: center;
 max-width: 389px;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  max-width: 100%;
 }
`;

export const Image = styled.img`
 border-radius: 50%;
 width: 100%;
 height: auto;
 aspect-ratio: 1/1;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  width: 50%;
  max-width: 200px;
 }
`;

export const About = styled.div`
 padding: 26px 0;
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

export const Caption = styled.div`
 font-size: 12px;
 font-weight: 700;
 line-height: 130%;
 text-transform: uppercase;
`;

export const Header = styled.h1`
 color: ${({ theme }) => theme.colors.textPrimary};
 letter-spacing: 1.9px;
 font-weight: 900;
 font-size: 38px;

 @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
  font-size: 28px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1.1px;
 }
`;

export const Description = styled.p`
 font-size: 20px;
 line-height: 140%;
 letter-spacing: 1px;
 padding-bottom: 32px;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  font-size: 17px;
  letter-spacing: 0.85px;
 }
`;

export const Message = styled(MessageIcon)``;
