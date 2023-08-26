import { css, styled } from "styled-components";
import { ReactComponent as SunIcon } from "../icons/sun.svg";

export const Wrapper = styled.div`
	font-weight: 900;
	text-transform: uppercase;
	float: right;
	display: flex;
	align-items: center;
	gap: 12px;
`;
export const Switch = styled.div`
	display: flex;
	width: 48px;
	height: 26px;
	padding: 3px;
	outline: 1px solid;
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
