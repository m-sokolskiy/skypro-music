import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login", isAllowed }) => {
    if (!isAllowed) {
        // Компонент Navigate перенаправляет пользователя (редирект-насильное перенаправление пользователя)
        // isAllowed - может пользователь войти или нет
        return <Navigate to={redirectPath} replace={true} />
    }
    // Отображает если авторизация пройдена
    return <Outlet />;
};