import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="text-sm text-center">
                <div className="d-flex flex-column flex-md-row justify-content-center">
                    <p className="m-5">
                        UMG &copy; {new Date().getFullYear()}, PROYECTO INGENIERIA DE SOFTWARE
                    </p>
                    <p className="m-5">
                        Joselito Augusto Giron Martinez
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
