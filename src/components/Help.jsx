import { useState } from "react";
import AccordionItem from "./AccordionItem";

import { data } from "../utils/faqConfig";

const Help = () => {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <>
            <div className="text-3xl md:text-5xl font-semibold ml-4 md:ml-72 mt-10">
                FAQ
            </div>

            <div className="max-w-3xl mx-auto mt-8">
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        body={item.body}
                        isOpen={index === openIdx}
                        setIsOpen={() => {
                            index === openIdx
                                ? setOpenIdx(null)
                                : setOpenIdx(index);
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default Help;
