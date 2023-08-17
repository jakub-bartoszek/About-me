import { styled } from "styled-components";

export const Wrapper = styled.header`
	display: grid;
	grid-template-columns: auto 1fr;
`;
export const Image = styled.img`
	border-radius: 50%;
	width: 398px;
	height: 398px;
	padding: 8px;
`;
export const Header = styled.h1`
	color: ${({ theme }) => theme.colors.textPrimary};
	letter-spacing: 1.9px;
	font-weight: 900;
	font-size: 38px;
`;
export const About = styled.div`
	padding-left: 66px;
`;
export const Description = styled.p`
	font-size: 20px;
	line-height: 140%;
	letter-spacing: 1px;
`;
