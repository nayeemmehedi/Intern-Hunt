import React from "react";
import svg from "../../../../../public/image/intern.jpg";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import WrapTextIcon from "@mui/icons-material/WrapText";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import SpeakerPhoneIcon from "@mui/icons-material/SpeakerPhone";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import { Link } from "react-router-dom";
import "../../../../styles/internDetails.css";

const EveryDetails = ({ newvalue }) => {
  const {
    _id,
    skill,

    companyname,
    your_role,
    company_description,
    city,
    job_tital,
    money,
    office_time,
    vacancies,
    datetime,
    you_have,
  } = newvalue;
  return (
    <div className="">
      {" "}
      <h4 className="font-extrabold text-center my-4 w-[70%]">
        <span className="text-stone-600">INTERN </span> Details page
        <hr />
      </h4>
      <div className="grid  grid-cols-12 mx-3 px-3    lg:w-[90%] lg:mx-auto lg:gap-x-14">
        <div
          className="col-span-12 lg:col-span-8 ps-2 lg:px-6 "
          style={{ boxShadow: "0px 10px 10px ", backgroundColor: "#e6e3e8" }}
        >
          <h5 className="text-center py-4 font-semibold">
            {job_tital} at {companyname}
          </h5>

          <h6 className="font-extrabold">
            {" "}
            <FormatAlignLeftIcon /> {companyname}
          </h6>{" "}
          <hr />
         
          <h5>
            {" "}
            {/* <AccountBalanceIcon style={{ color: "#67c1c7" }} /> */}
             #{job_tital}
          </h5>
         
          <h6>
            <PowerSettingsNewIcon style={{ color: "#67c1c7" }} /> Number of
            openings :  {vacancies}
          </h6>
          
          <h6>
            {" "}
            <SettingsInputAntennaIcon style={{ color: "#67c1c7" }} /> About
            Infinity Business Solutions
          </h6>
          <div className="ms-3">
          <p className="">Description :</p>
          <hr className="w-32" />
          <p className="">{company_description}</p>
          </div>
        
          <h6>
            <WrapTextIcon style={{ color: "#67c1c7" }} /> About the job
          </h6>
         <div className="ms-3">
         <h6 className="">key responsibilities :</h6>
          <hr className="w-32"/>
          <p className="">{your_role}</p>
         </div>
          <h6>
            <SpeakerPhoneIcon style={{ color: "#67c1c7" }} /> Skill(s) required
          </h6>
          <p className="ms-3">{skill} </p>
          <h6>
            <SportsHockeyIcon style={{ color: "#67c1c7" }} /> Who can apply
          </h6>
          <p className="">
            <div>
              {you_have
                ? you_have.map((value) => (
                    <>
                      <p> {value.basic}</p>
                      <p>{value.must}</p>
                      <p>{value.familiarity}</p>
                    </>
                  ))
                : null}
            </div>
          </p>
          <h6 className="">
            <LocalBarIcon style={{ color: "#67c1c7" }} /> Educational
            Qualifications
          </h6>
          <div className="font-thin ms-3">
            Bachelor of Science (BSc) in Computer Science & Engineering{" "}
            
          </div>
          <h6 className="">
            <DonutSmallIcon style={{ color: "#67c1c7" }} /> Job Type
          </h6>
          <p className="font-thin ms-3"> Internship</p>
          <h6 className="">
            <DonutSmallIcon style={{ color: "#67c1c7" }} /> Office Time
          </h6>
          <p className="ms-3"> {office_time}</p>
          <h6 className="">
            <DonutSmallIcon style={{ color: "#67c1c7" }} /> Salary
          </h6>
          <div className="ms-3">
          <h6 className=""> Probation: </h6>
          <p className=""> Duration: 3 months </p>
          <p className=""> Salary during probation: {money}</p>
          </div>
          <h6 className="">
            <PlaceIcon style={{ color: "#67c1c7" }} /> City
          </h6>
          <p className="ms-3"> {city}</p>
          <h6 className="">
            <DateRangeIcon style={{ color: "#67c1c7" }} /> Start date
          </h6>
          <p className="ms-3"> {datetime}</p>
          <div className="text-center nayeem">
            <Link to={`/apply-intern/${_id}`}>
              {" "}
              <button className="button">Apply Intern</button>
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 p-4 my-16 lg:p-4 lg:my-0 ">
          <div>
            <div className="">
              <h4>
                <BarChartRoundedIcon style={{ color: "#346f73" }} /> Summary
                This Job
              </h4>
              <hr />
              <h3>Start date</h3>
              <p>{datetime}</p>

              <h6>
                <LocalBarIcon style={{ color: "#346f73" }} /> Skill
              </h6>
              <p className="">{skill} </p>

              <h6>
                {" "}
                <DonutSmallIcon style={{ color: "#346f73" }} />
                Vaccencies
              </h6>
              <p className="">{vacancies}</p>
              <h6>
                <PlaceIcon style={{ color: "#346f73" }} /> Place
              </h6>
              <p className="">{city}</p>
              <h4>
                <FormatAlignLeftIcon style={{ color: "#346f73" }} />
                Job Type
              </h4>
              <p>InternSHIP</p>
            </div>
          </div>
        </div>

       
      </div>
      <img src={svg} alt="" />
    </div>
  );
};

export default EveryDetails;
