import React from "react";
import "../../styles/popularIntern.css";
import { popularIntern } from "../../utils/fakePopularIntern";
// import { Link } from "react-router-dom";

const PopularIntern = () => {
  return (
    <div className="py-3 my-3-3 text-white">
      <div className="bg-slate-900 w-[97%] mx-auto rounded">
        <h4 className="p-4 font-extrabold text">Popular Intern Job Circular</h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
          {popularIntern.map((v,id) => (
            <div key={id}
              className={id>2 ?"shadow-lg  bg-black mb-4 grid content-between" : "shadow-lg  bg-black"}
              style={{
                border: "1px solid rgb(111, 44, 236)",
                
              }}
            >
             <div>
             <h3 className="p-3" style={{ borderBottom: "1px solid red" }}>
                {v?.name}
              </h3>
              <div>
                <h6 className="px-3">{v.title}</h6>

                <ul>
                  {v.message.map((v,id) => (
                    <li key={id} className="list-disc">{v}</li>
                  ))}
                </ul>
              </div>
             </div>

              <div className="p-3  grid">
                <button className="p-2  bg-blue-700 rounded">
                  Intern Page{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularIntern;
