import { LOAD_DATA_SUCCESS, LOAD_DATA_FAIL, FILTER_CHARACTERS, SORT_IDS, SEARCH_NAME, filterOptions } from "../../utils/constants";

let initialList = [];
let filterObject = {};

const filterList = initialList => {
  return initialList.filter(list => {
    return (filterObject.gender.length ? filterObject.gender.includes(list.gender) : true) &&
      (filterObject.species.length ? filterObject.species.includes(list.species) : true) &&
      (filterObject.origin.length ? filterObject.origin.includes(list.origin.name.toLowerCase()) : true);
  });
};

const populateFilters = () => {
  filterOptions.map(option => {
    return filterObject[`${option.id}`] = [];
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
      const { elem: { name, value, checked }, label } = action.payload;
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
      const filteredResults = filterList(initialList);
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
      const { results } = state;
      let updatedResults = results;
      if (payload) {
        updatedResults = results.filter(character => {
          const name = character.name.toLowerCase();
          const searchString = payload.toLowerCase().trim();
          return name === searchString || name.split(" ").includes(searchString);
        });
      }
      return { ...state, results: updatedResults };
    }
    default:
      return state;
  }
};

export default appReducer;
