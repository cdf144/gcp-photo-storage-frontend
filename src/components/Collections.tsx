import React, { useEffect } from "react";
import type { Image } from "../type/types";
import ImageCard from "../utils/imageCard";

const Collections: React.FC = () => {
    const [images, setImages] = React.useState<Image[] | []>([]);
    const fetchImages = async () => {
        const response = await fetch("https://get-images-metadata-function-432052083194.asia-southeast1.run.app/");
        const data = await response.json();
        setImages(data);
    };
    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        console.log(images);
    }, [images]);

    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-[#0F172A]">
            <div>
                <h1 className="py-5 text-4xl font-bold text-white">Your Image Collections</h1>
            </div>
            <ImageCard cards={images} />
        </div>
    );
};

export default Collections;
