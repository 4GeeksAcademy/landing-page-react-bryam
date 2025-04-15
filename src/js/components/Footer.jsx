import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black p-5 text-center text-white">
            <div className="container">
                <p> Copyright © Your Website {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;