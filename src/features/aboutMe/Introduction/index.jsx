import { About, Description, Header, Image, Wrapper } from "./styled";
import { ThemeSwitch } from "../../../common/ThemeSwitch/index";

export const Introduction = () => (
	<Wrapper>
		<Image src="https://i.postimg.cc/WzCSYcCZ/my-Picture.png" />
		<About>
			<ThemeSwitch />
			This is
			<Header>Jakub Bartoszek</Header>
			<Description>
				👨🏻‍💻 I’m a passionate Frontend Developer in love with
				React, currently looking for new job opportunities.
			</Description>
		</About>
	</Wrapper>
);
