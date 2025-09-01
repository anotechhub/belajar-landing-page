
import React, { useState, useEffect } from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [stock, setStock] = useState(product.initialStock);

    useEffect(() => {
        if (stock <= 5) return; // Stop countdown if stock is very low

        const timer = setInterval(() => {
            setStock(prevStock => {
                const newStock = prevStock - Math.floor(Math.random() * 2);
                return newStock > 5 ? newStock : 5;
            });
        }, 3000 + Math.random() * 5000); // Random interval between 3-8 seconds

        return () => clearInterval(timer);
    }, [stock]);

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative">
                <img className="w-full h-64 object-cover" src={product.imageUrl} alt={product.name} />
                {product.isBestSeller && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Best Seller
                    </span>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-amber-900">{product.name}</h3>
                <p className="mt-2 text-stone-600 flex-grow">{product.description}</p>
                <div className="mt-4">
                    <p className="text-xl font-semibold text-stone-800">{product.price}</p>
                </div>
                <div className="mt-4">
                    <div className="w-full bg-stone-200 rounded-full h-2.5">
                        <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${(stock / product.initialStock) * 100}%` }}></div>
                    </div>
                    <p className="text-sm text-red-700 font-medium mt-1">
                        Stok terbatas! Sisa {stock} box.
                    </p>
                </div>
                <div className="mt-6">
                    <a href="https://wa.me/6281234567890?text=Halo%20KurmaPrime,%20saya%20ingin%20memesan%20" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="w-full block text-center bg-amber-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-900 transition-colors">
                        Pesan Sekarang
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
