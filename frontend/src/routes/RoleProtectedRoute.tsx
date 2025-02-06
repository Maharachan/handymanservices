import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';

interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  redirectTo?: string;
}

const RoleProtectedRoute = ({ 
  children, 
  allowedRoles, 
  redirectTo = '/login' 
}: RoleProtectedRouteProps) => {
  const { userData, isLoggedIn, isLoading } = useAuthStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn || !userData) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!allowedRoles.includes(userData.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default RoleProtectedRoute; 