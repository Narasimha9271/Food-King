/* eslint-disable react/prop-types */

const CitySelection = ({ cities, selectedCity, onCityChange }) => {
    return (
        <div className=" ml-28 my-4">
            <label
                htmlFor="city"
                className="block text-lg font-medium text-gray-700"
            >
                Select City:
            </label>
            <select
                id="city"
                className="mt-1 block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:border-gray-300  sm:text-sm rounded-md"
                value={selectedCity}
                onChange={(e) => onCityChange(e.target.value)}
            >
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CitySelection;
