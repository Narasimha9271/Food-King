/* eslint-disable react/prop-types */

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
    return (
        <div className="border-b border-gray-200 mb-4">
            <div
                onClick={setIsOpen}
                className="cursor-pointer p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 flex justify-between items-center"
            >
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <span className="text-gray-600">{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
                <div className="p-4 bg-white border border-gray-200">
                    <p className="text-gray-700">{body}</p>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
