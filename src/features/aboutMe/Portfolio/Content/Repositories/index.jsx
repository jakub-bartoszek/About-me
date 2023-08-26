import {
	Description,
	Link,
	Links,
	Repository,
	RepositoryName,
	Wrapper
} from "./styled";

export const Repositories = ({ repositories }) => {
	return (
		<Wrapper>
			{repositories.map(
				({ id, name, description, homepage, html_url }) => (
					<Repository key={id}>
						<RepositoryName>{name.toString().replaceAll('-', ' ')}</RepositoryName>
						<Description>
							{description}
						</Description>
						<Links>
							<p>
								Demo:&nbsp;
								<Link href={homepage}>
									{homepage.slice(0, 33)}...
								</Link>
							</p>
							<p>
								Code:&nbsp;
								<Link href={html_url}>
									{html_url.slice(0, 34)}...
								</Link>
							</p>
						</Links>
					</Repository>
				)
			)}
		</Wrapper>
	);
};
