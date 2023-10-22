import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login/loginPage"

// Компонент возвращает реестр всех маршрутов
export const AppRoutes = () => {
    return (
        // Компонент содержит все роуты
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            {/* <Route path="/registration" element={<LoginPage/>}/>
            <Route path="/main" element={<LoginPage/>}/>
            <Route path="/recommendation" element={<LoginPage/>}/>
            <Route path="/favorites" element={<LoginPage/>}/>
            <Route path="/not-found" element={<LoginPage/>}/> */}
        </Routes>
    )
}