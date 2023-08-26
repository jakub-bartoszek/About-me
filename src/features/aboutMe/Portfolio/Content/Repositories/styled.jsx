import { styled } from "styled-components";

export const Wrapper = styled.div`
	margin-top: 24px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;
	font-size: 18px;
`;

export const Repository = styled.div`
	background-color: ${({ theme }) => theme.colors.tileBackground};
	padding: 56px;
	line-height: 140%;
	letter-spacing: 0.9px;
	border: 1px solid white;
`;

export const RepositoryName = styled.h3`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 24px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 1.2px;
`;

export const Description = styled.div`
	margin: 24px 0;
`;

export const Links = styled.div`
display: grid;
gap: 8px;
grid-template-rows: 1fr 1fr;
`;

export const Link = styled.a`
	text-decoration: none;
	color: ${({theme}) => theme.colors.primary};
`;
