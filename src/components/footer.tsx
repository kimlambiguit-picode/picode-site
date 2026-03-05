import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} PiCode Solutions. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                </div>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;