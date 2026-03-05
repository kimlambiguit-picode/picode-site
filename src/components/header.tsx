import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link href="/">PiCode Solutions</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/case-studies">Case Studies</Link>
                        </li>
                        <li>
                            <Link href="/testimonials">Testimonials</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQs</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;