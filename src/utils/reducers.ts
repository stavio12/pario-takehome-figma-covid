export interface Action<T> {
  type: T;
}

export interface GeneralReport {
  totalSamplesTested: string;
  totalConfirmedCases: number;
  totalActiveCases: number;
  discharged: number;
  death: number;
  states: Array<States>;
}

export interface States {
  state: string;
  _id: string;
  confirmedCases: number;
  casesOnAdmission: number;
  discharged: number;
  death: number;
}

interface StateType {
  queryID: number;
  generalReport: GeneralReport;
  states: States;
  loader: boolean;
}

export const initialState: StateType = {
  queryID: 1,
  generalReport: {
    totalSamplesTested: "",
    totalConfirmedCases: 0,
    totalActiveCases: 0,
    discharged: 0,
    death: 0,
    states: [],
  },
  states: {
    state: "",
    _id: "",
    confirmedCases: 0,
    casesOnAdmission: 0,
    discharged: 0,
    death: 0,
  },
  loader: true,
};

export interface StateAction
  extends Action<"GET-GENERAL-REPORT" | "QUERY-ID" | "GET-STATE"> {
  payload: {
    queryID: 1;
    generalReport: GeneralReport;
    states: States;
    loader: true;
  };
}

export const reducer = (
  state: StateType,
  action: any | StateAction
): StateType => {
  // eslint-disable-next-line
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
