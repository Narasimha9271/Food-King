// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";

// // eslint-disable-next-line react/prop-types
// const Header = ({
//     isAuthenticated,
//     setIsAuthenticated,
//     selectedLanguage,
//     setSelectedLanguage,
// }) => {
//     const handleLogout = () => {
//         signOut(auth)
//             .then(() => {
//                 setIsAuthenticated(false);
//             })
//             .catch((error) => {
//                 console.error("Error signing out: ", error);
//             });
//     };

//     const handleLanguageChange = (e) => {
//         setSelectedLanguage(e.target.value);
//     };

//     return (
//         <header className="bg-yellow-300 text-white shadow-md sticky top-0 z-50">
//             <div className="container mx-auto flex justify-between items-center py-4 px-6">
//                 <Link to="/" className="text-3xl font-bold">
//                     Food King
//                 </Link>
//                 <nav className="space-x-6">
//                     <Link
//                         to="/"
//                         className="hover:text-gray-300 transition duration-300"
//                     >
//                         Home
//                     </Link>
//                     <Link
//                         to="/about"
//                         className="hover:text-gray-300 transition duration-300"
//                     >
//                         About Us
//                     </Link>
//                     <Link
//                         to="/help"
//                         className="hover:text-gray-300 transition duration-300"
//                     >
//                         Help
//                     </Link>
//                     {isAuthenticated ? (
//                         <>
//                             <select
//                                 value={selectedLanguage}
//                                 onChange={handleLanguageChange}
//                                 className="bg-gray-600 text-white border-none outline-none mt-2"
//                             >
//                                 <option value="en">English</option>
//                                 <option value="tl">Telugu</option>
//                                 <option value="hi">Hindi</option>
//                                 <option value="ta">Tamil</option>
//                             </select>
//                             <button
//                                 onClick={handleLogout}
//                                 className="hover:text-gray-300 transition duration-300"
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <Link
//                                 to="/login"
//                                 className="hover:text-gray-300 transition duration-300"
//                             >
//                                 Login
//                             </Link>
//                             <Link
//                                 to="/signup"
//                                 className="hover:text-gray-300 transition duration-300"
//                             >
//                                 Sign Up
//                             </Link>
//                         </>
//                     )}
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;

/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = ({
    isAuthenticated,
    setIsAuthenticated,
    selectedLanguage,
    setSelectedLanguage,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setIsAuthenticated(false);
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-yellow-300 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link to="/" className="text-3xl font-bold">
                    Food King
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link
                        to="/"
                        className="hover:text-gray-300 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-gray-300 transition duration-300"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/help"
                        className="hover:text-gray-300 transition duration-300"
                    >
                        Help
                    </Link>
                    {isAuthenticated ? (
                        <>
                            <select
                                value={selectedLanguage}
                                onChange={handleLanguageChange}
                                className="bg-gray-600 text-white border-none outline-none mt-2"
                            >
                                <option value="en">English</option>
                                <option value="tl">Telugu</option>
                                <option value="hi">Hindi</option>
                                <option value="ta">Tamil</option>
                            </select>
                            <button
                                onClick={handleLogout}
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
                <button className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? (
                        <XIcon className="h-6 w-6" />
                    ) : (
                        <MenuIcon className="h-6 w-6" />
                    )}
                </button>
            </div>
            {menuOpen && (
                <nav className="md:hidden flex flex-col items-center space-y-6 py-4 bg-yellow-300 text-center">
                    <Link
                        to="/"
                        className="hover:text-gray-300 transition duration-300"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-gray-300 transition duration-300"
                        onClick={toggleMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/help"
                        className="hover:text-gray-300 transition duration-300"
                        onClick={toggleMenu}
                    >
                        Help
                    </Link>
                    {isAuthenticated ? (
                        <>
                            <select
                                value={selectedLanguage}
                                onChange={handleLanguageChange}
                                className="bg-gray-600 text-white border-none outline-none mt-2"
                            >
                                <option value="en">English</option>
                                <option value="tl">Telugu</option>
                                <option value="hi">Hindi</option>
                                <option value="ta">Tamil</option>
                            </select>
                            <button
                                onClick={handleLogout}
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="hover:text-gray-300 transition duration-300"
                                onClick={toggleMenu}
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="hover:text-gray-300 transition duration-300"
                                onClick={toggleMenu}
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
            )}
        </header>
    );
};

export default Header;
