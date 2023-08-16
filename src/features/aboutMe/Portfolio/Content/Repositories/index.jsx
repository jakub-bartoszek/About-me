import { Repository, RepositoryName, Wrapper } from "./styled";

export const Repositories = ({ repositories }) => {
	return (
		<Wrapper>
			{repositories.map(
				({ id, name, description, homepage, html_url }) => (
					<Repository key={id}>
						<RepositoryName>{name}</RepositoryName>
						{html_url}
					</Repository>
				)
			)}
		</Wrapper>
	);
};
