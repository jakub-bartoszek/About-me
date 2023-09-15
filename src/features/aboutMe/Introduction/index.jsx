import { StyledButton } from "../../../common/StyledButton/styled";
import { About, Description, Header, Image, Message, Wrapper } from "./styled";

export const Introduction = () => (
	<Wrapper>
		<Image src="https://i.postimg.cc/WzCSYcCZ/my-Picture.png" />
		<About>
			This is
			<Header>Jakub Bartoszek</Header>
			<Description>
				👨🏻‍💻 I’m a passionate Frontend Developer in love with React,
				currently looking for new job opportunities.
			</Description>
			<StyledButton><Message/>Hire me!</StyledButton>
		</About>
	</Wrapper>
);
