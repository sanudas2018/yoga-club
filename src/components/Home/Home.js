import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import BreakPoint from "../BreakPoint/BreakPoint";
import Exercise from "../Exercise/Exercise";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import "./Home.css";

const Home = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    // const url = `../../../public/alldata.json`;
    fetch("alldata.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="home">
      <div className="yoga-container mb-10 relative">
        <div className="yoga-features-left border-spacing-1 ">
          <h1 className="font-semibold text-2xl mt-5">
            Select Today's Exercise
          </h1>
          <div className="grid lg:grid-cols-3 lg:gap-3  md:grid-cols-2 md:gap-3 grid-cols-1 gap-3 mt-4">
            {activities.map((activity) => (
              <Activity activity={activity} key={activity.id}></Activity>
            ))}
          </div>
        </div>
        <div className="yoga-details-right px-2 fixed lg:top-24 right-0  w-[22%]  md:w-[25%] lg:w-[25%] md:right-0 lg:px-4">
          <PersonalInfo></PersonalInfo>
          <BreakPoint></BreakPoint>
          <Exercise></Exercise>
        </div>
      </div>
    </div>
  );
};

export default Home;
