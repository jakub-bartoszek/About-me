import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../../common/ThemeSwitch/themeSlice";
import repositoriesReducer from "../../features/aboutMe/Portfolio/repositoriesSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
 reducer: {
  theme: themeReducer,
  repositories: repositoriesReducer
 },
 middleware: [sagaMiddleware]
});

sagaMiddleware.run(saga);

export default store;
