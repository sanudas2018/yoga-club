import React, { useState } from "react";
import "./Exercise.css";

const Exercise = ({ addActivity, tenTime }) => {
  const [tost, setTost] = useState("");
  let sum = addActivity.reduce((p, c) => {
    return p + c;
  }, 0);
  

  return (
    <div>
      <div className="mt-5 mb-4">
        {tost}
        <h1 className="font-semibold text-[25px]">Exercise Details</h1>
        <div className="my-5">
          <div className="flex justify-around bg-slate-300 py-3 text-black align-middle rounded-lg">
            <p className="md:font-semibold md:text-[20px] font-bold">
              Exercise Time
            </p>
            <p className="text-zinc-500 font-semibold">
              {sum} <span className="ml-2">Minutes</span>
            </p>
          </div>

          <div className="flex justify-around bg-slate-300 py-3 text-black align-middle mt-4 rounded-lg">
            <p className="md:font-semibold md:text-[20px] font-bold">
              Break Time
            </p>
            <p className="text-zinc-500 font-semibold">
              {tenTime.value ? tenTime.value : "0"}
              <span className="ml-2">Seconds</span>
            </p>
          </div>
        </div>
        <button
          className="btn  btn-secondary w-[100%] font-semibold tracking-wide btn-outline"
          onClick={() => handleTost()}
        >
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Exercise;
