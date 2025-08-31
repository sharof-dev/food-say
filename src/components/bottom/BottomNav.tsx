import {  Heart, LayoutGrid, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
    const { pathname } = useLocation();
    const path = pathname.split("/").filter(Boolean).pop() || "";

    return (
        <div className="flex justify-around items-center bg-white mt-auto py-3 border-t">
            <Link to={"/"}>
                <button
                    className={`flex flex-col items-center ${path === "" ? "text-orange-500" : "text-gray-700"
                        }`}
                >
                    <LayoutGrid size={24} />
                </button>
            </Link>

            <Link to={"/favourites"}>
                <button
                    className={`flex flex-col items-center ${path === "favourites" ? "text-orange-500" : "text-gray-700"
                        }`}
                >
                    <Heart size={24} />
                </button>
            </Link>

            <Link to={"/profile"}>
                <button
                    className={`flex flex-col items-center ${path === "profile" ? "text-orange-500" : "text-gray-700"
                        }`}
                >
                    <User size={24} />
                </button>
            </Link>
        </div>
    );
};

export default BottomNav;
