import { styled } from "styled-components";

export const Container = styled.main`
	margin: 115px auto;
	width: 1216px;
	flex-shrink: 0;
`;
export const Introduction = styled.header`
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
export const Main = styled.main``;
export const List = styled.ul`
	margin-top: 48px;
	line-height: 140%;
	letter-spacing: 0.9px;
	font-size: 18px;
`;
export const ListItem = styled.li`
	&::marker {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 130%;
	}
`;
export const Footer = styled.footer``;
