/* eslint-disable react/prop-types */

const RestaurantCard = ({ restaurant }) => {
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${restaurant.cloudinaryImageId}`;

    return (
        <div className="w-64 bg-white rounded-lg overflow-hidden shadow-xl m-4 border border-gray-200">
            <img
                className="w-full h-40 object-cover"
                src={imageUrl}
                alt={restaurant.name}
            />
            <div className="p-4">
                <div className="font-bold text-lg mb-1">{restaurant.name}</div>
                <p className="text-gray-600 text-sm mb-1">
                    <strong>Locality:</strong> {restaurant.locality}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                    <strong>Area:</strong> {restaurant.areaName}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                    <strong>Cost for Two:</strong> {restaurant.costForTwo}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                    <strong>Cuisines:</strong> {restaurant.cuisines.join(", ")}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                    <strong>Average Rating:</strong> {restaurant.avgRating}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Delivery Time:</strong>{" "}
                    {restaurant.sla.deliveryTime} mins
                </p>
            </div>
        </div>
    );
};

const ConfigDrivenRestaurants = ({ restaurants }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {restaurants
                .filter((restaurant) => restaurant && restaurant.info)
                .map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        restaurant={restaurant.info}
                    />
                ))}
        </div>
    );
};

export default ConfigDrivenRestaurants;
