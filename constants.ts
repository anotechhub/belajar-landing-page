import { Product, Testimonial, FaqItem } from './types';

// PUSAT DATA PRODUK & GAMBAR
// Pastikan semua path gambar di bawah ini ('imageUrl' dan 'avatarUrl')
// sesuai dengan nama file yang ada di dalam folder /images/ Anda.
export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Kurma Medjool',
        description: "Dikenal sebagai 'Raja Kurma', berukuran jumbo dengan daging tebal dan rasa manis legit seperti karamel.",
        price: 'Rp 150.000 / 500g',
        imageUrl: '/images/kurma-medjool.jpg',
        isBestSeller: true,
        initialStock: 37,
    },
    {
        id: 2,
        name: 'Kurma Ajwa',
        description: "'Kurma Nabi' yang berasal dari Madinah. Memiliki warna hitam pekat, tekstur lembut, dan rasa manis yang pas.",
        price: 'Rp 220.000 / 500g',
        imageUrl: '/images/kurma-ajwa.jpg',
        initialStock: 52,
    },
    {
        id: 3,
        name: 'Kurma Sukkari',
        description: "Teksturnya renyah di bagian luar dan sangat lembut di dalam. Manisnya pas, cocok untuk hidangan berbuka.",
        price: 'Rp 125.000 / 500g',
        imageUrl: '/images/kurma-sukkari.jpg',
        initialStock: 45,
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        quote: "Kurma Medjool dari KurmaPrime benar-benar beda! Ukurannya besar dan rasanya legit banget. Keluarga saya suka.",
        name: "Aisha Putri",
        location: "Jakarta",
        avatarUrl: '/images/avatar-aisha.jpg',
    },
    {
        id: 2,
        quote: "Packingnya rapi dan aman. Kurma Ajwa-nya asli, kualitasnya premium. Recommended seller!",
        name: "Budi Santoso",
        location: "Surabaya",
        avatarUrl: '/images/avatar-budi.jpg',
    },
    {
        id: 3,
        quote: "Pengiriman cepat dan pelayanannya ramah. Sukkari-nya jadi favorit saya untuk berbuka puasa. Manisnya pas.",
        name: "Citra Lestari",
        location: "Bandung",
        avatarUrl: '/images/avatar-citra.jpg',
    },
];

export const FAQ_DATA: FaqItem[] = [
    {
        question: 'Apa saja jenis kurma yang dijual?',
        answer: 'Kami menyediakan beberapa varian kurma premium, termasuk Medjool, Ajwa, dan Sukkari. Masing-masing memiliki karakteristik rasa dan tekstur yang unik yang kami jamin kualitasnya.'
    },
    {
        question: 'Bagaimana cara memesan?',
        answer: "Anda bisa memesan dengan mudah melalui tombol 'Pesan via WhatsApp' untuk layanan personal atau 'Beli Online' untuk checkout langsung di website kami. Tim kami akan segera memproses pesanan Anda."
    },
    {
        question: 'Apakah kurma ini alami tanpa pemanis tambahan?',
        answer: 'Benar. Semua kurma kami 100% alami, manisnya berasal dari buah itu sendiri tanpa tambahan gula atau pemanis buatan. Kami menjaga keaslian dan kemurnian produk.'
    },
    {
        question: 'Berapa lama waktu pengiriman?',
        answer: 'Waktu pengiriman bervariasi tergantung lokasi Anda. Untuk area Jabodetabek biasanya memakan waktu 1-3 hari kerja, sedangkan untuk luar Jabodetabek bisa memakan waktu 3-7 hari kerja.'
    }
];