import { Header, Wrapper } from "./styled";

export const SectionBox = ({ title, body }) => (
	<Wrapper>
		{title && <Header>{title}</Header>}
		{body}
	</Wrapper>
);
