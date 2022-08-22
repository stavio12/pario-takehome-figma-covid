import { GeneralReport, States } from "../../utils/reducers";

export const getGeneralReport = (report: GeneralReport) => {
  return (dispatch: any) => {
    dispatch({
      type: "GET-GENERAL-REPORT",
      payload: report,
    });
  };
};

export const getQueryID = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: "QUERY-ID",
      payload: id,
    });
  };
};

export const loader = (loading: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: "LOADER",
      payload: loading,
    });
  };
};

export const getState = (state: States) => {
  return (dispatch: any) => {
    dispatch({
      type: "GET-STATE",
      payload: state,
    });
  };
};
