
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section id="testimoni" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Apa Kata Pelanggan Kami</h2>
                    <p className="mt-4 text-lg text-stone-600">
                        Kami bangga dapat memberikan produk dan layanan terbaik.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map(testimonial => (
                        <div key={testimonial.id} className="bg-stone-100 p-8 rounded-xl">
                            <blockquote className="text-stone-700">
                                <p>" {testimonial.quote} "</p>
                            </blockquote>
                            <figcaption className="flex items-center mt-6">
                                <img className="h-12 w-12 rounded-full" src={testimonial.avatarUrl} alt={testimonial.name} />
                                <div className="ml-4">
                                    <div className="text-base font-semibold text-stone-900">{testimonial.name}</div>
                                    <div className="text-sm text-stone-600">{testimonial.location}</div>
                                </div>
                            </figcaption>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
