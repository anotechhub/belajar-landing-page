
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
    return (
        <section id="varian" className="py-20 bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Varian Kurma Premium Kami</h2>
                    <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
                        Setiap varian memiliki keunikan rasa dan tekstur, dipilih secara khusus untuk kepuasan Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                 {/* Roadmap Note */}
                 <div className="mt-16 text-center text-stone-500 bg-stone-200 p-4 rounded-lg">
                    <h4 className="font-semibold">Roadmap Pengembangan</h4>
                    <p className="text-sm mt-2">
                        <strong>MVP Saat Ini:</strong> Landing page statis untuk validasi pasar. Pemesanan melalui WhatsApp.<br/>
                        <strong>Fase Berikutnya:</strong> Integrasi dengan <strong>Supabase</strong> untuk manajemen stok & pesanan, dan <strong>Midtrans</strong> untuk checkout online.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Products;
