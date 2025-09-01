
import React, { useState, useEffect } from 'react';

const FloatingCtaBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed bottom-0 left-0 right-0 bg-stone-800/90 backdrop-blur-sm p-4 z-50 transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <p className="text-white font-medium hidden sm:block">
                        <span className="font-bold">Kurma Medjool Best Seller</span> - Stok Terbatas!
                    </p>
                    <a href="#varian"
                       className="w-full sm:w-auto flex-shrink-0 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-full transition-colors text-center">
                        Pesan Sekarang
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FloatingCtaBar;
