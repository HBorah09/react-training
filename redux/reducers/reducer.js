import { LOAD_DATA_SUCCESS, LOAD_DATA_FAIL, FILTER_CHARACTERS, SORT_IDS, SEARCH_NAME } from "../../utils/constants";

let initialList = [];
const filterList = (filters, results, initialList, name) => {
  if (!filters.length) {
    return initialList;
  }
  const filtered = initialList.filter(el => {
    return filters.some(filter => {
      const characterName = el[`${name}`].name ? el[`${name}`].name : el[`${name}`];
      return filter[`${name}`] === characterName.toLowerCase();
    });
  });

  return filtered;
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
      const { initialList, filters, results } = state;
      let updatedFilters = filters || [];
      if (checked) {
        updatedFilters.push({ [name]: value, label });
      } else {
        updatedFilters = filters.filter(a => {
          return !(a[`${name}`] === value.toLowerCase() && Object.prototype.hasOwnProperty.call(a, `${name}`));
        });
      }
      const filteredResults = filterList(updatedFilters, results, initialList, name);
      return { ...state, filters: updatedFilters, results: filteredResults };
    }
    case SORT_IDS: {
      const { results } = state;
      const getOrder = (a, b) => (action.payload === "Ascending" ? a.id - b.id : b.id - a.id);
      const updatedResult = results.sort((a, b) => {
        return getOrder(a, b);
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
