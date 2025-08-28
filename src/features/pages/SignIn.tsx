import React from "react";
import AuthInput from "../../components/input/AuthInput";
import { Mail, Lock } from "lucide-react";

const SignIn: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-2xl w-full max-w-sm">
        <h2 className="mb-2 font-bold text-2xl text-center">Welcome Back!</h2>
        <p className="mb-6 text-gray-500 text-center">Please enter your account here</p>

        <form className="space-y-4">
          <AuthInput placeholder="Email or phone number" icon={<Mail size={18} />} />
          <AuthInput type="password" placeholder="Password" icon={<Lock size={18} />} />

          <div className="flex justify-end">
            <a href="#" className="text-green-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-[#FC8038] hover:bg-[#FE8D51] py-3 rounded-xl w-full font-semibold text-white transition"
          >
            Login
          </button>

          <div className="my-2 text-gray-400 text-center">Or continue with</div>

          <button
            type="button"
            className="flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-xl w-full font-semibold text-white transition"
          >
            <span className="bg-white px-2 py-1 rounded-full font-bold text-red-500">G</span>
            Google
          </button>

          <p className="text-gray-500 text-sm text-center">
            Don’t have any account?{" "}
            <a href="/signup" className="font-medium text-green-500 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
