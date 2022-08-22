import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "chart.js/auto";
import { Doughnut, Pie } from "react-chartjs-2";
const ViewState = () => {
  const { states } = useSelector((state: any) => state.Covid);
  let { id } = useParams();

  useEffect(() => {
    if (states._id !== id) {
      window.location.href = "/";
    }
  }, []);

  const data = {
    labels: [
      "Total Confirmed Cases",
      "Total Samples Tested",
      "Discharged",
      "Deaths",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          states.confirmedCases,
          states.casesOnAdmission,
          states.discharged,
          states.death,
        ],
        backgroundColor: ["#ffc107", "blue", "green", "red"],
        borderColor: ["yellow", "blue", "green", "red"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {" "}
      <section id="ViewState" className="pt-5 mt-5 ">
        <div className="row">
          <div className="col-md-6 pb-4">
            <h4>Total Confirmed Cases:</h4>
            <h1 className="text-warning">{states.confirmedCases}</h1>
          </div>
          <div className="col-md-6 pb-4">
            <h4>Total Samples Tested:</h4>
            <p className="h1 fw-bolder text-primary">
              {states.casesOnAdmission}
            </p>
          </div>
          <div className="col-md-6 pb-4">
            <h4>Discharged:</h4>
            <p className="h1 fw-bolder text-success">{states.discharged}</p>
          </div>
          <div className="col-md-6 pb-4">
            <h4>Deaths:</h4>
            <p className="h1 fw-bolder text-danger">{states.death}</p>
          </div>
        </div>

        <div className="card p-5 mt-5">
          <Doughnut data={data} />
        </div>
      </section>{" "}
    </>
  );
};

export default ViewState;
