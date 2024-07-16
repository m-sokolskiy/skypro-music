import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login/LoginPage"
import { NotFoundPage } from "./pages/not-found/NotFoundPage"
import { ProtectedRoute } from "./components/ProtectedRoute/protectedRoute"
import { RegisterPage } from "./pages/register/RegisterPage"
import { Layout } from "./components/Layout/Layout"
import { Content } from "./components/Content/Content"
import { Favorites } from "./components/Favorites/Favorites"
import { ClassicalMusic } from "./components/ClassicalMusic/ClassicalMusic"
import { ElectroMusic } from "./components/ElectroMusic/ElectroMusic"
import { RockMusic } from "./components/RockMusic/RockMusic"

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
                    <Route path="classic_music" element={<ClassicalMusic />} />
                    <Route path="electro_music" element={<ElectroMusic />} />
                    <Route path="rock_music" element={<RockMusic />} />
                </Route>
            </Route>
        </Routes>
    );
};