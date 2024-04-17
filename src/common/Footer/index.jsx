import React from "react";
import "../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from '@fortawesome/free-brand-svg-icons'

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Legacy</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <a href="#">Job openings</a>
                </li>
                <li>
                  <a href="#">Employee success</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="#" className="icon-social-facebook ">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "white" }}
                />{" "}
              </a>

              <a href="#" className="icon-social-Linkedin">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "black" }} />{" "}
              </a>

              <a href="#" className="icon-social-twitter">
                <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
              </a>

              <a href="#" className="icon-social-telegram">
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  style={{ color: "white" }}
                />
              </a>

              <p className="copyright">Nayeem Mehedi © 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
