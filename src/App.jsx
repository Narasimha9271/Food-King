import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Help from "./components/Help";
import Footer from "./components/Footer";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    return (
        <Router>
            <Header
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/help" element={<Help />} />
                <Route
                    path="/login"
                    element={<Login setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route
                    path="/signup"
                    element={<SignUp setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated} />
                    }
                >
                    <Route
                        path="/about"
                        element={<About selectedLanguage={selectedLanguage} />}
                    />
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
