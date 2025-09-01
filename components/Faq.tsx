
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import type { FaqItem } from '../types';

const FaqAccordionItem: React.FC<{
    item: FaqItem;
    isOpen: boolean;
    onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-stone-200 py-6">
            <dt>
                <button onClick={onClick} className="w-full flex justify-between items-start text-left text-stone-600">
                    <span className="text-lg font-medium text-stone-900">{item.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg className={`h-6 w-6 transform ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </dt>
            <dd className={`mt-2 pr-12 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-base text-stone-600 pt-4">{item.answer}</p>
            </dd>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-stone-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Pertanyaan yang Sering Diajukan</h2>
                    <p className="mt-4 text-lg text-stone-600">
                        Menemukan jawaban yang Anda butuhkan? Hubungi kami jika ada pertanyaan lain.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <dl className="space-y-2">
                        {FAQ_DATA.map((item, index) => (
                            <FaqAccordionItem
                                key={index}
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Faq;
