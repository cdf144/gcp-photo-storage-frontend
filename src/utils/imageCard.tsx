import React from "react";
import type { Image } from "../type/types";

type ImageCardProps = {
    cards: Image[];
};

const ImageCard: React.FC<ImageCardProps> = ({cards}) => {
    return (
        <div>
            <section className="bg-gray-2 mt-5 dark:bg-dark">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {cards.map((card, index) => (
                            <div key={index} className="">
                            <div className="mb-10 flex flex-col overflow-hidden rounded-lg bg-[#1B2532] shadow-1 duration-300 hover:shadow-3">
                                <div className="h-52 overflow-hidden">
                                <img
                                    src={card.signedUrl}
                                    alt="card image"
                                    className="w-full h-full object-cover"
                                />
                                </div>
                                <div className="p-8 flex flex-col min-h-xs h-40 text-center sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <a className="mb-4 block text-xl font-semibold text-white">
                                    {card.fileName.slice(23)}
                                    </a>
                                </h3>
                                <p className="flex flex-wrap text-gray-500 items-center justify-center">
                                    {card.labels.map((label) => label.description).join(", ")}
                                </p>
                                </div>
                                <div className="flex flex-col items-center pb-5">
                                <div className="flex flex-row space-x-5">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-4 rounded">
                                    View
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white cursor-pointer font-bold py-2 px-4 rounded">
                                    Delete
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
        </div>
    );
}

export default ImageCard;