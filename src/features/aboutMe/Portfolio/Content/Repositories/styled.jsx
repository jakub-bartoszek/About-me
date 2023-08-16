import { styled } from "styled-components";

export const Wrapper = styled.div`
margin-top: 24px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;
`;

export const Repository = styled.div`
	background-color: ${({ theme }) => theme.colors.tileBackground};
	padding: 56px;
`;

export const RepositoryName = styled.h3`
color: ${({theme}) => theme.colors.textPrimary}`;
