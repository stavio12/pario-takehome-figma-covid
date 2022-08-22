import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { States } from "../utils/reducers";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const CasesTable = () => {
  const { generalReport } = useSelector((state: any) => state.Covid);
  const dispatch = useDispatch();
  const { getState } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <section id="CasesTable">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">State</th>
              <th scope="col">Confirmed Cases</th>
              <th scope="col">Cases on Admission</th>
              <th scope="col">Discharged</th>
              <th scope="col">Death</th>
            </tr>
          </thead>
          {generalReport?.states.map((state: States, index: number) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link to={`/${state._id}`} onClick={() => getState(state)}>
                    {state.state}
                  </Link>
                </td>
                <td>{state.confirmedCases}</td>
                <td>{state.casesOnAdmission}</td>
                <td>{state.discharged}</td>
                <td>{state.death}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    </>
  );
};

export default CasesTable;
