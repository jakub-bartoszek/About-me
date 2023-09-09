import { styled } from "styled-components";
import { ReactComponent as ErrorIcon } from ".././../../../../common/icons/error.svg";

export const Wrapper = styled.div``;

export const Error = styled(ErrorIcon)`
color: ${({ theme }) => theme.colors.textPrimary};
`;
