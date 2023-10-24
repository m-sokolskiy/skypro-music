import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login/loginPage"
import { MainPage } from "./pages/main/mainPage"
import { RegistrationPage } from "./pages/registration/registrationPage"
import { NotFoundPage } from "./pages/not-found/notfoundPage"
import { RecommendationPage } from "./pages/recommendation/recommendationPage"
import { FavoritePage } from "./pages/favorite/favoritePage"
import { ProtectedRoute } from "./components/ProtectedRoute/protectedRoute"

// Компонент возвращает реестр всех маршрутов
export const AppRoutes = ({ user }) => {
    return (
        // Компонент содержит все роуты
        <Routes>
            {/* Сами роуты */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="*" element={<NotFoundPage />} />

            <Route path="/main" element={<MainPage />} />


            {/* Для авторизованных пользователей */}
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/favorite" element={<FavoritePage />} />
                <Route path="/recommendation/:id" element={<RecommendationPage />} />
            </Route>

        </Routes>
    );
};