import React from "react";
import CasesGraph from "../components/CasesGraph";
import GeneralCases from "../components/GeneralCases";
import StateCasesTable from "../components/StateCasesTable";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <section id="Home">
        <div className="pt-5 mt-5 d-flex flex-column gap-5">
          <GeneralCases />
          <CasesGraph />
          <StateCasesTable />
        </div>
      </section>
    </>
  );
};

export default Home;
