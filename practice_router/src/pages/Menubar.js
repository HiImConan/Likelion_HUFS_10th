import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <ul>
        <l1>
          <Link to="/home">Home</Link>
        </l1>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Menubar;
