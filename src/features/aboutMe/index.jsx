import {
	Container,
	Main,
	List,
	ListItem,
	Section
} from "./styled";
import { Portfolio } from "./Portfolio";
import { SectionBox } from "./SectionBox";
import { Footer } from "./Footer";
import { Introduction } from "./Introduction";

export const AboutMe = () => {
	return (
		<Container>
			<Introduction/>
			<Main>
				<Section>
					<SectionBox
						title="My skills"
						body={
							<List>
								<ListItem>React</ListItem>
							</List>
						}
					/>
				</Section>
				<Section>
					<SectionBox
						title="What i want to learn"
						body={
							<List>
								<ListItem>TypeScript</ListItem>
							</List>
						}
					/>
				</Section>
				<Section>
					<Portfolio />
				</Section>
			</Main>
			<Footer/>
		</Container>
	);
};
