import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import loginImage from "../../../src/assets/undraw_secure_login_pdn4.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setLoginError(err.message);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-around">
        <div className="w-1/2">
          <img src={loginImage} className="w-8/12 mx-auto" alt="" />
        </div>
        <div className="w-1/2">
          <div className="border w-9/12  border-black p-10 rounded-3xl">
            <h2 className="text-4xl text-center mb-10 font-semibold">Log In</h2>
            <form>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    Username or Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">
                    What are you want to be?
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  defaultValue="Buyer/User"
                >
                  <option>Buyer/User</option>
                  <option>Seller</option>
                </select>
              </div>
              <input
                type="submit"
                value="Log In"
                className="btn btn-primary btn-block mt-10"
              />
            </form>
            <div className="divider mt-10">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-block btn-outline"
            >
              <FaGoogle className="text-2xl mr-5"></FaGoogle>
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
