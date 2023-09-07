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
	transition: 0.3s;
	border-radius: 50px;
	&:hover {
		scale: 120%;
		color: ${({ theme }) => theme.iconColors.github};
		box-shadow: 0 0 20px black;
	}
`;
export const Facebook = styled(FacebookIcon)`
	color: ${({ theme }) => theme.colors.primary};
	border-radius: 50px;
	transition: 0.3s;
	&:hover {
		scale: 120%;
		color: ${({ theme }) => theme.iconColors.facebook};
		background-color: white;
		box-shadow: 0 0 20px black;
	}
`;
export const Linkedin = styled(LinkedinIcon)`
	color: ${({ theme }) => theme.colors.primary};
	border-radius: 50px;
	transition: 0.3s;
	&:hover {
		scale: 120%;
		color: ${({ theme }) => theme.iconColors.facebook};
		background-color: white;
		box-shadow: 0 0 20px black;
	}
`;

export const InstagramGradient = styled.div`
	opacity: 100%;
	height: 48px;
	width: 48px;
	border-radius: 50px;
	background: radial-gradient(
		circle at 30% 107%,
		#fdf497 0%,
		#fdf497 5%,
		#fd5949 45%,
		#d6249f 60%,
		#285aeb 90%
	);
	transition: 0.3s;
	&:hover {
		scale: 120%;
		box-shadow: 0 0 20px black;
	}
`;
export const InstagramBox = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	height: 48px;
	width: 48px;
	border-radius: 50px;
	transition: 0.3s;
	&:hover {
		background-color: transparent;
	}
`;
export const Instagram = styled(InstagramIcon)`
	color: ${({ theme }) => theme.iconColors.instagram};
	border-radius: 50px;
	background-color: transparent;
	transition: 0.3s;
	&:hover {
		color: white;
	}
`;
