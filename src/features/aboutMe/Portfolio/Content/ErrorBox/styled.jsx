import { styled } from "styled-components";
import { ReactComponent as ErrorIcon } from ".././../../../../common/icons/error.svg";

export const Wrapper = styled.div`
 margin-top: 50px;
 display: flex;
 flex-direction: column;
 gap: 20px;
 align-items: center;
`;

export const Error = styled(ErrorIcon)`
 color: ${({ theme }) => theme.colors.textPrimary};
 height: 48px;
 width: 48px;
`;
