import React from "react";
import "./Exercise.css";

const Exercise = () => {
  return (
    <div>
      <div className="mt-5 mb-4">
        <h1 className="font-semibold text-[25px]">Exercise Details</h1>
        <div className="my-5">
          <div className="flex justify-around bg-slate-300 py-3 text-black align-middle rounded-lg">
            <p className="md:font-semibold md:text-[20px] font-bold">
              Exercise Time
            </p>
            <p className="text-zinc-500 font-semibold">200 seconds</p>
          </div>

          <div className="flex justify-around bg-slate-300 py-3 text-black align-middle mt-4 rounded-lg">
            <p className="md:font-semibold md:text-[20px] font-bold">
              Break Time
            </p>
            <p className="text-zinc-500 font-semibold">15 seconds</p>
          </div>
        </div>
        <button className="btn  btn-secondary w-[100%] font-semibold tracking-wide btn-outline">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Exercise;
