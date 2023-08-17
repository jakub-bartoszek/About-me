import { styled } from "styled-components";

export const Container = styled.main`
	margin: 115px auto;
	width: 1216px;
	flex-shrink: 0;
`;
export const Main = styled.main``;
export const Section = styled.div`
	margin: 72px 0;
`;
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
