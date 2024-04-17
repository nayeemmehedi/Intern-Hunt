import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function LottieFile({value}) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // Required

      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: value, // Name for future reference. Optional.
    });
  }, []);

  return (
    <div className="App">
      <br /> <br />
      <div
        style={{ height: "650px" }}
        className="container"
        ref={container}
      ></div>
    </div>
  );
}

export default LottieFile;
