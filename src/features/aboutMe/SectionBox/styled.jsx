import { styled } from "styled-components";

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.tileBackground};
	padding: 32px;
`;
export const Header = styled.h2`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: 900;
	font-size: 30px;
	border-bottom: 1px solid white;
	padding-bottom: 18px;
`;
