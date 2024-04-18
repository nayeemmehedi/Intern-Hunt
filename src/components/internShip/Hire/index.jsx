import React, { useState } from "react";
// import { localhost } from "../../main.jsx";
import congratulation from "../../../utils/animation/congratulation.json";
import LottieFile from "../../../common/LottiFile";

const Hire = () => {
  const [student, setStudent] = useState([
    {
      companyname: "Nayeem",
      companymail: "boyneel@gmail.com",
      position:"forntend"
    },
    {
      companyname: "Nayeem",
      companymail: "boyneel@gmail.com",
      position:"forntend"

    },
    {
      companyname: "Nayeem",
      companymail: "boyneel@gmail.com",
      position:"forntend"

    },
    {
      companyname: "Nayeem",
      companymail: "boyneel@gmail.com",
      position:"forntend"

    },
  ]);

  //   let user = JSON.parse(localStorage.getItem("user"));

  //   useEffect(() => {
  //     fetch(`${localhost}/successStudent/${user.email}`)
  //       .then((response) => response.json())
  //       .then((data) => setStudent(data));
  //   }, []);

  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,

  //     animationData: greetings,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };

  return (
    <div className="bg-slate-300">
     
      <div className="row">
        <h3 className="p-5">
          <span className="text-yellow-900">Total company</span>
          <span> wants u : {student.length}</span>
        </h3>


         {student.length > 0 ? (
        <div>
          <LottieFile height={"250px"}  value={congratulation} />
        </div>
      ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {student?.length > 0 ? (
            
            student?.map((v) => (
              <div className="shadow-xl m-2 p-4">
                <div className="">
                  {/* <small className="">You are selected...</small> */}
                  <div className="">
                    <h6 className="">
                      Company name :{" "}
                      <span style={{ color: "blue" }}>{v.companyname}</span>
                    </h6>
                    <h6>
                      company email :{" "}
                      <span style={{ color: "blue" }}>{v.companymail}</span>
                    </h6>

                    <p>Position : 
                      <span style={{ color: "blue" }}> {v.position}</span>

                    </p>
                   
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h5 className="text-center p-5">
                Improve your skill and apply more .Hopefully u will{" "}
                <span style={{ color: "red", fontSize: "30px" }}>
                  get an Intern
                </span>
                ...
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hire;


 {/* {student.length > 0 ? (
        <div>
          <LottieFile style={{ height: "100px" }} value={congratulation} />
        </div>
      ) : null} */}

