
import React from 'react';

const Header: React.FC = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-amber-900">KurmaPrime</a>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollTo('varian')} className="text-stone-600 hover:text-amber-800 transition-colors">Varian</button>
                        <button onClick={() => scrollTo('testimoni')} className="text-stone-600 hover:text-amber-800 transition-colors">Testimoni</button>
                        <button onClick={() => scrollTo('faq')} className="text-stone-600 hover:text-amber-800 transition-colors">FAQ</button>
                    </nav>
                    <div>
                        <button onClick={() => scrollTo('varian')} className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors font-medium">
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
