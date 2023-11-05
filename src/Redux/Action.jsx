import * as TYPES from "./Type"
export const setFilterText = (filterText) => ({
    type: TYPES.SET_FILTER_TEXT,
    payload: filterText,
  });