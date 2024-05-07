import React from "react";
import { lazy, Suspense } from "react";

import { useParams } from "react-router";
import EveryDetails from "../EveryDetails";
import { useQuery } from "@tanstack/react-query";
import { singleJob } from "../../../../api/intern";

function Details() {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => singleJob(id),
  });

  if (isLoading) {
    <div>Loading..</div>;
  }

  return (
    <div>
      {data?.data?.value && (
        <div>
          <Suspense fallback={<div>Loading..</div>}>
            <EveryDetails newvalue={data?.data?.value}></EveryDetails>
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default Details;
