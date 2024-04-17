import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FullPage from "./FullPage/FullPage";

const SpecificJob = ({ valuename }) => {
  const {
    _id,
    id,
    companyname,
    city,
    job_tital,
    money,
    office_time,
    vacancies,
    datetime,
  } = valuename;

  return (
    <div className="m-2" style={{ fontFamily: "Raleway" }}>
  <div
    className="bg-dark text-white rounded p-3 "
    style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
  >
    <div className="flex-grow">
      <div className="text-center">
        <h5 className="text-blue-500">{companyname}</h5>
        <p>{city}</p>
      </div>
      <hr />
      <div>
        <p>
          <span>Job title</span> : <span>{job_tital}</span>
        </p>
      </div>
      <div>
        <p>
          <span>Vacancy</span> :{" "}
          <span style={{ color: "#f0560e" }}>{vacancies}</span>
        </p>
      </div>
      <div>
        <p>
          <span>Salary</span> :{" "}
          <span>
            <span style={{ color: "tomato" }}>{money}</span> BDT Monthly
          </span>
        </p>
      </div>
      <div>
        <p>
          <span>Office Time</span> :{" "}
          <span style={{ color: "green" }}>{office_time}</span>
        </p>
      </div>
      <div>
        <p>
          <span>Location</span> : <span>{city}</span>
        </p>
      </div>
      <div>
        <p>
          <span>Job title</span> : INTERNSHIP
        </p>
      </div>
      <div>
        <p>
          <span>Start Date</span> :{" "}
          <span style={{ color: "red" }}>{datetime}</span>
        </p>
      </div>
    </div>
    <div className="text-center mt-auto">
      <Link to={`/intern-find/${_id}`}>
      <button className=" bg-blue-700 text-white p-1 rounded shadow-sm">
        Intern Details
      </button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default SpecificJob;
