import { Icons } from "./Icons";
import { Email, Wrapper } from "./styled";

export const Footer = () => (
	<Wrapper>
		Let's talk
		<Email>jakub.bartoszek.dev@gmail.com</Email>
		I’m always open to new projects whenever I have the time. If you
		have a website, dashboard or mobile app in mind and need some help
		to make your ideas come to life, feel free to conatct me.
		<Icons />
	</Wrapper>
);
