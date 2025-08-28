import React from "react";
import AuthInput from "../../components/input/AuthInput";
import { Mail, Lock } from "lucide-react";

const SignUp: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-gray-50 p-6 w-full min-h-screen">
            <div className="">
                <h2 className="mb-2 font-bold text-2xl text-center">Welcome!</h2>
                <p className="mb-6 text-gray-500 text-center">Please enter your account here</p>
            </div>

            <div className="flex flex-col justify-between w-full">
                <form className="flex flex-col space-y-4">
                    <AuthInput placeholder="Email or phone number" icon={<Mail size={18} />} />
                    <AuthInput type="password" placeholder="Password" icon={<Lock size={18} />} />

                    <div className="mt-2 text-gray-500 text-sm">
                        <p className="flex items-center gap-1">
                            <span className="text-gray-400">o</span> At least 6 characters
                        </p>
                        <p className="flex items-center gap-1">
                            <span className="text-gray-400">○</span> Contains a number
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#FC8038] hover:bg-[#FE8D51] py-3 rounded-xl w-full font-semibold text-white transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-gray-600 text-sm text-center">
                    Already have an account?{" "}
                    <a href="/sign-in" className="font-medium text-[#70AD5D] hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>

    );
};

export default SignUp;
