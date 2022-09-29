import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import personalImg from "../../images/sanu.jpg";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <div>
      <div className="personal-info flex items-center p-4 bg-slate-200 text-black font-semibold rounded-md">
        <img
          className="personal-img rounded-full"
          src={personalImg}
          alt="personal"
        />
        <div className="ml-4">
          <h4>Sanu Das</h4>
          <p>Bagerhat, Jatrapur</p>
        </div>
      </div>
      <div className="physical-info mt-3">
        <div className="stats shadow w-[100%] flex flex-col align-middle text-center md:flex-none md:flex-row md:align-middle md:text-center md:justify-around">
          <div className="p-4  place-items-center">
            <div className="lg:text-[30px]">
              72<span className="lg:text-[15px]">Kg</span>
            </div>
            <div className="stat-desc">Weight</div>
          </div>

          <div className="p-4 place-items-center">
            <div className="lg:text-[30px] text-secondary">5.10</div>
            <div className="stat-desc text-secondary">height</div>
          </div>

          <div className="p-4 place-items-center">
            <div className="lg:text-[30px]">
              24<span className="lg:text-[15px]">yrs</span>
            </div>
            <div className="stat-desc">Age</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
