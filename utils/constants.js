export const LOAD_DATA = "LOAD_DATA";
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_FAIL = "LOAD_DATA_FAIL";
export const FILTER_CHARACTERS = "FILTER_CHARACTERS";
export const SORT_IDS = "SORT_IDS";
export const SEARCH_NAME = "SEARCH_NAME";
export const ENDPOINT = "https://rickandmortyapi.com/api/character/";

export const texts = {
  title: "Rick and Morty",
  filter: "Filters",
  selectedFilter: "Selected Filters",
  search: "Search by Name",
  searchCTA: "Search",
  error: "Sorry... Something went wrong. Please come back later",
  empty: "No characters found",
};

export const properties = [
  {
    label: "Status",
    key: "status"
  },
  {
    label: "Species",
    key: "species"
  },
  {
    label: "Gender",
    key: "gender"
  },
  {
    label: "Origin",
    key: {
      firstLevel: "origin",
      second: "name"
    }
  },
  {
    label: "Last location",
    key: {
      firstLevel: "location",
      second: "name"
    }
  },
];

export const sortOptions = {
  label: "Sort by ID",
  options: ["Ascending", "Descending"]
};

export const filterOptions = [
  {
    label: "Species",
    id: "species",
    options: [
      { id: "Human", label: "Human" },
      { id: "Mythology", label: "Mythology" },
      { id: "Other species...", label: "Other species..." }
    ]
  },
  {
    label: "Gender",
    id: "gender",
    options: [
      { id: "Male", label: "Male" },
      { id: "Female", label: "Female" },
    ]
  },
  {
    label: "Origin",
    id: "origin",
    options: [
      { id: "unknown", label: "Unknown" },
      { id: "Post-Apocalyptic Earth", label: "Post-Apocalyptic Earth" },
      { id: "Nupitia 4", label: "Nupitia 4" },
      { id: "Other origins...", label: "Other origins..." },
    ]
  },
];