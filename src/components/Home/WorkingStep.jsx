import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";

// import { Link } from "react-router-dom";

const WorkingStep = () => {
  return (
    // <div className="mt-28 lg:w-[80%] mx-auto">
    //   <h1 className="lg:text-center font-medium my-20">Working Steps</h1>

    //   <div className="grid grid-cols-3 ">

    //     <div className="w-[80%] ">
    //       {/* <Link
    //               className="nav-link active"
    //               aria-current="page"
    //               to="./review"
    //             > */}

    //       <div className="boxMission text-center">
    //         <FontAwesomeIcon
    //           className="pt-2"
    //           icon={faCoffee}
    //           size="3x"
    //           color="#632940"
    //         ></FontAwesomeIcon>
    //       </div>

    //       <br />

    //       <div>
    //         <h5 className="text-red-700">
    //           Review <span className="text-black">Us</span>
    //         </h5>

    //         <small className="text-black">
    //           Your review is so valuable for us .Please review us..
    //         </small>
    //       </div>
    //       {/* </Link> */}
    //     </div>
    //     <div>

    //       {/* <Link className="nav-link"  to="./intern-job"> */}

    //       <div className="w-[80%] ">
    //         <div className=" boxMission text-center">
    //           <FontAwesomeIcon
    //             className="pt-2"
    //             icon={faBug}
    //             size="3x"
    //             color="#5259ab"
    //           ></FontAwesomeIcon>
    //         </div>
    //       </div>

    //       <br />
    //       <div>
    //         <h5>
    //           Apply<span> For Intern</span>{" "}
    //         </h5>

    //         <small>
    //           {" "}
    //           An internship gives a student the opportunity for career
    //           exploration and development
    //         </small>
    //       </div>
    //       {/* </Link> */}
    //     </div>
    //     <div className="w-[80%]">
    //       {/* <Link className="nav-link"  to="./hire"> */}
    //       <div>
    //         <div className="boxMission text-center">
    //           <FontAwesomeIcon
    //             className="pt-2"
    //             icon={faAmbulance}
    //             size="3x"
    //             color="#73452a"
    //           ></FontAwesomeIcon>
    //         </div>
    //       </div>
    //       <br />
    //       <div>
    //         <h5>
    //           Hire <span> You</span>
    //         </h5>
    //         <small>
    //           {" "}
    //           The company selected candidate after the candidate is successful{" "}
    //         </small>
    //       </div>
    //       {/* </Link> */}
    //     </div>
    //   </div>
    // </div>
    <div className="p-5" style={{ fontFamily: "Besley" }}>
      <h1 className="text-center pb-5">Working Steps</h1>
      <div className="row">
        <div className="col-lg-4 col-md-1 col-sm-1 my-4">
          {/* <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./review"
                > */}
          <div className="d-flex justify-content-center">
            <div
              className="text-center"
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "10px ",
                boxShadow: "0 0 5px 4px #c7c6c5",
              }}
            >
              <FontAwesomeIcon
                className="pt-2"
                icon={faCoffee}
                size="3x"
                color="#632940"
              ></FontAwesomeIcon>
            </div>
          </div>
          <br />
          <div className="text-center">
            <h5 style={{ color: "red" }}>
              Review <span style={{ color: "black" }}>Us</span>
            </h5>

            <small style={{ color: "black" }}>
              Your review is so valuable for us .Please review us..
            </small>
          </div>
          {/* </Link> */}
        </div>
        <div className="col-lg-4 col-md-1 col-sm-1 my-4">
          {/* <Link className="nav-link"  to="./intern-job"> */}

          <div className="d-flex justify-content-center">
            <div
              className="text-center"
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "10px ",
                boxShadow: "0 0 5px 4px #c7c6c5",
              }}
            >
              <FontAwesomeIcon
                className="pt-2"
                icon={faBug}
                size="3x"
                color="#5259ab"
              ></FontAwesomeIcon>
            </div>
          </div>
          <br />
          <div className="text-center">
            <h5>
              Apply<span style={{ color: "black" }}> For Intern</span>{" "}
            </h5>

            <small style={{ color: "black" }}>
              {" "}
              An internship gives a student the opportunity for career
              exploration and development
            </small>
          </div>
          {/* </Link> */}
        </div>
        <div className="col-lg-4 col-md-1 col-sm-1 my-4">
          {/* <Link className="nav-link"  to="./hire"> */}
          <div className="d-flex justify-content-center">
            <div
              className="text-center"
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "10px ",
                boxShadow: "0 0 5px 4px #c7c6c5",
              }}
            >
              <FontAwesomeIcon
                className="pt-2"
                icon={faAmbulance}
                size="3x"
                color="#73452a"
              ></FontAwesomeIcon>
            </div>
          </div>
          <br />
          <div className="text-center">
            <h5>
              Hire <span style={{ color: "red" }}> You</span>
            </h5>
            <small style={{ color: "black" }}>
              {" "}
              The company selected candidate after the candidate is successful{" "}
            </small>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
