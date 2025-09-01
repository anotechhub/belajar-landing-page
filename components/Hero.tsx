
import React from 'react';

const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.428-9.888 9.89.001 2.245.652 4.352 1.846 6.233l-1.05 3.828 3.849-1.049zM9.266 8.413c-.276-.623-.496-.633-.666-.634h-.334c-.139 0-.354.062-.533.309-.18.247-.699.688-.699 1.689 0 1.001.716 1.959.813 2.108.098.149 1.403 2.131 3.395 2.989 1.992.858 2.373.693 2.799.643.427-.05 1.255-.515 1.433-.99.179-.475.179-.88.125-.99-.053-.109-.188-.168-.367-.291-.179-.123-1.052-.519-1.216-.581-.164-.062-.282-.092-.4-.092-.119 0-.237.062-.354.208-.118.147-.459.581-.564.698-.105.118-.209.133-.388.079-.179-.053-.756-.279-1.44-.894-.537-.48-.898-1.082-.994-1.272-.098-.19-.011-.291.08-.387.09-.097.199-.247.297-.37.099-.123.131-.208.199-.347.069-.139.034-.264-.019-.328z"/>
    </svg>
);

const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img 
                src="/images/hero-background.jpg" 
                alt="Perkebunan kurma premium" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    KurmaPrime: Rasakan Kemewahan Kurma Pilihan
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl">
                    Nikmati manis alami dari kurma kualitas terbaik, dipanen langsung dari perkebunan pilihan untuk momen istimewa Anda.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://wa.me/6281234567890?text=Halo%20KurmaPrime,%20saya%20tertarik%20untuk%20memesan%20kurma." 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                        <WhatsappIcon />
                        Pesan via WhatsApp
                    </a>
                    <a href="#varian"
                       className="inline-flex items-center justify-center gap-3 bg-amber-800 hover:bg-amber-900 text-white font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                       <ShoppingCartIcon />
                        Lihat Varian & Beli
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;