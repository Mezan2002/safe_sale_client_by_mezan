import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImage from "../../../src/assets/undraw_secure_login_pdn4.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { googleLogin, createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSetUpError] = useState("");

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
      })
      .catch((err) => {
        setSetUpError(err.message);
      });
  };
  //   handle google sign in end

  //   handle email and password login start
  const handleLogIn = (data) => {
    console.log(data);
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
    console.log(user);
  };
  //   set datas on DB end

  return (
    <div>
      <div className="flex items-center justify-around min-h-[90vh]">
        <div className="w-1/2">
          <img src={loginImage} className="w-8/12 mx-auto" alt="" />
        </div>
        <div className="w-1/2">
          <div className="border w-9/12  border-black p-10 rounded-3xl">
            <h2 className="text-4xl text-center mb-10 font-semibold">
              Sign Up
            </h2>
            <p className="text-center text-red-500">{signUpError}</p>
            <form onSubmit={handleSubmit(handleLogIn)}>
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