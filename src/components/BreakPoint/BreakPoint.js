import React, { useState } from "react";
import "./BreakPoint.css";

const BreakPoint = ({ breakPointTime }) => {
  return (
    <div>
      <div className="mt-4">
        <h1 className="font-semibold text-[25px]">Add A Break</h1>

        <div className="time-section mt-4 rounded-2xl">
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal flex justify-around ">
            <button
              className="btn text-[25px] btn-rounded "
              name="10"
              value="value"
              id="10"
              onClick={(e) => breakPointTime(e)}
            >
              10
              <span className="text-[15px] mt-2">s</span>
            </button>
            <button
              className="btn  btn-active text-[25px] btn-rounded"
              name="20"
              value="value"
              id="20"
              onClick={(e) => breakPointTime(e)}
            >
              20<span className="text-[15px] mt-2">s</span>
            </button>
            <button
              className="btn  text-[25px] btn-rounded"
              name="30"
              value="value"
              id="30"
              onClick={(e) => breakPointTime(e)}
            >
              30<span className="text-[15px] mt-2">s</span>
            </button>
            <button
              className="btn text-[25px] btn-rounded"
              name="40"
              value="value"
              id="40"
              onClick={(e) => breakPointTime(e)}
            >
              40<span className="text-[15px] mt-2">s</span>
            </button>
            <button
              className="btn  text-[25px] btn-rounded"
              name="50"
              value="value"
              id="50"
              onClick={(e) => breakPointTime(e)}
            >
              50<span className="text-[15px] mt-2">s</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakPoint;
