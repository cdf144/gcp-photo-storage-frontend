import React from "react";
import FileUpload from "../utils/fileUpload";

const Home: React.FC = () => {
    const cards = [
        {
            image: "src/assets/cloud_storage.png",
            title: "Cloud Image Storage",
            description:
                "Securely upload, organize, and manage images in the cloud with fast access while keeping your data safe and always available.",
        },
        {
            image: "src/assets/text_labeling.jpg",
            title: "Image Labeling",
            description:
                "Efficiently annotate images with labels—manually or automatically—to support tasks like classification and training AI models.",
        },
        {
            image: "src/assets/ocr.png",
            title: "Image To Text",
            description:
                "Automatically extract text from images using OCR technology, enabling searchable, editable, and structured data from visual content.",
        },
    ];

    return (
        <div className="relative flex flex-col bg-white pt-10 dark:bg-[#0F172A] items-center">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap items-center">
                    {/* Left side content */}
                    <div className="w-full flex flex-col px-4 lg:w-5/12">
                        <div>
                            <p className="max-w-[520px] pt-5 text-base text-justify text-white">
                                Our online platform offers seamless image storage, advanced labeling, and image-to-text
                                processing. Easily upload and manage images in a secure cloud, annotate with precision
                                for data analysis, and extract text accurately. Unlock the power of your visual data
                                effortlessly.
                            </p>
                        </div>
                        <div>
                            <FileUpload />
                        </div>
                    </div>

                    {/* Spacer column */}
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>

                    {/* Right side image */}
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block">
                                <img src="src\assets\background.png" className="max-w-full lg:ml-auto rounded-2xl" />
                                <span className="absolute -bottom-8 -left-8 z-[-1]">
                                    <svg
                                        width="93"
                                        height="93"
                                        viewBox="0 0 93 93"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {[...Array(5)].map((_, row) =>
                                            [...Array(5)].map((_, col) => (
                                                <circle
                                                    key={`${row}-${col}`}
                                                    cx={2.5 + 22 * col}
                                                    cy={2.5 + 22 * row}
                                                    r="2.5"
                                                    fill="#3056D3"
                                                />
                                            )),
                                        )}
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10">
                <h6 className="mb-6 flex items-center text-center text-4xl font-bold text-white">OUR FEATURES</h6>
                <section className="bg-gray-2 mt-5 dark:bg-dark">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            {cards.map((card, index) => (
                                <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/3">
                                    <div className="mb-10 overflow-hidden rounded-lg bg-[#1B2532] shadow-1 duration-300 hover:shadow-3">
                                        <div className="max-w-md h-52 overflow-hidden">
                                            <img
                                                src={card.image}
                                                alt="card image"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                            <h3>
                                                <a className="mb-4 block text-xl font-semibold text-white hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px">
                                                    {card.title}
                                                </a>
                                            </h3>
                                            <p className="mb-7 text-base leading-relaxed text-gray-500 ">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div className="flex flex-col items-center mt-10">
                    <h6 className="mb-6 flex items-center text-center text-4xl font-bold text-white">OUR PARTNER</h6>
                    <a href="https://cloud.google.com/" target="_blank" className="block py-3">
                        <img src="src\assets\gcp.png" alt="gcp" className="max-w-xs max-h-xs" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
