import React from "react";
import { useSelector } from "react-redux";

const GeneralCases = () => {
  const { generalReport } = useSelector((state: any) => state.Covid);

  return (
    <>
      <section id="GeneralCases">
        <div className="row">
          <div className="col-md-6 pb-4">
            <h4>Total Active Cases:</h4>
            <h1 className="text-secondary">{generalReport.totalActiveCases}</h1>
          </div>
          <div className="col-md-6 pb-4">
            <h4>Total Confirmed Cases:</h4>
            <h1 className="text-warning">
              {generalReport.totalConfirmedCases}
            </h1>
          </div>
          <div className="col-md-6 pb-4">
            <h4>Total Samples Tested:</h4>
            <p className="h1 fw-bolder text-primary">
              {generalReport.totalSamplesTested}
            </p>
          </div>
          <div className="col-md-6 pb-4">
            <h4>Discharged:</h4>
            <p className="h1 fw-bolder text-success">
              {generalReport.discharged}
            </p>
          </div>
          <div className="col-md-12 pb-4">
            <h4>Deaths:</h4>
            <p className="h1 fw-bolder text-danger">{generalReport.death}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralCases;
