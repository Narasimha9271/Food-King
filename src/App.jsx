import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Help from "./components/Help";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Home = lazy(() => import("./components/Home"));

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
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated} />
                        }
                    >
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="/help" element={<Help />} />
                    <Route
                        path="/login"
                        element={
                            <Login setIsAuthenticated={setIsAuthenticated} />
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <SignUp setIsAuthenticated={setIsAuthenticated} />
                        }
                    />
                    <Route
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated} />
                        }
                    >
                        <Route
                            path="/about"
                            element={
                                <About selectedLanguage={selectedLanguage} />
                            }
                        />
                    </Route>
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    );
};

export default App;
