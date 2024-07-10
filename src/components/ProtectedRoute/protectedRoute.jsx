import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const ProtectedRoute = ({ redirectPath = "/login"}) => {

    const { user } = useContext(UserContext)

    //Условие проверяет имеется ли ключь "user" (token)
    if (!user) {
        //B если !user, то принудительно перенаправляет на страницу укажанную а аргументе to.
        //redirectPath - задается через props.
        //replace={true} - отвечает за изменение строк в истории
        return <Navigate to={redirectPath} replace={true} />
    }
    //Отображает все дочерние элементы если авторизация пройдена
    return <Outlet />;
};