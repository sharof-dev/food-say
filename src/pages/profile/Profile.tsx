import {  type FC } from "react";
import { ChevronRight } from "lucide-react";
import ThemeToggle from "../../components/theme/ThemeToggle";

const Profile:FC = () => {

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center mt-6">
        <img src="https://picsum.photos/200" alt="avatar avatar-foto" className="rounded-full w-28 h-28" />
        <h1 className="mt-4 font-bold text-2xl">Username</h1>
      </div>
         {/* Settings Options */}
         <div className="space-y-6 mt-8 px-6">
        {/* Dark Mode */}
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">Dark Mode</span>
            <ThemeToggle />
            
        </div>

        {/* Menu Items */}
        {["About", "Version", "Contact Us"].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-2 border-b border-b-gray-800 font-bold text-lg"
          >
            <span>{item}</span>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Profile
