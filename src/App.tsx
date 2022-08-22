import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./state/index";

import axios from "axios";
import "./App.css";
import Home from "./screens/Home";
import ViewState from "./screens/ViewState";
import Header from "./components/Header";

function App() {
  const state = useSelector((state: any) => state.Covid);

  const dispatch = useDispatch();

  const { getGeneralReport, loader } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    loader(true);

    axios
      .get(`https://covidnigeria.herokuapp.com/api`)
      .then(async (response) => {
        if (response.status === 200) {
          getGeneralReport(response.data.data);
        }
        loader(false);
      });
  }, []);

  return (
    <>
      <div className="container col-6 mx-auto d-flex flex-column justify-content-center align-items-center text-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/" element={<ViewState />} />
        </Routes>{" "}
      </div>
    </>
  );
}

export default App;
