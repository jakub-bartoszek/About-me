import { StyledButton } from "../../../common/StyledButton/styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import {
 About,
 Description,
 Header,
 Image,
 Message,
 Wrapper,
 ImageWrapper,
 Caption
} from "./styled";

export const Introduction = () => (
 <Wrapper>
  <ImageWrapper>
   <Image src="https://i.postimg.cc/3NJ5n6rc/awatar2.png" />
  </ImageWrapper>
  <ThemeSwitch />
  <About>
   <Caption>This is</Caption>
   <Header>Jakub Bartoszek</Header>
   <Description>
    👨🏻‍💻 I’m a passionate and highly motivated Frontend Developer. I love working
    with React. I'm still improving my skills and learning new technologies.
    Currently I'm looking for new job opportunities.
   </Description>
   <StyledButton href="mailto: jakub.bartoszek.dev@gmail.com">
    <Message />
    Hire me!
   </StyledButton>
  </About>
 </Wrapper>
);
