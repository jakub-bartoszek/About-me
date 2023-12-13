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
		<a
			href={`https://www.linkedin.com/in/jakub-bartoszek-0853ba28a/`}
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
			href={`https://www.facebook.com/kuba.bartoszek.507`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Facebook />
		</a>
		<a
			target="_blank"
			rel="noopener noreferrer"
		>
			<InstagramGradient>
				<InstagramBox>
					<Instagram />
				</InstagramBox>
			</InstagramGradient>
		</a>
	</Wrapper>
);
