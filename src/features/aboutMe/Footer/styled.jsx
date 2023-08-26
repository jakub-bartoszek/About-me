import { styled } from "styled-components";

export const Wrapper = styled.footer`
	color: ${({ theme }) => theme.colors.textPrimary};
	width: 60%;
	font-size: 18px;
`;

export const Email = styled.h3`
	font-size: 32px;
	font-weight: 900;
	line-height: normal;
	letter-spacing: 1.6px;
	margin: 24px 0;
`;
