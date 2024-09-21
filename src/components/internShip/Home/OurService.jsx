import React from "react";
import imgA from "../../../utils/illustration/interview.jpg";
import "../../../styles/service.css";
import LazyLoad from "react-lazyload";
import FramerMotion from "../../../utils/FramerMotion";

const OurService = () => {
  return (
    <FramerMotion>
    <div className="thirdc2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
        <LazyLoad height={400}>
          <img className="imgstyle ms-4" src={imgA} alt="" />
          </LazyLoad>
        </div>

        <div className=" col-sm-12 col-md-6 col-lg-6 imgstylemessage">
          <h1 className="boom">Our Services</h1> <br />
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <p className="boom">
                It's supposed to streamline the job search process by
                eliminating the need to visit dozens of different sites to find
                relevant opportunities. Another benefit is the email feature,
                which sends updates straight to your inbox. we assist job
                seekers and employers to achieve employment goals. The website
                works with community partners to respond to emerging needs and
                opportunities with creativity and professionalism. we asure you
                good carrier oriented suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </FramerMotion>
  );
};

export default OurService;
