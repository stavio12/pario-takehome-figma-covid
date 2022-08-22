import { initialState } from "../../utils/reducers";

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET-GENERAL-REPORT":
      return { ...state, generalReport: action.payload };
    case "QUERY-ID":
      return { ...state, queryID: action.payload };
    case "GET-STATE":
      return { ...state, states: action.payload };
    case "LOADER":
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};

export default reducer;
