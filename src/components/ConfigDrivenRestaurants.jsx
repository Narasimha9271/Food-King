/* eslint-disable react/prop-types */
import { useState } from "react";
import SearchBar from "./Searchbar";
import RestaurantCard from "./RestaurantCard";

const ConfigDrivenRestaurants = ({ restaurants }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRestaurants = restaurants
        .filter((restaurant) => restaurant && restaurant.info)
        .filter((restaurant) =>
            restaurant.info.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        );

    return (
        <div>
            <SearchBar onSearch={setSearchQuery} />
            <div className="flex flex-wrap justify-center">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        restaurant={restaurant.info}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConfigDrivenRestaurants;
