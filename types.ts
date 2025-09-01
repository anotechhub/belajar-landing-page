
export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    isBestSeller?: boolean;
    initialStock: number;
}

export interface Testimonial {
    id: number;
    quote: string;
    name: string;
    location: string;
    avatarUrl: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}
