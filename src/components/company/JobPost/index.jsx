// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// import { useMutation } from "@tanstack/react-query";

// import "../../../styles/form.css";
// import { jobPost } from "../../../api/Company";
// import LoadingPage from "../../../common/ResponseStatus/LoadingPage";
// // import { localhost } from "../../../main.jsx";

// const JobPost = () => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     mode: "onChange",
//   });

//   const navigate = useNavigate();

//   const { mutateAsync, isLoading, isSuccess, isError, error, data } =
//     useMutation({
//       mutationFn: jobPost,
//     });

//   const onSubmit = async (data) => {
//     try {
//       const company_id = localStorage.getItem("company_id");
//       const company_name = localStorage.getItem("name");

//       const formData = { ...data, company_name, company_id };

//       const value = await mutateAsync(formData);

//       setTimeout(() => {
//         window.location.reload();
//       }, 1000);
//     } catch (error) {}
//   };

//   if (isLoading) {
//     <div>
//       <LoadingPage></LoadingPage>
//     </div>;
//   }

//   return (
//     <div className="formcv py-4">
//       <div className="text-2xl py-3 text-white font-extrabold text-center">
//         Post New Job Circular
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="job_title" style={{ color: "#95e38f" }}>
//           Job Tital{" "}
//         </label>
//         <input
//           placeholder="job title"
//           {...register("job_title", {
//             required: "this is a required",
//             minLength: {
//               value: 5,
//               message: "Min length is 5",
//             },
//           })}
//         />
//         {errors.job_tital && <p>{errors.job_tital.message}</p>}

//         <label htmlFor="company_description" style={{ color: "#95e38f" }}>
//           Company Description
//         </label>
//         <input
//           placeholder="company description"
//           {...register("company_description", {
//             required: "this is a required",
//             minLength: {
//               value: 40,
//               message: "Min length is 40",
//             },
//           })}
//         />
//         {errors.company_description && (
//           <p>{errors.company_description.message}</p>
//         )}

//         <label htmlFor="your_role" style={{ color: "#95e38f" }}>
//           Role Seekers{" "}
//         </label>
//         <input
//           placeholder="role job"
//           {...register("role_job", {
//             required: "this is a required",
//           })}
//         />
//         {errors.your_role && <p>{errors.your_role.message}</p>}

//         <label htmlFor="skill" style={{ color: "#95e38f" }}>
//           Skill{" "}
//         </label>
//         <input
//           placeholder="skill"
//           {...register("skill", {
//             required: "this is a required",
//             minLength: {
//               value: 5,
//               message: "Min length is 5",
//             },
//           })}
//         />
//         {errors.skill && <p>{errors.skill.message}</p>}

//         <label htmlFor="office_time" style={{ color: "#95e38f" }}>
//           Office Time{" "}
//         </label>
//         <input
//           placeholder="office time"
//           {...register("office_time", {
//             required: "this is a required",
//             minLength: {
//               value: 5,
//               message: "Min length is 5",
//             },
//           })}
//         />
//         {errors.office_time && <p>{errors.office_time.message}</p>}

//         <label htmlFor="vacancies" style={{ color: "#95e38f" }}>
//           Vacancies
//         </label>
//         <input
//           placeholder="vacancies"
//           {...register("vacancies", {
//             required: "this is a required",
//             maxLength: {
//               value: 10,
//               message: "Max length is 10",
//             },
//           })}
//         />
//         {errors.vacancies && <p>{errors.vacancies.message}</p>}

//         <label htmlFor="city" style={{ color: "#95e38f" }}>
//           City
//         </label>
//         <input
//           placeholder="city"
//           {...register("city", {
//             required: "this is a required",
//             minLength: {
//               value: 2,
//               message: "Min length is 2",
//             },
//           })}
//         />
//         {errors.city && <p>{errors.city.message}</p>}

//         <label htmlFor="datetime" style={{ color: "#95e38f" }}>
//           Dead Line
//         </label>
//         <input
//           placeholder="deadtime"
//           type="date"
//           {...register("deadtime", {
//             required: "this is a required",
//             minLength: {
//               value: 2,
//               message: "Min length is 2",
//             },
//           })}
//         />
//         {errors.datetime && <p>{errors.datetime.message}</p>}

//         <label htmlFor="money" style={{ color: "#95e38f" }}>
//           Salary
//         </label>
//         <input
//           placeholder="money"
//           {...register("money", {
//             required: "this is a required",
//             minLength: {
//               value: 2,
//               message: "Min length is 2",
//             },
//           })}
//         />
//         {errors.money && <p>{errors.money.message}</p>}

//         <input
//           className="bg-blue-700 hover:bg-slate-500 border-none text-white"
//           type="submit"
//         />
//       </form>

//       <div>
//         {isSuccess && (
//           <div className="text-green-800 font-light text-3xl py-3  text-center">
//             Succesfully Logged in
//           </div>
//         )}

//         {isError && (
//           <div className="text-red-600 font-light text-3xl py-3 text-center">
//             {error.data.message}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobPost;

import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { jobPost } from "../../../api/Company";
import LoadingPage from "../../../common/ResponseStatus/LoadingPage";

const JobPostForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const { mutateAsync, isLoading, isSuccess, isError, error, data } =
    useMutation({
      mutationFn: jobPost,
    });

  const onSubmit = async (formData) => {
    try {
      const company_id = localStorage.getItem("company_id");
      const company_name = localStorage.getItem("name");

      const data = { ...formData, company_name, company_id };

      await mutateAsync(data);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {}
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-gray-400 py-12">
      <div className="max-w-3xl mx-auto bg-slate-300 shadow rounded-lg p-8 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Post New Job Circular
        </h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="job_title"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Title
              </label>
              <input
                placeholder="e.g. Software Engineer"
                {...register("job_title", {
                  required: "Job title is required",
                  minLength: {
                    value: 5,
                    message: "Job title must be at least 5 characters",
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.job_title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.job_title.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                placeholder="Enter company description"
                rows={3}
                {...register("company_description", {
                  required: "Company description is required",
                  minLength: {
                    value: 40,
                    message: "Description must be at least 40 characters",
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.company_description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.company_description.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="role_job"
                className="block text-gray-700 font-bold mb-2"
              >
                Role Seekers
              </label>
              <input
                placeholder="e.g. Frontend Developer"
                {...register("role_job", {
                  required: "Role is required",
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.role_job && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role_job.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="skill"
                className="block text-gray-700 font-bold mb-2"
              >
                Required Skills
              </label>
              <input
                placeholder="e.g. React, JavaScript, HTML, CSS"
                {...register("skill", {
                  required: "Skills are required",
                  minLength: {
                    value: 5,
                    message: "Skills must be at least 5 characters",
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.skill && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.skill.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="office_time"
                className="block text-gray-700 font-bold mb-2"
              >
                Office Time
              </label>
              <input
                placeholder="e.g. 9 AM - 5 PM"
                {...register("office_time", {
                  required: "Office time is required",
                  minLength: {
                    value: 5,
                    message: "Office time must be at least 5 characters",
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.office_time && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.office_time.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="vacancies"
                className="block text-gray-700 font-bold mb-2"
              >
                Vacancies
              </label>
              <input
                type="number"
                placeholder="Number of vacancies"
                {...register("vacancies", {
                  required: "Vacancies are required",
                  max: {
                    value: 100,
                    message: "Maximum vacancies allowed is 100",
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.vacancies && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.vacancies.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-gray-700 font-bold mb-2"
              >
                City
              </label>
              <input
                placeholder="e.g. New York"
                {...register("city", {
                  required: "City is required",
                  minLength: {
                    value: 2,
                    message: "City must be at least 2 characters",
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="deadtime"
                className="block text-gray-700 font-bold mb-2"
              >
                Deadline
              </label>
              <input
                type="date"
                {...register("deadtime", {
                  required: "Deadline is required",
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.deadtime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.deadtime.message}
                </p>
              )}
            </div>

            {/* Salary */}
            <div>
              <label
                htmlFor="money"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <input
                // type="number"
                placeholder="e.g. 50000"
                {...register("money", {
                  required: "Salary is required",
                  min: {
                    value: 10000,
                    message: "Minimum salary should be 10000",
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.money && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.money.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Post Job
            </button>
          </div>
        </form>

        {isSuccess && (
          <div className="text-green-500 font-bold text-center mt-4">
            Job posted successfully!
          </div>
        )}

        {isError && (
          <div className="text-red-500 font-bold text-center mt-4">
            {error.data.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPostForm;
