
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <div className="overflow-hidden h-48">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={product.imageUrl} alt={product.name} />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.category}</p>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-xl font-bold text-primary-600 dark:text-primary-400">${product.price.toFixed(2)}</p>
                    <button 
                        onClick={() => onAddToCart(product)}
                        className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                        aria-label={`Añadir ${product.name} al carrito`}
                    >
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
