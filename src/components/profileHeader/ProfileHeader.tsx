import type { FC } from "react"
import { ArrowLeft, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ProfileHeader:FC = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between p-8 w-full">
            <ArrowLeft className="w-6 h-6 text-black dark:text-white" />
            <LogOut onClick={() => navigate("sign-in")} className="w-6 h-6 text-red-600 dark:text-red-600" />
        </div>
    )
}

export default ProfileHeader
