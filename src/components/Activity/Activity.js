import React from "react";
import "./Activity.css";

const Activity = ({ activity }) => {
  const { id, name, img, details, time, age } = activity;

  return (
    <>
      {/* <div className="card card-compact bg-base-100 shadow-xl ">
        <figure>
          <img className="pt-3" src={img} alt="Shoes" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title text-lg">{name}</h2>
          <p className="">
            {details.length >= 50 ? details.slice(0, 90) + " ..." : details}
          </p>
          <p className="font-bold">For Age: {age}</p>
          <p className="font-bold">Time required: {time} M</p>
          <div className="card-actions mt-4 ">
            <button className="btn btn-primary w-[100%] btn-sm addButton">
              Add to list
            </button>
          </div>
        </div>
      </div> */}
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-40 w-[100%]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {details.length >= 50 ? details.slice(0, 90) + " ..." : details}
          </p>
          <p className="font-bold">
            <span>For Age: </span>
            {age}
          </p>
          <p className="font-bold">
            <span>Time required:</span> {time} <span>Minutes</span>
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-secondary btn-sm w-[99%]">
              Add to list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
