import { styled } from "styled-components";

export const Wrapper = styled.div`
	margin: 72px 0;
	padding: 32px;
`;
export const Header = styled.h2`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: 900;
	font-size: 30px;
`;
