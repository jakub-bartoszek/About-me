import { styled } from "styled-components";
import { ReactComponent as GithubIcon } from "../../../../common/icons/github.svg";
import { ReactComponent as FacebookIcon } from "../../../../common/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../../common/icons/linkedin.svg";

export const Wrapper = styled.div`
 margin-top: 56px;
 display: flex;
 gap: 24px;
`;

export const Github = styled(GithubIcon)`
 color: ${({ theme }) => theme.colors.primary};
 transition: 0.3s;
 border-radius: 50px;

 &:hover {
  scale: 120%;
  color: ${({ theme }) => theme.iconColors.github};
  box-shadow: 0 0 20px ${({ theme }) => theme.iconShadow};
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
  box-shadow: 0 0 20px ${({ theme }) => theme.iconShadow};
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
  box-shadow: 0 0 20px ${({ theme }) => theme.iconShadow};
 }
`;
