import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { joiResolver } from "@hookform/resolvers/joi";

import FormInput from "@/components/Form/Input/form-input";

import { schema } from "./schema";
import { supabase } from "@/utils/supabaseClient";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { control, handleSubmit, reset } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (data) {
        console.log(data);
        // reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get("/api/auth/signin-google");
      if (response.status === 200) {
        const data = response.data;
        router.push(data.url);
      } else {
        console.error("Failed to sign in");
      }
    } catch (error) {
      console.error("Error sign in:", error);
    }
  };

  useEffect(() => {
    if (router.query.error) {
      console.error("Error logging in:", router.query.error);
    }
  }, [router]);

  return (
    <div className="w-[65vw] md:w-[45vw] h-[60vh] grid grid-cols-3 border-2 border-gray-200 rounded-lg">
      <div className="col-span-3 md:col-span-2 flex flex-col justify-between h-full p-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">Login to Quizizz</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <FormInput
              id="email"
              name="email"
              control={control}
              className="w-full bg-transparent border border-gray-200 placeholder:text-[#959191]/50 placeholder:text-sm placeholder:font-semibold"
              placeholder="Enter email"
            />

            <label htmlFor="password" className="sr-only">
              password
            </label>
            <FormInput
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              control={control}
              className="w-full bg-transparent border border-gray-200 placeholder:text-[#959191]/50 placeholder:text-sm placeholder:font-semibold"
              placeholder="Enter password"
            >
              {showPassword ? <FiEyeOff/> : <FiEye />}
            </FormInput>
            <input
              hidden
              type="checkbox"
              id="show-password"
              onChange={() => setShowPassword(!showPassword)}
            />

            <button
              type="submit"
              className="w-full rounded-md bg-[#8854C1] my-2 px-3 py-3 text-white text-base font-semibold focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-400"
            >
              Login
            </button>
          </form>
          <div className="pt-2 flex flex-col justify-center items-center gap-y-4">
            <p className="text-[#6D6D6D] text-xs md:text-sm font-semibold">
              or continue with
            </p>
            <div className="flex justify-between items-center gap-x-1">
              <div className="flex flex-col justify-center items-center gap-y-1">
                <FcGoogle
                  onClick={handleGoogleSignIn}
                  className="cursor-pointer border text-2xl md:text-5xl border-gray-200 rounded p-[2px] md:p-2"
                />
                <span className="text-xs md:text-sm font-normal">Google</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex text-center justify-center items-center gap-x-1">
          <p className="text-xs md:text-sm font-normal">
            Don't have an account?
          </p>
          <a
            href="#"
            className="text-xs md:text-sm text-[#885DC0] font-medium rounded px-4 py-0.5 bg-[#EDE6F6]"
          >
            Sign up
          </a>
        </div>
      </div>
      <div className="relative hidden md:block md:col-span-1 h-full">
        <div className="absolute bottom-0 flex flex-col justify-evenly w-full h-[20%] bg-black/80 z-10 p-4">
          <h4 className="text-xs text-white font-semibold">Teachers love us</h4>
          <p className="text-xs text-white/65 font-semibold">
            Join over 200 million educators and learners on Quizizz
          </p>
        </div>
        <Image
          src="/assets/images/classroom-enjoyment.png"
          alt=""
          fill
          className="object-cover z-0"
        />
      </div>
    </div>
  );
};

export default LoginPage;
