import { styled } from "styled-components";

export const Wrapper = styled.section`
	margin: 72px 0;
	background-color: ${({ theme }) => theme.colors.tileBackground};
	padding: 32px;
	transition: 0.3s;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 48px;
	line-height: 140%;
	letter-spacing: 0.9px;
	font-size: 18px;
	@media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const ListItem = styled.li`
	&::marker {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 130%;
	}
`;
