
import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_FAIL, FILTER_CHARACTERS, SORT_IDS, SEARCH_NAME } from "../../utils/constants";

export const loadData = () => {
  return { type: LOAD_DATA };
};

export const loadDataSuccess = data => {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
};

export const loadDataFailure = error => {
  return {
    type: LOAD_DATA_FAIL,
    error,
  };
};

export const filterCharacters = payload => {
  return {
    type: FILTER_CHARACTERS,
    payload,
  };
};

export const sortIds = payload => {
  return {
    type: SORT_IDS,
    payload,
  };
};

export const searchNames = payload => {
  return {
    type: SEARCH_NAME,
    payload,
  };
};
