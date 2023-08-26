import { styled } from "styled-components";

export const Wrapper = styled.section`
	margin: 72px 0;
	background-color: ${({ theme }) => theme.colors.tileBackground};
	padding: 32px;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
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
