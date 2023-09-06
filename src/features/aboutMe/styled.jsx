import { styled } from "styled-components";

export const Container = styled.main`
	margin: 115px auto;
	max-width: 1216px;
	flex-shrink: 0;
	position: relative;
	transition: 0.3s;
	@media (max-width: ${({ theme }) =>theme.breakpoints.mobileMax}px) {
		margin: 20px auto;

	}
	@media (max-width: ${({ theme }) =>theme.breakpoints.tabletHorizontalMax}px) {
	}
`;
export const Main = styled.main``;
