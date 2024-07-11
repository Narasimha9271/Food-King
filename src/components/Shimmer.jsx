export const ShimmerCard = () => {
    return (
        <div className="w-64 bg-gray-200 animate-pulse rounded-lg overflow-hidden shadow-lg m-4 border border-gray-300">
            <div className="w-full h-40 bg-gray-300"></div>
            <div className="p-4">
                <div className="w-3/4 h-6 bg-gray-300 mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-300 mb-1"></div>
                <div className="w-1/2 h-4 bg-gray-300 mb-1"></div>
                <div className="w-1/2 h-4 bg-gray-300 mb-1"></div>
                <div className="w-1/2 h-4 bg-gray-300 mb-1"></div>
                <div className="w-1/2 h-4 bg-gray-300 mb-1"></div>
                <div className="w-1/2 h-4 bg-gray-300"></div>
            </div>
        </div>
    );
};
