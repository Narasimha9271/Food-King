// const Footer = () => {
//     return (
//         <footer className="bg-gray-800 text-white py-6">
//             <div className="container mx-auto px-4">
//                 <div className="flex justify-between items-center">
//                     <div className="flex flex-col space-y-2">
//                         <a href="/about" className="hover:text-gray-400">
//                             About
//                         </a>
//                         <a href="/faq" className="hover:text-gray-400">
//                             FAQ
//                         </a>
//                     </div>
//                     <div className="text-sm">
//                         © 2024 Food Ordering, Inc. All rights reserved.
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="mb-8 lg:mb-0">
                        <h4 className="text-lg font-bold mb-4">Food King</h4>
                        <p className="text-gray-400">
                            Order your favorite meals from the best restaurants
                            in town.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
                        <div>
                            <h5 className="text-md font-semibold mb-3">
                                Company
                            </h5>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="/about"
                                        className="hover:text-gray-400"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/help"
                                        className="hover:text-gray-400"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-gray-400">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-gray-400">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-md font-semibold mb-3">
                                Support
                            </h5>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/" className="hover:text-gray-400">
                                        Customer Support
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-gray-400">
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-gray-400">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-md font-semibold mb-3">
                                Follow Us
                            </h5>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://facebook.com"
                                        className="hover:text-gray-400"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com"
                                        className="hover:text-gray-400"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://instagram.com"
                                        className="hover:text-gray-400"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com"
                                        className="hover:text-gray-400"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    © 2024 Food Ordering, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
