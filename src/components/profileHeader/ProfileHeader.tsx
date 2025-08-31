import type { FC } from "react"
import { ArrowLeft, Settings } from "lucide-react"

const ProfileHeader:FC = () => {
    return (
        <div className="flex justify-between p-8 w-full">
            <ArrowLeft className="w-6 h-6 text-black" />
            <Settings className="w-6 h-6 text-black" />
        </div>
    )
}

export default ProfileHeader
