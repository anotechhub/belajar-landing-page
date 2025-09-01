
import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <section className="bg-amber-900">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Siap Menikmati Kurma Kualitas Terbaik?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-amber-100">
                    Jangan tunda lagi. Pesan KurmaPrime sekarang dan hadirkan kelezatan premium di tengah keluarga Anda.
                </p>
                <a href="#varian"
                   className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-900 bg-white hover:bg-amber-50 sm:w-auto">
                    Lihat Semua Varian
                </a>
            </div>
        </section>
    );
};

export default CtaSection;
