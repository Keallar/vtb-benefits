import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const ProtectedLayout = () => {
  const { loged_in } =  useTypedSelector(state => state.current_user)
  if (!loged_in) {
    return <Navigate to="/login" />
  }

  return (
    <Outlet />
  )
};