import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar header-color ">
        <div className="flex-1 flex justify-center align-middle md:flex md:justify-start md:align-middle">
          <img className="logo" src={logo} alt="logo"></img>
          <a className="btn btn-ghost normal-case text-xl text-white text-center">
            Yoga Strength Club
          </a>
        </div>
        <div className="flex-none gap-2">
          {/* <!-- menu bar  --> */}
          <div className="text-white">{/* ul section  */}</div>
          {/* <!-- menu bar end  -->
        <!-- mobile device e hand bars  --> */}
          <div className="dropdown dropdown-end">
            <label
              tabindex="0"
              className="btn btn-ghost btn-circle avatar block lg:hidden md:hidden"
            >
              <i className="fa-solid fa-bars text-white text-xl"></i>
            </label>
            {/* ul section  */}
          </div>
          {/* <!-- mobile device e hand bars  --> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
