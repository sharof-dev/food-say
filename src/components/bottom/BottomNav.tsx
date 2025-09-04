import {  Heart, LayoutGrid, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
    const { pathname } = useLocation();
    const path = pathname.split("/").filter(Boolean).pop() || "";

    return (
        <div className="flex justify-around items-center bg-white dark:bg-neutral-800 mt-auto py-3 dark:border-white/10 border-t border-black/10">
            <Link to={"/"}>
                <button
                    className={`flex flex-col items-center ${path === "" ? "text-orange-500" : "text-gray-700 dark:text-gray-300"
                        }`}
                >
                    <LayoutGrid size={24} />
                </button>
            </Link>

            <Link to={"/favourites"}>
                <button
                    className={`flex flex-col items-center ${path === "favourites" ? "text-orange-500" : "text-gray-700 dark:text-gray-300"
                        }`}
                >
                    <Heart size={24} />
                </button>
            </Link>

            <Link to={"/profile"}>
                <button
                    className={`flex flex-col items-center ${path === "profile" ? "text-orange-500" : "text-gray-700 dark:text-gray-300"
                        }`}
                >
                    <User size={24} />
                </button>
            </Link>
        </div>
    );
};

export default BottomNav;
