
import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { mockProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

interface ProductsProps {
    addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setProducts(mockProducts);
            setIsLoading(false);
        }, 1000); // Simulate network delay
        return () => clearTimeout(timer);
    }, []);

    const LoadingSkeleton = () => (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-[340px] animate-pulse">
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-t-lg"></div>
            <div className="p-4 space-y-3">
                <div className="bg-gray-200 dark:bg-gray-700 h-6 rounded w-3/4"></div>
                <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-1/2"></div>
                <div className="flex justify-between items-center pt-2">
                    <div className="bg-gray-200 dark:bg-gray-700 h-8 rounded w-1/3"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-10 rounded-md w-1/3"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">Todos los Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {isLoading 
                    ? Array.from({ length: 8 }).map((_, index) => <LoadingSkeleton key={index} />)
                    : products.map(product => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)
                }
            </div>
        </div>
    );
};

export default Products;
