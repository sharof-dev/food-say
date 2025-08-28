import { Grid, Heart, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const BottomNav = () => {
    return (
        <div className="flex justify-around items-center bg-white mt-auto py-3 border-t">
            <Link to={"/"}>
                <button className="flex flex-col items-center text-orange-500">
                    <Grid size={24} />
                </button>
            </Link>
            <Link to={'/favourites'}            >
                <button className="flex flex-col items-center text-gray-700">
                    <Heart size={24} />
                </button>
            </Link>
            <Link to={"/profile"}>
                <button className="flex flex-col items-center text-gray-700">
                    <User size={24} />
                </button>
            </Link>
        </div>
    )
}

export default BottomNav
