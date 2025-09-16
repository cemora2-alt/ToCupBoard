
import React from 'react';
import type { CartItem } from '../types';
import { XIcon } from './icons/Icons';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onRemove: (productId: number) => void;
    onUpdateQuantity: (productId: number, newQuantity: number) => void;
    onCheckout: () => void;
    subtotal: number;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity, onCheckout, subtotal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-end" onClick={onClose}>
            <div
                className="w-full max-w-md h-full bg-white dark:bg-gray-800 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
                style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold">Carrito de Compras</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <XIcon className="w-6 h-6" />
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                        <p className="text-lg text-gray-500 dark:text-gray-400">Tu carrito está vacío.</p>
                        <button onClick={onClose} className="mt-4 px-6 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700">
                            Seguir Comprando
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-start space-x-4">
                                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                        <div className="mt-2 flex items-center">
                                            <label htmlFor={`quantity-${item.id}`} className="sr-only">Cantidad</label>
                                            <input
                                                id={`quantity-${item.id}`}
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                                                className="w-16 text-center border border-gray-300 dark:border-gray-600 rounded-md bg-transparent"
                                            />
                                        </div>
                                    </div>
                                    <button onClick={() => onRemove(item.id)} className="p-1 text-gray-500 hover:text-red-500">
                                        <XIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex justify-between font-bold text-lg mb-4">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <button onClick={onCheckout} className="w-full py-3 bg-primary-600 text-white font-bold rounded-md hover:bg-primary-700 transition-colors">
                                Proceder al Pago
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartModal;
