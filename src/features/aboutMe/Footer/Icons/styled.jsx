import { styled } from "styled-components";
import { ReactComponent as GithubIcon } from "../../../../common/icons/github.svg";
import { ReactComponent as FacebookIcon } from "../../../../common/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../../common/icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../../../common/icons/instagram.svg";

export const Wrapper = styled.div`
	margin-top: 56px;
	display: flex;
	gap: 24px;
	@media (max-width: ${({ theme }) =>
			theme.breakpoints.mobileMax}px) {
		justify-content: center;
	}
`;

export const Github = styled(GithubIcon)`
	color: ${({ theme }) => theme.colors.primary};
`;
export const Facebook = styled(FacebookIcon)`
	color: ${({ theme }) => theme.colors.primary};
`;
export const Linkedin = styled(LinkedinIcon)`
	color: ${({ theme }) => theme.colors.primary};
`;
export const Instagram = styled(InstagramIcon)`
	color: ${({ theme }) => theme.colors.primary};
`;
