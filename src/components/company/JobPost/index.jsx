import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../../../styles/form.css";
// import { localhost } from "../../../main.jsx";

const JobPost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    // fetch(`${localhost}/addJob`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     alert("Your registration succeful");

    //     navigate("/admin");
    //   });
  };

  return (
    <div className="formcv py-4">
      <div className="text-2xl py-3 text-white font-extrabold text-center" >
        Post New Job Circular
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
     

        <label htmlFor="job_tital" style={{ color: "#95e38f" }}>
          Job tital{" "}
        </label>
        <input
          placeholder="job tital"
          {...register("job_tital", {
            required: "this is a required",
            minLength: {
              value: 5,
              message: "Min length is 5",
            },
          })}
        />
        {errors.job_tital && <p>{errors.job_tital.message}</p>}

        <label htmlFor="company_description" style={{ color: "#95e38f" }}>
          Company Description
        </label>
        <input
          placeholder="company description"
          {...register("company_description", {
            required: "this is a required",
            minLength: {
              value: 40,
              message: "Min length is 40",
            },
          })}
        />
        {errors.company_description && (
          <p>{errors.company_description.message}</p>
        )}

        <label htmlFor="your_role" style={{ color: "#95e38f" }}>
          Role Seekers{" "}
        </label>
        <input
          placeholder="your_role"
          {...register("your_role", {
            required: "this is a required",
            minLength: {
              value: 40,
              message: "Min length is 40",
            },
          })}
        />
        {errors.your_role && <p>{errors.your_role.message}</p>}

        <label htmlFor="skill" style={{ color: "#95e38f" }}>
          Skill{" "}
        </label>
        <input
          placeholder="skill"
          {...register("skill", {
            required: "this is a required",
            minLength: {
              value: 5,
              message: "Min length is 5",
            },
          })}
        />
        {errors.skill && <p>{errors.skill.message}</p>}

        <label htmlFor="office_time" style={{ color: "#95e38f" }}>
          Office Time{" "}
        </label>
        <input
          placeholder="office_time"
          {...register("office_time", {
            required: "this is a required",
            minLength: {
              value: 5,
              message: "Min length is 5",
            },
          })}
        />
        {errors.office_time && <p>{errors.office_time.message}</p>}

        <label htmlFor="email" style={{ color: "#95e38f" }}>
         Company Email
        </label>
        <input
          type="text"
          {...register("email", {
            required: "this is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="vacancies" style={{ color: "#95e38f" }}>
          Vacancies
        </label>
        <input
          placeholder="vacancies"
          {...register("vacancies", {
            required: "this is a required",
            maxLength: {
              value: 10,
              message: "Max length is 10",
            },
          })}
        />
        {errors.vacancies && <p>{errors.vacancies.message}</p>}

        <label htmlFor="city" style={{ color: "#95e38f" }}>
          City
        </label>
        <input
          placeholder="city"
          {...register("city", {
            required: "this is a required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.city && <p>{errors.city.message}</p>}

        <label htmlFor="datetime" style={{ color: "#95e38f" }}>
          Dead Line
        </label>
        <input
          placeholder="datetime"
          type="date"
          {...register("datetime", {
            required: "this is a required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.datetime && <p>{errors.datetime.message}</p>}

        <label htmlFor="money" style={{ color: "#95e38f" }}>
          Salary
        </label>
        <input
          placeholder="money"
          {...register("money", {
            required: "this is a required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.money && <p>{errors.money.message}</p>}

        <input className="bg-blue-700 hover:bg-slate-500 border-none text-white" type="submit" />
      </form>
    </div>
  );
};

export default JobPost;