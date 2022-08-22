import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { states } = useSelector((state: any) => state.Covid);

  return (
    <>
      <header>
        <div className="bg-light px-5 py-3 mt-5">
          {window.location.pathname === "/" ? (
            <h5>COVID-19 Coronavirus Pandemic</h5>
          ) : (
            <h5 className="px-5">
              <Link to="/">Home</Link> / <Link to="/">States</Link> /{" "}
              {states.state}
            </h5>
          )}
        </div>
        <small>Last updated: August 22, 2022, 11:46 GMT</small>
      </header>
    </>
  );
};

export default Header;
