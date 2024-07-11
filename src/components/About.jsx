/* eslint-disable react/prop-types */
import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";
import { LANG } from "../utils/langConfig";

const About = ({ selectedLanguage }) => {
    const lang = LANG[selectedLanguage];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-6">
                <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">
                    {lang.title}
                </h1>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-semibold mb-4">
                        {lang.story}
                    </h2>
                    <img
                        src={pic1}
                        alt="Our Story"
                        className="w-full h-64 object-cover rounded mb-6"
                    />
                    <p className="text-gray-700 leading-loose mb-6">
                        {lang.desc1}
                    </p>

                    <h2 className="text-3xl font-semibold mb-4">
                        {lang.title2}
                    </h2>
                    <ul className="list-disc list-inside mb-6 text-gray-700">
                        <li className="mb-2">
                            <strong>{lang.quality}:</strong> {lang.desc2}
                        </li>
                        <li className="mb-2">
                            <strong>{lang.innov}:</strong> {lang.desc3}
                        </li>
                        <li className="mb-2">
                            <strong>{lang.cust}:</strong> {lang.desc4}
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold mb-4">
                        {lang.title3}
                    </h2>
                    <img
                        src={pic2}
                        alt="Our Team"
                        className="w-full h-64 object-cover rounded mb-6"
                    />
                    <p className="text-gray-700 leading-loose">{lang.desc5}</p>
                </div>
            </div>
        </div>
    );
};

export default About;
