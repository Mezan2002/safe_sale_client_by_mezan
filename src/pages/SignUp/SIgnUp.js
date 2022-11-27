import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../../src/assets/undraw_secure_login_pdn4.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { googleLogin, createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSetUpError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   handle google sign in start
  const handleGoogleLogin = () => {
    setSetUpError("");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        googleLoggedInUseInfo(user.displayName, user.email);
      })
      .catch((err) => {
        setSetUpError(err.message);
      });
  };
  //   handle google sign in end

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
          toast.success("User Logged In Successfully");
          console.log(data);
        }
      });
  };
  // goole logged in user set on DB end

  //   handle email and password login start
  const handleSignUp = (data) => {
    setSetUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully!");
        const userInforToUpdate = {
          displayName: data.fullName,
        };
        setUserToDB(data.fullName, data.email, data.password, data.role);
        updateUser(userInforToUpdate);
      })
      .catch((error) => {
        setSetUpError(error.message);
      });
  };
  //   handle email and password login end

  //   set datas on DB start
  const setUserToDB = (name, email, password, role) => {
    const user = { name, email, password, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        getUserToken(email);
        console.log(data);
      });
  };
  //   set datas on DB end

  // get user token start
  const getUserToken = (email) => {
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
      <div className="md:flex items-center justify-around min-h-[90vh]">
        <div className="w-1/2">
          <img
            src={loginImage}
            className="w-8/12 hidden md:block mx-auto"
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <div className="border md:w-9/12 w-11/12 mx-auto my-10 border-black p-10 rounded-3xl">
            <h2 className="text-4xl text-center mb-10 font-semibold">
              Sign Up
            </h2>
            <p className="text-center text-red-500">{signUpError}</p>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  placeholder=""
                  className="input input-bordered w-full"
                />
                {errors.fullName?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Full Name is required
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
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
              <div>
                <label className="label">
                  <span className="label-text font-bold">
                    What are you want to be?
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("role")}
                  defaultValue="Buyer/User"
                >
                  <option>Buyer</option>
                  <option>Seller</option>
                </select>
              </div>
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary btn-block mt-10"
              />
            </form>
            <div>
              <p className="text-center mt-5">
                already have an accont?
                <Link to="/login" className="underline">
                  Log In
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

export default SignUp;
