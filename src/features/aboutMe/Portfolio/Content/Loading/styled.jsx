import { styled } from "styled-components";

export const Wrapper = styled.div`
	margin-top: 48px;
	width: 100%;
	text-align: center;
`;

export const Loader = styled.div`
	margin: 32px auto 0 auto;
	border: 10px solid transparent;
	border-top: 10px solid ${({ theme }) => theme.colors.primary};
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: spin 1.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
