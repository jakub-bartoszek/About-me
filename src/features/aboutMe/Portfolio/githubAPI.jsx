import axios from "axios";

const API_URL = "https://api.github.com";

export const getRepositories = async (username) => {
	const response = await axios.get(
		`${API_URL}/users/${username}/repos`
	);
	const responseData = response.data;
	return responseData;
};
