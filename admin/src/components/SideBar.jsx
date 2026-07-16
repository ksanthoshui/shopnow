import React from "react";
import { CirclePlus,ListCheck ,Folders  } from "lucide-react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="w-[18%] min-h-screen border-gray-400 border-r-2">
        <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
          <NavLink
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l "
            to={"/add"}
          >
            <CirclePlus className="w-5 h-5" />
            <p className="hidden md:block">Add item</p>
          </NavLink>
          <NavLink
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l "
            to={"/list"}
          >
            <ListCheck  className="w-5 h-5" />
            <p className="hidden md:block">list Ltem</p>
          </NavLink>
          <NavLink
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l "
            to={"/orders"}
          >
            <Folders  className="w-5 h-5" />
            <p className="hidden md:block">orders</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
