import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  House,
  User,
  ShoppingBag,
  Menu,
  MoveRight,
} from "lucide-react";
import { Shopcontext } from "../context/Shopcontext";
import { Navigate } from "react-router-dom";
function Navbar() {
  const [visible, setvisible] = useState(false);
  const { setshowsearch, getcartcount, token, setToken, setCartItems } =
    useContext(Shopcontext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };
  return (
    <>
      <div className="flex items-center justify-between py-5  font-medium">
        <Link to={"/"}>
        <p className="text-xl font-mono"> <span className="text-amber-500">F</span>ASHION<span className="text-amber-500">H</span>UB</p>
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 uppercase">
          <NavLink to="/" className="flex flex-col items-center gap-1  ">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="collection" className="flex flex-col items-center gap-1">
            <p>collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>about</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="contact" className="flex flex-col items-center gap-1">
            <p>contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <a
            href="https://shopnow-admin-orcin.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 bg-amber-200 px-2 py-1 rounded-md text-black"
          >
            admin
          </a>
        </ul>
        <div className="flex items-center gap-6">
          <Search
            className=" w-5 cursor-pointer"
            onClick={() => {
              setshowsearch(true);
            }}
          />

          <div className="group relative">
            <Link to={"/login"}>
              <User
                onClick={() => (token ? null : navigate("/login"))}
                className=" w-5 cursor-pointer"
              />
            </Link>
            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-32 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">
                    {" "}
                    My Profils{" "}
                  </p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer  hover:text-black"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative">
            <ShoppingBag className=" w-5 cursor-pointer" />
            <p className="absolute -right-1.25 -bottom-1.25 w-4 leading-4 text-center bg-black text-white aspect-square rounded-full text-[8px] ">
              {getcartcount()}
            </p>
          </Link>
          <Menu
            onClick={() => {
              setvisible(true);
            }}
            className=" w-5 cursor-pointer sm:hidden"
          />
        </div>
        {/* side menu for small screen */}
        <div
          className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"} `}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => {
                setvisible(false);
              }}
              className="flex items-center gap-4 p-3 cursor-pointer "
            >
              <MoveRight className="h-4 rotate-180" />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-2 pl-6 border uppercase"
              to="/"
            >
              home
            </NavLink>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-2 pl-6 border uppercase"
              to="/collection"
            >
              collection
            </NavLink>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-2 pl-6 border uppercase"
              to="/about"
            >
              about
            </NavLink>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-2 pl-6 border uppercase"
              to="/contact"
            >
              contact
            </NavLink>
            <NavLink
              onClick={() => {
                setvisible(false);
              }}
              className="py-2 pl-6 border uppercase"
              to="https://shopnow-admin-orcin.vercel.app"
            >
              admin
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
