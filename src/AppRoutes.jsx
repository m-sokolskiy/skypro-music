import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login/LoginPage"
import { MainPage } from "./pages/main/MainPage"
import { NotFoundPage } from "./pages/not-found/NotFoundPage"
import { ProtectedRoute } from "./components/ProtectedRoute/protectedRoute"
import { RegisterPage } from "./pages/register/RegisterPage"
import { CategoryPage } from "./pages/category/CategoryPage"
import { FavoritesPage } from "./pages/favorites/FavoritesPage"

// Компонент возвращает реестр всех маршрутов
export const AppRoutes = ({ user, setUser, logout }) => {
    return (
        // Компонент содержит все роуты
        <Routes>
            {/* Сами роуты */}
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* Для авторизованных пользователей */}
            <Route element={<ProtectedRoute isAllowed={user} />}>
                <Route path="/" element={<MainPage logout={logout} />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/category/:id" element={<CategoryPage/>} />
            </Route>

        </Routes>
    );
};