import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "@/routes/AuthRoute";
import Login from "@/pages/Auth/Login";
import EmailVerify from "@/pages/Auth/EmailVerify";
import ResetPassword from "@/pages/Auth/ResetPassword";
import RoleProtectedRoute from "@/routes/RoleProtectedRoute";
import AdminPage from "@/pages/Admin";
import HeroPage from "@/pages/Home/HeroPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/login",
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
  {
    path: "/email-verify",
    element: (
      <RoleProtectedRoute allowedRoles={["admin", "user"]} redirectTo="/login">
        <EmailVerify />
      </RoleProtectedRoute>
    ),
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/admin",
    element: (
      <RoleProtectedRoute allowedRoles={["admin"]} redirectTo="/">
        <AdminPage />
      </RoleProtectedRoute>
    ),
  },
]);




