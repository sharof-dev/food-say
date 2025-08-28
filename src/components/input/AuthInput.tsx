import React from "react";

interface AuthInputProps {
  type?: string;
  placeholder: string;
  icon?: React.ReactNode;
}

const AuthInput: React.FC<AuthInputProps> = ({ type = "text", placeholder, icon }) => {
  return (
    <div className="flex items-center bg-white px-4 py-3 border border-gray-300 focus-within:border-green-500 rounded-xl w-full">
      {icon && <span className="mr-2 text-gray-500">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default AuthInput;
