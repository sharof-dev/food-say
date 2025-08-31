import { useState, type FC } from "react";
import ProfileHeader from "../../components/profileHeader/ProfileHeader"
import { ChevronRight } from "lucide-react";

const Profile:FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-col">
      <ProfileHeader />
      <div className="flex flex-col items-center mt-6">
        <img src="https://picsum.photos/200" alt="avatar avatar-foto" className="rounded-full w-28 h-28" />
        <h1 className="mt-4 font-bold text-2xl">Username</h1>
      </div>
         {/* Settings Options */}
         <div className="space-y-6 mt-8 px-6">
        {/* Dark Mode */}
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">Dark Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 flex items-center rounded-full p-1 transition ${
                darkMode ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  darkMode ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
          </label>
        </div>

        {/* Menu Items */}
        {["About", "Version", "Contact Us"].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center font-bold text-lg"
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
