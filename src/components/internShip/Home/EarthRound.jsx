import React from "react";
import earthVideo from "../../../utils/earth.mp4";
import "../../../styles/earth.css";

// import {Link} from "react-router-dom"

const EarthRound = () => {
  return (
    <div>
      <div>
        <div className="heroContainer">
          <div className="heroBg">
            <video className="vdo" autoPlay muted loop>
              <source src={earthVideo} type="video/mp4" />
            </video>
          </div>

          <div className="heroContent text-white text-center">
            
             <div className="text-4xl font-bold "> 
             <span className="text-blue-800 " >Internship </span> in  Bangladesh 
             </div>
           
            <br />
            <h6 className="text-2xl font-thin">
              Our mission is to provide students, recent graduates and young
              professionals of all backgrounds with opportunities for national
             work experience.
            </h6>{" "}
            <br />
            <div>
              <button className="px-4 py-3 rounded bg-blue-800 text-sm mt-16">Explore Intern</button>
            </div>
            {/* <Link to="./intern-job">    <button className="btn btn-lg" style={{ backgroundColor: 'rgb(73, 180, 194)', }}>Intern Page <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthRound;


