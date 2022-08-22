import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { States } from "../utils/reducers";

const CasesGraph = () => {
  const { generalReport } = useSelector((state: any) => state.Covid);

  const [states, setStates] = useState<string[]>([]);
  const [death, setDeath] = useState<number[]>([]);

  useEffect(() => {
    let temStates: string[] = [];
    let temDeath: number[] = [];
    generalReport.states.map(
      (state: States) => (
        temStates.push(state.state), temDeath.push(state.death)
      )
    );
    setStates(temStates);
    setDeath(temDeath);
  }, []);

  return (
    <>
      {" "}
      <section id="CasesGraph">
        <div className="card">
          <Bar
            datasetIdKey="id"
            data={{
              labels: [...states],
              datasets: [
                {
                  backgroundColor: [
                    // @ts-ignore
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                  ],
                  data: [...death],
                },
              ],
            }}
          />
        </div>
      </section>{" "}
    </>
  );
};

export default CasesGraph;
