import { styled } from "styled-components";

export const Wrapper = styled.div`
	margin-top: 24px;
	max-width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 32px;
	font-size: 18px;
	padding: 0 10px;
	@media (max-width: ${({ theme }) =>
			theme.breakpoints.mobileMax}px) {
		grid-template-columns: repeat(1, auto);
	}
`;

export const RepositoryName = styled.h3`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-size: 24px;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 1.2px;
	transition: 0.3s;
`;

export const Repository = styled.div`
	background-color: ${({ theme }) => theme.colors.tileBackground};
	padding: 56px;
	line-height: 140%;
	letter-spacing: 0.9px;
	border: 1px solid white;
	word-break: break-word;
	border-radius: 15px;
	transition: 0.3s;
	&:hover {
		background-color: ${({ theme }) =>
			theme.colors.tileHoverBackground};
		${RepositoryName} {
			text-shadow: 0 0 15px #ffffff99;
		}
	}
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
	color: ${({ theme }) => theme.colors.primary};
	transition: 0.2s;
	&:focus-visible {
		outline: none;
		filter: brightness(130%);
		text-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
	}
	&:hover {
		filter: brightness(120%);
		text-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
	}
`;
