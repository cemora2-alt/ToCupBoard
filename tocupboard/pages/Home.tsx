
import React from 'react';
import type { Page, Product } from '../types';
import { mockProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

interface HomeProps {
    onNavigate: (page: Page) => void;
    addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, addToCart }) => {
    const featuredProducts = mockProducts.slice(0, 4);

    return (
        <div className="space-y-12 md:space-y-20">
            {/* Hero Section */}
            <section className="bg-primary-50 dark:bg-primary-900/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Todo lo que necesitas, a tu alcance
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        Descubre productos esenciales de alimentación, limpieza y aseo para tu día a día.
                    </p>
                    <button
                        onClick={() => onNavigate('products')}
                        className="mt-8 px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-transform hover:scale-105"
                    >
                        Comprar Ahora
                    </button>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Productos Destacados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <button
                        onClick={() => onNavigate('products')}
                        className="px-6 py-2 border-2 border-primary-600 text-primary-600 font-bold rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                    >
                        Ver Todos los Productos
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
