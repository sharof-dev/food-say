import { Outlet } from 'react-router-dom'
import BottomNav from '../components/bottom/BottomNav'

const MainLayout = () => {
    return (
        <div className='flex flex-col justify-between w-full h-screen'>
            
            <div className='h-screen overflow-auto'>
                <Outlet />
            </div>
            <BottomNav />
        </div>
    )
}

export default MainLayout
