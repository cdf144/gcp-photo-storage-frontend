import { Route, Routes } from "react-router-dom";
import Storage from "./components/Collections.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import LoginPage from "./page/LoginPage.tsx";
function App() {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Storage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
