import { githubUsername } from "../../Portfolio/githubUsername";
import {
 Facebook,
 Github,
 Linkedin,
 Wrapper
} from "./styled";

export const Icons = () => (
 <Wrapper>
  <a
   href={`https://www.linkedin.com/in/jbartoszek-dev/`}
   target="_blank"
   rel="noopener noreferrer"
  >
   <Linkedin />
  </a>
  <a
   href={`https://github.com/${githubUsername}`}
   target="_blank"
   rel="noopener noreferrer"
  >
   <Github />
  </a>
  <a
   href={`https://www.facebook.com/profile.php?id=61554246347111`}
   target="_blank"
   rel="noopener noreferrer"
  >
   <Facebook />
  </a>
 </Wrapper>
);
