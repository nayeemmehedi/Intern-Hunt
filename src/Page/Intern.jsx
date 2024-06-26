import React, { lazy, Suspense } from "react";
import LottieFile from "../common/LottiFile";
import hire from "../utils/animation/hire.json";
const TotaljobLazy = lazy(() =>
  import("../components/internShip/Intern/Job-Find/Index")
);
// import JobFind from "";
// import JobFind from "../components/Intern/Job-Find/Index";

const Intern = () => {
  return (
    <div className="flex mt-1">
      <div className="w-4/5 z-10 ms-4">
        <h1>
          <span>
            Find Your <span className="text-zinc-400">Intern here.</span>
          </span>
        </h1>
        <Suspense fallback={<div>Loading..</div>}>
          <TotaljobLazy />
        </Suspense>
      </div>
      <div className="w-1/3 fixed right-0 top-0 z-0">
        <LottieFile value={hire} />
      </div>
    </div>
  );
};

export default Intern;
