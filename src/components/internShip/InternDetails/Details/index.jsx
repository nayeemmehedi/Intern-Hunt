import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import EveryDetails from "../EveryDetails";

function Details() {
  const { id } = useParams();

  const [data, setvalue] = useState({});

  useEffect(() => {
    fetch(`https://internhunt-24.onrender.com/event/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setvalue(data);
      });
  }, []);

  console.log("done");
  return (
    <div>
      <div>
        <EveryDetails newvalue={data}></EveryDetails>
      </div>
    </div>
  );
}

export default Details;
