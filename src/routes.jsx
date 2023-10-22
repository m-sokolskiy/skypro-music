import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login/loginPage"
import { MainPage } from "./pages/main/mainPage"
import { RegistrationPage } from "./pages/registration/registrationPage"
import { NotFoundPage } from "./pages/not-found/notfoundPage"
import { FavoritePage } from "./pages/favorite/favoritePage"

// Компонент возвращает реестр всех маршрутов
export const AppRoutes = () => {
    return (
        // Компонент содержит все роуты
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/favorite" element={<FavoritePage/>}/>

        </Routes>
    )
}