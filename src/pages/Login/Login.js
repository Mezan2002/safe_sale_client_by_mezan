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

  const handleGoogleLogin = () => {
    setLoginError("");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        googleLoggedInUseInfo(user.displayName, user.email);
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  // goole logged in user set on DB start
  const googleLoggedInUseInfo = (name, email) => {
    const info = { name, email, role: "Buyer" };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          getUserToken(email);
          navigate("/");
          toast.success("User Logged In Successfully");
        }
      });
  };
  // goole logged in user set on DB end

  const handleLogIn = (data) => {
    setLoginError("");
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        getUserToken(data.email);
        toast.success("User Logged In Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  // get user token start
  const getUserToken = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/");
        }
      });
  };
  // get user token end

  return (
    <div>
      <div className="flex items-center justify-around">
        <div className="md:w-1/2 hidden md:block">
          <img src={loginImage} className="w-8/12 mx-auto" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="border md:w-9/12 w-full my-10 border-black p-10 rounded-3xl">
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
