import { githubUsername } from "../../Portfolio/githubUsername";
import {
	Facebook,
	Github,
	Instagram,
	InstagramBox,
	InstagramGradient,
	Linkedin,
	Wrapper
} from "./styled";

export const Icons = () => (
	<Wrapper>
		<a href={`https://github.com/${githubUsername}`}>
			<Github />
		</a>
		<a href={`https://www.facebook.com/kuba.bartoszek.507`}>
			<Facebook />
		</a>
		<a
			href={`https://www.linkedin.com/in/jakub-bartoszek-0853ba28a/`}
		>
			<Linkedin />
		</a>
		<a href={`https://github.com/${githubUsername}`}>
			<InstagramGradient>
				<InstagramBox>
					<Instagram />
				</InstagramBox>
			</InstagramGradient>
		</a>
	</Wrapper>
);
