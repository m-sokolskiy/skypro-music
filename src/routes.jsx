import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login/loginPage"
import { MainPage } from "./pages/main/mainPage"

// Компонент возвращает реестр всех маршрутов
export const AppRoutes = () => {
    return (
        // Компонент содержит все роуты
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/main" element={<MainPage/>}/>
            {/* <Route path="/recommendation" element={<LoginPage/>}/>
            <Route path="/favorites" element={<LoginPage/>}/>
            <Route path="/not-found" element={<LoginPage/>}/> */}
        </Routes>
    )
}