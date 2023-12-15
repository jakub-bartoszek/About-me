import { Icons } from "./Icons";
import { Email, Wrapper } from "./styled";

export const Footer = () => (
 <Wrapper>
  Let's talk
  <Email>
   <a href="mailto: jakub.bartoszek.dev@gmail.com">
    jakub.bartoszek.dev@gmail.com
   </a>
  </Email>
  I’m always open to new projects. If you have a website, dashboard or mobile
  app in mind and need some help to make your ideas come to life, feel free to
  conatct me.
  <Icons />
 </Wrapper>
);
