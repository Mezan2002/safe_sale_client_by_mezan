import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../src/assets/undraw_secure_login_pdn4.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { googleLogin, loginUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogIn = (data) => {
    console.log(data);
    setLoginError("");
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Logged In Successfully");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setLoginError("");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Logged In Successfully");
      })
      .catch((err) => {
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
            <p className="text-center text-red-500">{loginError}</p>
            <form onSubmit={handleSubmit(handleLogIn)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    Username or Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder=""
                  className="input input-bordered w-full"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password Should be 6 Character or Longer",
                    },
                  })}
                  placeholder=""
                  className="input input-bordered w-full"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
              <input
                type="submit"
                value="Log In"
                className="btn btn-primary btn-block mt-10"
              />
            </form>
            <div>
              <p className="text-center mt-5">
                new at safe sale?{" "}
                <Link to="/signup" className="underline">
                  create a new account
                </Link>
              </p>
            </div>
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
