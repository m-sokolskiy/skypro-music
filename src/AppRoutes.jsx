import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login/LoginPage"
import { MainPage } from "./pages/main/MainPage"
import { NotFoundPage } from "./pages/not-found/NotFoundPage"
import { ProtectedRoute } from "./components/ProtectedRoute/protectedRoute"
import { RegisterPage } from "./pages/register/RegisterPage"
import { CategoryPage } from "./pages/category/CategoryPage"
import { FavoritesPage } from "./pages/favorites/FavoritesPage"

// Компонент возвращает реестр всех маршрутов
export const AppRoutes = ({ token, setUser }) => {
    return (
        // Компонент содержит все роуты
        <Routes>
            {/* Доступные всем пользователям */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* Для авторизованных пользователей */}
            <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
                <Route path="/main" element={<MainPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/category/:id" element={<CategoryPage/>} />
            </Route>

        </Routes>
    );
};