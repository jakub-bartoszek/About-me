import { Error, Wrapper } from "./styled";
import { SubHeader } from "../../../../../common/SubHeader/styled";
import { StyledButton } from "../../../../../common/StyledButton/styled";
export const ErrorBox = () => (
	<Wrapper>
		<Error />
		<SubHeader>Oops... Something went wrong</SubHeader>
		Sorry, failed to load Github projects. You can check them directly
		on Github.
		<a
			href="https://github.com/cgt19bartoszekj"
			target="_blank"
			rel="noopener noreferrer"
		>
			<StyledButton>Go to github</StyledButton>
		</a>
	</Wrapper>
);
