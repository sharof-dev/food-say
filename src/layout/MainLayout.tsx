import { Outlet, useLocation } from 'react-router-dom'
import BottomNav from '../components/bottom/BottomNav'
import Header from '../components/header/Header'
import ProfileHeader from '../components/profileHeader/ProfileHeader'

const MainLayout = () => {
    const { pathname } = useLocation()
    return (
        <div className='flex flex-col justify-between w-full h-screen'>
            {pathname === "/profile" ? <ProfileHeader /> : <Header />}
            <div className='h-screen overflow-auto'>
                <Outlet />
            </div>
            <BottomNav />
        </div>
    )
}

export default MainLayout
