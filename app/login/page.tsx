"use client";

import GithubLogin from "@/components/GithubLogin";
import GoogleLogin from "@/components/GoogleLogin";
import Link from "next/link";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <div className="w-full min-h-screen grid bg-orange-300/20">
        <div className="m-auto">
          <h1 className="w-full font-bold text-4xl mb-5 text-center uppercase">
            Hey There 👋
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border p-16 bg-white/30 rounded-lg shadow-md"
          >
            <h1 className="text-center font-semibold text-3xl mb-5">Login</h1>
            <div className="flex gap-5">
              <GoogleLogin />
              <GithubLogin />
            </div>
            <div className="text-center font-bold text-lg mt-5">
              or login with
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                className="text-black border border-black/20 rounded-lg p-1 shadow-sm"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                className="text-black border border-black/20 rounded-lg p-1 shadow-sm"
                {...register("password")}
              />
            </div>
            <div className="flex gap-2 mt-5">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <input
              type="submit"
              className="w-full cursor-pointer bg-green-300/50 rounded-md p-1 hover:shadow-md mt-5 font-bold text-lg"
            />
            <div className="mt-5">
              <span className="cursor-default">
                Dont have an account with us?
              </span>
              <Link
                className="bg-blue-200 p-1 rounded-lg font-bold"
                href="/register"
              >
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
