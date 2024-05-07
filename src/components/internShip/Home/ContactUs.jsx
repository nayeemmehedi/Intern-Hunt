import React from "react";
import "../../../styles/contactus.css";
import { useForm } from "react-hook-form";
import img from "../../../utils/illustration/3593987.jpg";
import LazyLoad from "react-lazyload";
// import emailjs from 'emailjs-com';

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  // };

  //  function sendEmail(e) {
  //    e.preventDefault();

  //   emailjs.sendForm('service_vj837z2', 'template_xc48do3', e.target, 'user_0GfPm5L3BfQzMtizN0Jp3')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  return (
    <div className="fullform mt-5 pt-5" style={{ fontFamily: "Besley" }}>
      <h2 className="text-center my-5">
        <span style={{ color: "purple" }}>Contact</span> Us
      </h2>
      <div className="row">
        <div className="d-flex justify-content-end col-sm-12 col-md-6 col-lg-6  ">
        <LazyLoad height={200}>
          <img
            className="pb-5 "
            src={img}
            style={{ height: "400px", width: "400px" }}
            alt=""
          />
          </LazyLoad>
        </div>

        <div className="col-sm-10 col-md-6 col-lg-6 ">
          <div className="firstForm mx-5">
            <form>
              <label>Name</label>

              <input type="text" name="name" placeholder="name" required />

              <label>Number</label>
              <input
                type="number"
                placeholder="01756432****"
                name="number"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                placeholder="bluebill1049@hotmail.com"
                type="text"
                name="email"
                required
              />

              <label htmlFor="text">Text Area</label>
              <textarea placeholder="text" name="message" required />

              {/* <input type="submit" /> */}
              <input type="submit" value="send message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
