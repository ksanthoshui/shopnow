import React, { useState } from "react";
import { backend_url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backend_url + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full ">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl mb-4 font-bold capitalize">admin panel</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-3 min-w-72">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Email address
              </p>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="rounded-mt w-full px-3 py-2 border border-gray-300 outline-none"
                type="email"
                placeholder="You@gmail.com"
                required
              />
            </div>
            <div className="mb-3 min-w-72">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Password{" "}
              </p>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                className="rounded-mt w-full px-3 py-2 border border-gray-300 outline-none"
                type="password"
                placeholder="Enter yor pass"
                required
              />
            </div>
            <button
              className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
