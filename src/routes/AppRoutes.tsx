import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/home/Home"));
const Favourites = lazy(() => import("../pages/favourites/Favourites"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const Splash = lazy(() => import("../pages/splash/Splash"));
const Onboarding = lazy(() => import("../pages/onboarding/Onboarding"));
const SignUp = lazy(() => import("../features/pages/SignUp"));
const SignIn = lazy(() => import("../features/pages/SignIn"));
const MainLayout = lazy(() => import("../layout/MainLayout"));

const Loader = () => <div>Loading...</div>;

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "favourites",
        element: (
          <Suspense fallback={<Loader />}>
            <Favourites />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Loader />}>
            <Profile />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/splash",
    element: (
      <Suspense fallback={<Loader />}>
        <Splash />
      </Suspense>
    ),
  },
  {
    path: "/onboarding",
    element: (
      <Suspense fallback={<Loader />}>
        <Onboarding />
      </Suspense>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<Loader />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <Suspense fallback={<Loader />}>
        <SignIn />
      </Suspense>
    ),
  },
]);

export default AppRoutes;
