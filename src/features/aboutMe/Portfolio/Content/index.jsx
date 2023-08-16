import { Repositories } from "./Repositories/index";

export const Content = ({ status, repositories }) => {
	switch (status) {
		case "initial":
			return null;
		case "loading":
			return <>loading</>;
		case "error":
			return <>error</>;
		case "success":
			return <Repositories repositories={repositories} />;

		default:
			throw new Error(`incorrect status: ${status}`);
	}
};
