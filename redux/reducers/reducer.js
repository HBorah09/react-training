import { LOAD_DATA_SUCCESS, LOAD_DATA_FAIL, FILTER_CHARACTERS, SORT_IDS, SEARCH_NAME, filterOptions } from "../../utils/constants";

let initialList = [];
let filterObject = {};
let searchString = "";

const filterItems = (filterProp, itemProp) => {
  return filterProp.includes(itemProp);
};

const filterList = (initialList, filter) => {
  let finalList = initialList.filter(list => {
    return (filter.gender.length ? filter.gender.includes(list.gender) : true) &&
      (filter.species.length ? filterItems(filter.species, list.species) : true) &&
      (filter.origin.length ? filterItems(filter.origin, list.origin.name.toLowerCase()) : true);
  });
  if (searchString) {
    finalList = searchNames(finalList, searchString);
  }
  return finalList;
};

const populateFilters = () => {
  filterOptions.map(option => {
    return filterObject[`${option.id}`] = [];
  });
};

const searchNames = (initialList, payload) => {
  return initialList.filter(character => {
    const name = character.name.toLowerCase();
    const searchString = payload.toLowerCase().trim();
    return name === searchString || name.split(" ").includes(searchString);
  });
};

const appReducer = (state = { filters: [] }, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      initialList = action.data.results;
      return { ...state, ...action.data, initialList };
    case LOAD_DATA_FAIL:
      return { ...state, error: action.error };
    case FILTER_CHARACTERS: {
      const { elem: { name, value, checked } } = action.payload;
      const { initialList } = state;
      if (!filterObject[`${name}`]) {
        populateFilters();
      }
      const updatedFilter = { ...filterObject };
      if (checked) {
        updatedFilter[`${name}`].push(value);
      } else {
        const updatedValues = updatedFilter[`${name}`].filter(val => val !== value);
        updatedFilter[`${name}`] = updatedValues;
      }
      filterObject = { ...updatedFilter };
      const filteredResults = filterList(initialList, updatedFilter);
      return { ...state, filters: updatedFilter, results: filteredResults };
    }
    case SORT_IDS: {
      const { results } = state;
      const getOrder = (first, second) => (action.payload === "Ascending" ? first.id - second.id : second.id - first.id);
      const updatedResult = results.sort((first, second) => {
        return getOrder(first, second);
      });
      return { ...state, results: updatedResult, order: action.payload };
    }
    case SEARCH_NAME: {
      const { payload } = action;
      const { initialList, filters } = state;
      let updatedResults = initialList;
      searchString = payload;
      let filteredResults = initialList;
      if (filters) {
        filteredResults = filterList(initialList, filters);
      }
      if (payload) {
        updatedResults = searchNames(filteredResults, payload);
      }
      return { ...state, results: updatedResults };
    }
    default:
      return state;
  }
};

export default appReducer;
