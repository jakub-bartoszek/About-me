import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
 name: "repositories",
 initialState: {
  status: "initial",
  repositories: null
 },
 reducers: {
  fetchRepositories: () => ({
   status: "loading",
   repositories: null
  }),
  fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
   status: "success",
   repositories: repositories
  }),
  fetchRepositoriesError: () => ({
   status: "error",
   repositories: null
  })
 }
});

export const {
 fetchRepositories,
 fetchRepositoriesSuccess,
 fetchRepositoriesError
} = repositoriesSlice.actions;

const selectRepositoriesState = (state) => state.repositories;

export const selectRepositories = (state) =>
 selectRepositoriesState(state).repositories;

export const selectRepositoriesStatus = (state) =>
 selectRepositoriesState(state).status;

export default repositoriesSlice.reducer;
