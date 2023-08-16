import { styled } from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Icon = styled(GithubIcon)`
	color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.h2`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: 900;
	font-size: 30px;
`;
export const Projects = styled.div``;
export const Project = styled.div``;
export const ProjectName = styled.h3``;
