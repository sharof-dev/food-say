
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import('../pages/home/Home'));
const Favourites = lazy(() => import('../pages/favourites/Favourites'));
const Profile = lazy(() => import('../pages/profile/Profile'));
import ProtectedRoute from "./ProtectedRoute";
import Splash from "../pages/splash/Splash";
import Onboarding from "../pages/onboarding/Onboarding";
import SignUp from "../features/pages/SignUp";
import SignIn from "../features/pages/SignIn";
import MainLayout from "../layout/MainLayout";

const isAuthenticated = true;

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            { path: '/favourites', element: <Favourites /> },
            { path: '/profile', element: <Profile /> },
        ]
    },
    // {path: '/', element: <Splash />},
    // {path: '/', element: <Onboarding />},
    // {path: '/', element: <SignUp />},
    { path: '/sign-in', element: <SignIn /> },
    { path: '/favourites', element: <Favourites /> },
    { path: '/profile', element: <Profile /> },
])

export default AppRoutes;