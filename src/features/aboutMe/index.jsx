import {
	Container,
	Introduction,
	Image,
	Header,
	About,
	Description,
	Footer,
	Main,
	List,
	ListItem
} from "./styled";
import { Section } from "./Section";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Portfolio } from "./Portfolio";
import { Box } from "../../common/Box/styled";

export const AboutMe = () => {
	return (
		<Container>
			<Introduction>
				<Image src="https://i.postimg.cc/WzCSYcCZ/my-Picture.png"></Image>
				<About>
					<ThemeSwitch />
					This is
					<Header>Jakub Bartoszek</Header>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Accusamus nobis optio officia illum natus. Omnis soluta
						dignissimos numquam culpa ipsum, commodi in, illo nobis
						harum maiores porro nesciunt vero fuga.
					</Description>
				</About>
			</Introduction>
			<Main>
				<Box>
					<Section
						title="My skills"
						body={
							<List>
								<ListItem>React</ListItem>
							</List>
						}
					/>
				</Box>
				<Box>
					<Section
						title="What i want to learn"
						body={
							<List>
								<ListItem>TypeScript</ListItem>
							</List>
						}
					/>
				</Box>
				<Section body={<Portfolio />} />
			</Main>
			<Footer />
		</Container>
	);
};
