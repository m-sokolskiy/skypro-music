import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login/LoginPage"
import { NotFoundPage } from "./pages/not-found/NotFoundPage"
import { ProtectedRoute } from "./components/ProtectedRoute/protectedRoute"
import { RegisterPage } from "./pages/register/RegisterPage"
import { Layout } from "./components/Layout/Layout"
import { Content } from "./components/Content/Content"
import { Favorites } from "./components/Favorites/Favorites"
import { CategoryPage } from "./pages/category/CategoryPage"

// Компонент возвращает реестр всех маршрутов
export const AppRoutes = ({ token }) => {
    return (
        // Компонент содержит все роуты
        <Routes>
            {/* Доступные всем пользователям */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* Для авторизованных пользователей */}
            <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
                <Route path="/" element={<Layout />}>
                    <Route path="main" element={<Content />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="category/:id" element={<CategoryPage />} />
                </Route>
            </Route>
        </Routes>
    );
};