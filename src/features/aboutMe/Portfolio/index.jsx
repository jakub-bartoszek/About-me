import { useDispatch, useSelector } from "react-redux";
import { Header, Icon, Wrapper } from "./styled";
import {
	fetchRepositories,
	selectRepositories,
	selectRepositoriesStatus
} from "./repositoriesSlice";
import { useEffect } from "react";
import { githubUsername } from "./githubUsername";
import { Content } from "./Content";

export const Portfolio = () => {
	const dispatch = useDispatch();

	const status = useSelector(selectRepositoriesStatus);
	const repositories = useSelector(selectRepositories);

	useEffect(() => {
		dispatch(fetchRepositories(githubUsername));
	}, [dispatch]);

	return (
		<Wrapper>
			<Icon />
			<Header>Portfolio</Header>
			My recents projects
			<Content
				repositories={repositories}
				status={status}
			/>
		</Wrapper>
	);
};
