import React, { useState, useEffect, useRef } from "react";

import lottie from "lottie-web";
import LottieFile from "../../../common/LottiFile";
import Company from "../../../utils/animation/company.json";
// import Lottie from "react-lottie";

// import work from "./69266-work.json"

const Home = () => {
  //   let user = JSON.parse(localStorage.getItem("user"));

  //   const [company, setcompany] = useState([]);
  //   useEffect(() => {
  //     fetch(`${localhost}/company`)
  //       .then((res) => res.json())
  //       .then((data) => setcompany(data));
  //   }, []);

  //   let isDEVELOPER = company.some((value) => value.email === user.email);

  //   let iscompany = company.filter((value) => value.email === user.email);

  //   const container = useRef(null);

  //   useEffect(() => {

  //     lottie.loadAnimation({
  //       container: container.current, // Required

  //       renderer: "svg", // Required
  //       loop: true, // Optional
  //       autoplay: true, // Optional
  //       animationData: require("./69266-work.json"), // Name for future reference. Optional.
  //     });

  //   }, [lottie.loadAnimation]);

  return (
    <div className="bg-dark text-white py-4">
      <div>
        <h1 className="text-center lg:text-start">
          Welcome to{" "}
          <span
            style={{
              color: "blue",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            {" "}
            {"Bnagladesh"}
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
        <div className="col-span-1 md:col-span-4 lg:col-span-3">
          <div className="mt-3 pt-3 ps-5">
            <h2>Guidlines here </h2>
            <hr />
            <p>6 part here </p>
            <ol>
              <li>OverView</li>

              <li>Job Post</li>
              <li>Delete Cv</li>

              <li>Show Cv</li>
              <li>Approve Cv</li>

              <li>Approve Success</li>
              <li>Logged Out</li>
            </ol>

            <div>
              <hr />
              <p className="font-semibold text-xl">Job Post</p>
              <p className="font-extralight text-slate-200">
                Post Job on [Your Website Name]. Share company vacancies
                professionally. Follow guidelines to ensure clear job
                descriptions and attract qualified candidates efficiently.
              </p>
              <br /> <hr />
              <h3>Delete CV</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus perferendis autem voluptates modi nobis delectus
                nesciunt maiores! Deleniti, reprehenderit laboriosam.
              </p>
              <h3>Show CV</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis est dolor et suscipit quisquam culpa numquam enim,
                assumenda doloremque obcaecati!
              </p>
              <br /> <hr />
              <h3>Approve Cv</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis est dolor et suscipit quisquam culpa numquam enim,
                assumenda doloremque obcaecati!
              </p>
              <br /> <hr />
              <h3>Approve Success</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis est dolor et suscipit quisquam culpa numquam enim,
                assumenda doloremque obcaecati!
              </p>
              <br /> <hr />
              <h3>Logged Out</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis est dolor et suscipit quisquam culpa numquam enim,
                assumenda doloremque obcaecati!
              </p>
              <br /> <hr />
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 lg:col-span-5">
          <div className="">
            {/* <div
                style={{ height: "500px" }}
                className="container"
                ref={container}
              ></div> */}
            <div className="">
              <LottieFile height={"600px"} value={Company} />

              {/* <LottieFile options={defaultOptions} height={600} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
