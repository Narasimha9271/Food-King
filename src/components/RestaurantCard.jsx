/* eslint-disable react/prop-types */
const RestaurantCard = ({ restaurant }) => {
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${restaurant.cloudinaryImageId}`;

    // Helper function to limit cuisines display
    const getCuisinesDisplay = (cuisines) => {
        if (cuisines.length > 2) {
            return cuisines.slice(0, 2).join(", ") + ",...";
        }
        return cuisines.join(", ");
    };

    return (
        <div className="w-64 bg-white rounded-lg overflow-hidden shadow-xl m-4 border border-gray-200">
            <img
                className="w-full h-40 object-cover"
                src={imageUrl}
                alt={restaurant.name}
            />

            <div className="p-4">
                <div className="font-bold text-base mb-1 text-gray-900 truncate">
                    {restaurant.name}
                </div>
                <div className="flex items-center text-sm mb-1">
                    <span className="text-black-500 font-semibold">
                        ⭐ {restaurant.avgRating}
                    </span>
                    <span className="mx-2">·</span>
                    <span className="text-gray-700 font-semibold">
                        {restaurant.sla.deliveryTime} mins
                    </span>
                </div>
                <p className="text-gray-600 text-sm mb-1 truncate">
                    {getCuisinesDisplay(restaurant.cuisines)}
                </p>
                <p className="text-gray-600 text-sm">{restaurant.areaName}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
