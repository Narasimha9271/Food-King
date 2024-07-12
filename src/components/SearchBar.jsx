import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="mb-4  w-4/5 md:w-1/2 mx-auto">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="🔍  Search for restaurants..."
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
        </div>
    );
};

export default SearchBar;
