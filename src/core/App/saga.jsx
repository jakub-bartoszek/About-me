import { all } from "redux-saga/effects";
import { repositoriesSaga } from "../../features/aboutMe/Portfolio/repositoriesSaga";

export default function* saga() {
 yield all([repositoriesSaga()]);
}
