/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setIsAuthenticated(true);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error signing in: ", error);
                alert("Invalid credentials");
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setIsAuthenticated(true);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error signing in with Google: ", error);
                alert("Error signing in with Google");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4 transition-colors duration-300"
                    >
                        Login
                    </button>
                </form>
                <button
                    onClick={handleGoogleSignIn}
                    className="flex items-center justify-center w-full p-2 border border-gray-300 rounded bg-white hover:bg-gray-100 transition-colors duration-300"
                >
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google logo"
                        className="h-6 w-6 mr-2"
                    />
                    <span className="text-gray-700 font-medium">
                        Sign in with Google
                    </span>
                </button>
                <div>
                    <p className="text-sm my-3 text-center">
                        Not logged in?{" "}
                        <Link
                            className="text-blue-500 cursor-pointer hover:underline"
                            to="/signup"
                        >
                            Go to Sign Up
                        </Link>
                    </p>
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded shadow-inner">
                    <h2 className="text-lg font-bold mb-2 text-center">
                        Test Credentials
                    </h2>
                    <p className="text-gray-700 mb-1">
                        <strong>Email:</strong> test@gmail.com
                    </p>
                    <p className="text-gray-700">
                        <strong>Password:</strong> #Test123
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
