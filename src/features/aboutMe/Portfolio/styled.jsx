import { styled } from "styled-components";
import { ReactComponent as GithubIcon } from "../../../common/icons/github.svg";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 120px;
`;
export const Icon = styled(GithubIcon)`
	color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.h2`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: 900;
	font-size: 30px;
`;