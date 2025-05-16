import React from "react";

const Footer: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center bg-white dark:bg-[#0F172A] pt-10">
                <h6 className="mb-6 flex items-center text-center text-4xl font-bold text-white">
                    OUR PARTNER
                </h6>
                <a href="https://cloud.google.com/" target="_blank" className="block py-3">
                    <img
                    src="src\assets\gcp.png"
                    alt="gcp"
                    className="max-w-xs max-h-xs"
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;