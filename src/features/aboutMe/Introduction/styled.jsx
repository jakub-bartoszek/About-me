import { styled } from "styled-components";
import { ReactComponent as MessageIcon } from "../../../common/icons/message.svg";

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	@media (max-width: ${({ theme }) =>
			theme.breakpoints.mobileMax}px) {
		display: block;
		padding: 0 20px;
	}
`;
export const Image = styled.img`
	border-radius: 50%;
	max-width: 389px;
	height: auto;
	padding: 8px;
	@media (max-width: ${({ theme }) =>
			theme.breakpoints.mobileMax}px) {
		padding: 0;
	}
`;
export const Header = styled.h1`
	color: ${({ theme }) => theme.colors.textPrimary};
	letter-spacing: 1.9px;
	font-weight: 900;
	font-size: 38px;
`;
export const About = styled.div`
	padding-left: 66px;
	@media (max-width: ${({ theme }) =>
			theme.breakpoints.mobileMax}px) {
		padding: 0;
	}
`;
export const Description = styled.p`
	font-size: 20px;
	line-height: 140%;
	letter-spacing: 1px;
	padding-bottom: 32px;
`;

export const Message = styled(MessageIcon)``;

export const HireMeButton = styled.button`
	font-weight: 700;
	display: inline-flex;
	padding: 12px 16px;
	justify-content: center;
	align-items: center;
	gap: 16px;
	color: white;
	background-color: blue;
	border-radius: 4px;
	border: none;
	background: #0366d6;
	transition: 0.3s;
	cursor: pointer;
	&:focus-visible {
		outline: none;
		scale: 1.1;
		filter: brightness(110%);
	}
	&:hover {
		scale: 1.1;
		filter: brightness(110%);
	}
	&:active {
		filter: brightness(130%);
	}
`;
