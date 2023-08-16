import { call, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./githubAPI";
import {
	fetchRepositories,
	fetchRepositoriesError,
	fetchRepositoriesSuccess
} from "./repositoriesSlice";

function* fetchRepositoriesHandler({ payload: username }) {
	try {
		const repositories = yield call(getRepositories, username);
		yield put(fetchRepositoriesSuccess(repositories));
	} catch (error) {
		yield put(fetchRepositoriesError());
	}
}
export function* repositoriesSaga() {
	yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
