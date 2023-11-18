import { AcionType } from "../action-types";

interface SearchRepositoriesAction {
  type: AcionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: AcionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: AcionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
