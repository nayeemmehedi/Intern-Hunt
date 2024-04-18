import React, { useState, useEffect } from "react";
import SpecificJob from "../SpecificJob/Index";
import { Pagination } from 'antd';

const JobFind = () => {
  const [loading, setLoading] = useState(false);
  const [alldata, setalldata] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://internhunt-24.onrender.com/event")
      .then((res) => res.json())
      .then((data) => {
        console.log("sata", data);
        setalldata(data);
        setLoading(false);
      });
  }, []);
  const [alldata1, setalldata1] = useState("");

  const shuffle = (a) => {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  };

  shuffle(alldata);

  if (loading) {
    return <div className="h-96">Loading...</div>;
  }

  return (
    <div>
      {!loading && (
        <div>
          {" "}
          <small>Type Job Name</small> <br />
        </div>
      )}
      <input
        type="text"
        className="form-control"
        placeholder="searching.."
        onChange={(event) => {
          setalldata1(event.target.value);
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {alldata
          ?.filter((v) => {
            if (alldata1 == "") {
              return v;
            } else if (
              v.job_tital.toLowerCase().includes(alldata1.toLowerCase())
            ) {
              return v;
            }
          })
          .map((value) => (
            <SpecificJob valuename={value}></SpecificJob>
          ))}
      </div>

     <div className="text-center my-4">
     <Pagination defaultCurrent={1} total={50} />
     </div>

 
    </div>
  );
};

export default JobFind;
