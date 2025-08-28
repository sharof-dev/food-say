import type { FC } from "react";
import type React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    isAuthenticed: boolean;
    children: React.ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({isAuthenticed, children}) =>{
    if (!isAuthenticed) {
        return <Navigate to={'/login'} replace />
    }

    return <>{children}</>;
}

export default ProtectedRoute;