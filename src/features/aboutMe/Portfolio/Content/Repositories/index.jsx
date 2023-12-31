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
   {repositories.map(({ id, name, description, homepage, html_url }) => (
    <Repository key={id}>
     <RepositoryName>{name.toString().replaceAll("-", " ")}</RepositoryName>
     <Description>{description}</Description>
     <Links>
      <p>
       Demo:&nbsp;
       <Link
        href={homepage}
        target="_blank"
        rel="noopener noreferrer"
       >
        {homepage}
       </Link>
      </p>
      <p>
       Code:&nbsp;
       <Link
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
       >
        {html_url}/
       </Link>
      </p>
     </Links>
    </Repository>
   ))}
  </Wrapper>
 );
};
