import { useState, useEffect } from "react";
import axios from "axios";

const useFetchRestaurants = (lat, lng) => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://proxy-server-t6hm.onrender.com/api/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`
                );
                const data = response.data;

                const restaurantsData =
                    data?.data?.cards[1]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants || [];
                setRestaurants(restaurantsData);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchRestaurants();
    }, [lat, lng]);

    return { restaurants, loading, error };
};

export default useFetchRestaurants;
