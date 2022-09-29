import React from "react";
import "./BreakPoint.css";

const BreakPoint = () => {
  return (
    <div>
      <div className="mt-4">
        <h1 className="font-semibold text-[30px]">Add A Break</h1>
        {/* <div className="stats shadow w-[100%] mt-3 cursor-pointer">
          <div className="p-4  place-items-center">
            <div className="text-[30px]">
              10<span className="text-[15px]">s</span>
            </div>
          </div>

          <div className="p-4 place-items-center">
            <div className="text-[30px]">
              20<span className="text-[15px]">s</span>
            </div>
          </div>

          <div className="p-4 place-items-center">
            <div className="text-[30px]">
              30<span className="text-[15px]">s</span>
            </div>
          </div>
          <div className="p-4 place-items-center">
            <div className="text-[30px]">
              40<span className="text-[15px]">s</span>
            </div>
          </div>
          <div className="p-4 place-items-center">
            <div className="text-[30px]">
              50<span className="text-[15px]">s</span>
            </div>
          </div>
        </div>
         */}

        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
          <button className="btn btn-active text-[25px]">
            10<span className="text-[15px] mt-2">s</span>
          </button>
          <button className="btn  text-[25px]">
            20<span className="text-[15px] mt-2">s</span>
          </button>
          <button className="btn  text-[25px]">
            30<span className="text-[15px] mt-2">s</span>
          </button>
          <button className="btn text-[25px]">
            40<span className="text-[15px] mt-2">s</span>
          </button>
          <button className="btn  text-[25px]">
            50<span className="text-[15px] mt-2">s</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakPoint;
