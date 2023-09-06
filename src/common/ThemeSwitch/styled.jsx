import { css, styled } from "styled-components";
import { ReactComponent as SunIcon } from "../icons/sun.svg";

export const Wrapper = styled.button`
	background-color: transparent;
	border: none;
	position: absolute;
	right: 0;
	font-weight: 900;
	text-transform: uppercase;
	float: right;
	display: flex;
	align-items: center;
	gap: 12px;
	border-radius: 50px;
	padding: 0;
	@media (max-width: ${({ theme }) =>
			theme.breakpoints.tabletHorizontalMax}px) {
		right: 20px;
	}
`;

export const Text = styled.span`
	color: ${({ theme }) => theme.colors.site.text};
	@media (max-width: ${({ theme }) =>
			theme.breakpoints.mobileMax}px) {
		display: none;
	}
`;

export const Switch = styled.div`
	background-color: ${({ theme }) => theme.colors.site.background};
	display: flex;
	width: 48px;
	height: 26px;
	padding: 3px;
	outline: 1px solid ${({ theme }) => theme.colors.site.text};
	border-radius: 50px;
`;

export const IconWrapper = styled.div`
	display: flex;
	padding: 3px;
	background-color: ${({ theme }) => theme.colors.site.text};
	border-radius: 50px;
	transition: transform 0.3s;

	${({ $moveToRight }) =>
		$moveToRight &&
		css`
			transform: translateX(20px);
		`}
`;
export const Icon = styled(SunIcon)`
	color: ${({ theme }) => theme.colors.themeSwitch.icon};
	height: 14px;
	width: 14px;
`;
