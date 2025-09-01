
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import CtaSection from './components/CtaSection';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingCtaBar from './components/FloatingCtaBar';

const App: React.FC = () => {
    return (
        <div className="bg-stone-50 text-stone-800 antialiased">
            <Header />
            <main>
                <Hero />
                <section id="usp" className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-amber-900">Kualitas Premium</h3>
                                <p className="mt-2 text-stone-600">Dipanen dari perkebunan terbaik untuk menjamin rasa dan kualitas terbaik.</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-amber-900">Ukuran Jumbo</h3>
                                <p className="mt-2 text-stone-600">Nikmati kepuasan maksimal dengan kurma berukuran besar dan berdaging tebal.</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-amber-900">Manis Alami</h3>
                                <p className="mt-2 text-stone-600">Rasa manis alami tanpa tambahan pemanis buatan, sehat dan lezat.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Products />
                <CtaSection />
                <Testimonials />
                <Faq />
            </main>
            <Footer />
            <FloatingCtaBar />
        </div>
    );
};

export default App;
